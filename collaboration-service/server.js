import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World from collaboration-service");
});

var numConnections = 0;

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:8001"],
  },
});

function addConnection() {
  numConnections = numConnections + 1;
}

io.on("connection", (socket) => {
  console.log("Client has connected with id: " + socket.id);

  // socket.on("JOIN", () => {
  //   addConnection();
  //   console.log("Client has joined with id: " + socket.id);
  //   if (numConnections === 1) {
  //     console.log("I'm the 1st client server-side!");
  //   } else if (numConnections === 2) {
  //     console.log("I'm the 2nd client server-side!");
  //     numConnections = numConnections % 2;
  //   }
  //   // addUserToQueue(socket.id, difficulty, io);
  // });

  socket.on("SEND_TEXT", (text) => {
    console.log("Text has successfully been received: " + text);
    socket.broadcast.emit("RECEIVE_TEXT", text);
  });

  // socket.on("SEND_INITIAL_QUESTION", (question) => {
  //   // console.log(
  //   //   "Starting question has successfully been received: " + question
  //   // );
  //   socket.broadcast.emit("RECEIVE_INITIAL_QUESTION", question);
  // });

  socket.on("SEND_CHANGE_QUESTION", (question, qnIndex) => {
    // console.log("Question has successfully been received: " + question);
    // console.log("Question Index successfully been received: " + qnIndex);
    socket.broadcast.emit("RECEIVE_CHANGE_QUESTION", question, qnIndex);
  });

  socket.on("SEND_TOGGLE_QUESTION", (qnIndex) => {
    console.log("Question number has successfully been changed: " + qnIndex);
    socket.broadcast.emit("RECEIVE_TOGGLE_QUESTION", qnIndex);
  });

  //   socket.on("JOIN_ROOM", (roomID) => {
  //     console.log(
  //       "Client with socket id: " + socket.id + " has joined room: " + roomID
  //     );
  //     socket.join(roomID);
  //   });

  //   socket.on("disconnect", () => {
  //     console.log("Client disconnected with id: " + socket.id);
  //     deleteUserFromQueue(socket.id);
  //   });
});

httpServer.listen(8080);
