import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import {
  addUserToRoomDB,
  removeUserFromRoomDB,
  saveCodeToDB,
  retrieveCodeFromDB,
  retrieveRoomDataFromDB,
  deleteRoomInDB,
} from "./db/db.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World from collaboration-service");
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"],
    // origin: '*',
  },
});

const usersList = {};

function addUserIntoCallRoom(roomId, socketId) {
  // Store socket id in dictionary
  if (!usersList[roomId]) {
    usersList[roomId] = [socketId];
  } else if (!usersList[roomId].includes(socketId)) {
    usersList[roomId].push(socketId);
  }
}

io.on("connection", (socket) => {
  console.log("Client connected with id: " + socket.id);

  socket.emit("yourID", socket.id);

  socket.on(
    "JOIN_ROOM",
    (roomID, username, difficulty, firstQuestion, secondQuestion) => {
      socket.join(roomID);
      addUserToRoomDB(
        roomID,
        username,
        difficulty,
        firstQuestion,
        secondQuestion
      );
      console.log(
        "User with username: " + username + " has joined room: " + roomID
      );

      addUserIntoCallRoom(roomID, socket.id);
      // console.log(
      //   `List of sockets for room ID ${roomID}: ${usersList[roomID]}`
      // );
    }
  );

  socket.on("RETRIEVE_ROOM", async (username) => {
    const roomData = await retrieveRoomDataFromDB(username);
    if (roomData) {
      socket.join(roomData.room_id);
      socket.emit(
        "RECEIVE_ROOM_DATA",
        roomData.room_id,
        roomData.difficulty,
        roomData.first_question,
        roomData.second_question
      );
    } else {
      socket.emit("RECEIVE_ROOM_DATA");
    }
  });

  socket.on("SET_TEXT", (text, roomID) => {
    socket.to(roomID).emit("UPDATE_TEXT", text);
  });

  socket.on("SAVE_CODE", (roomID, code) => {
    saveCodeToDB(roomID, code);
    console.log("Saved code for room: " + roomID);
  });

  socket.on("RETRIEVE_CODE", async (roomID) => {
    const code = await retrieveCodeFromDB(roomID);
    // Add user back into call upon reconnecting
    addUserIntoCallRoom(roomID, socket.id);
    console.log("Retrieved code for room: " + roomID);
    console.log("Retrieved code: " + code);
    socket.emit("UPDATE_TEXT", code);
  });

  socket.on("END_SESSION", (roomID) => {
    deleteRoomInDB(roomID);
    socket.to(roomID).emit("SESSION_ENDED");
    console.log("Ending session for room: " + roomID);
  });

  socket.on("disconnect", () => {
    console.log("This is being called!");
    for (let rooms in usersList) {
      if (
        usersList[rooms].includes(socket.id) &&
        usersList[rooms].length == 1
      ) {
        // console.log(
        //   `Deleting room id: ${rooms} with users: ${usersList[rooms]}`
        // );
        delete usersList[rooms];
      } else {
        const index = usersList[rooms].indexOf(socket.id);
        // console.log(`Removing socket id: ${socket.id} from room: ${rooms}`);
        usersList[rooms].splice(index, 1);
      }
    }
  });

  // Socket calling events
  socket.on("callUser", (data) => {
    console.log("Calling Peer socket id: " + data.from);
    io.to(data.userToCall).emit("hey", {
      signal: data.signalData,
      from: data.from,
    });
  });

  socket.on("RETRIEVE_PEER_ID", (roomID) => {
    console.log("Room ID to retrieve peer ID: " + roomID);
    let userList;
    userList = usersList[roomID];
    console.log(`Hi ${userList}`);
    let peerID;
    if (!userList) {
      return;
    }
    userList.forEach((user) => {
      if (user !== socket.id) {
        peerID = user;
      }
    });

    console.log(`Socket id: ${socket.id}, peer ID: ${peerID}`);
    socket.emit("RECEIVE_PEER_ID", peerID);
  });

  socket.on("acceptCall", (data) => {
    io.to(data.to).emit("callAccepted", data.signal);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected with id: " + socket.id);
  });
});

// httpServer.listen(8080);
httpServer.listen(8081);
