import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUserToRoomDB, removeUserFromRoomDB, saveCodeToDB, retrieveCodeFromDB, retrieveRoomDataFromDB, deleteRoomInDB } from './db/db.js';

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
    // origin: ["http://localhost:3000"],
    origin: '*',
  },
});

io.on("connection", (socket) => {
  console.log("Client connected with id: " + socket.id);

  socket.on("JOIN_ROOM", (roomID, username, difficulty, firstQuestion, secondQuestion) => {
    socket.join(roomID);
    addUserToRoomDB(roomID, username, difficulty, firstQuestion, secondQuestion);
    console.log("User with username: " + username + " has joined room: " + roomID);
  })

  socket.on("RETRIEVE_ROOM", async (username) => {
    const roomData = await retrieveRoomDataFromDB(username);
    if (roomData) {
      socket.join(roomData.room_id);
      socket.emit("RECEIVE_ROOM_DATA", roomData.room_id, roomData.difficulty, roomData.first_question, roomData.second_question);
    } else {
      socket.emit("RECEIVE_ROOM_DATA");
    }
  })

  socket.on("SET_TEXT", (text, roomID) => {
    socket.to(roomID).emit("UPDATE_TEXT", text);
  });

  socket.on("SAVE_CODE", (roomID, code) => {
    saveCodeToDB(roomID, code);
    console.log("Saved code for room: " + roomID);
  });

  socket.on("RETRIEVE_CODE", async (roomID) => {
    const code = await retrieveCodeFromDB(roomID);
    console.log("Retrieved code for room: " + roomID);
    socket.emit("UPDATE_TEXT", code);
  });

  socket.on("END_SESSION", (roomID) => {
    deleteRoomInDB(roomID);
    socket.to(roomID).emit("SESSION_ENDED");
    console.log("Ending session for room: " + roomID);
  })

  socket.on("disconnect", () => {
    console.log("Client disconnected with id: " + socket.id);
  });
});

const port = process.env.PORT || 8081
httpServer.listen(port);
// httpServer.listen(8081);
