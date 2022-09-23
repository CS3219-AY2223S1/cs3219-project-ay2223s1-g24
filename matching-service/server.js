import express from "express";
import cors from "cors";
import { createServer } from "http";
import { Server } from "socket.io";
import { addUserToQueue, deleteUserFromQueue } from "./queue/queue.js";

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors()); // config cors so that front-end can use
app.options("*", cors());

app.get("/", (req, res) => {
  res.send("Hello World from matching-service");
});

const httpServer = createServer(app);
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000", "http://localhost:3987"],
  },
});

io.on("connection", (socket) => {
  console.log("Client connected with id: " + socket.id);
  // client to pass a difficulty parameter through socket in the future
  socket.on("JOIN_QUEUE", (difficulty) => {
    console.log("Client joined the queue with id: " + socket.id);
    addUserToQueue(socket.id, difficulty, io);
  });

  socket.on("LEAVE_QUEUE", () => {
    console.log("Client has left queue: " + socket.id);
    deleteUserFromQueue(socket.id);
  });

  socket.on("JOIN_ROOM", (roomID) => {
    console.log(
      "Client with socket id: " + socket.id + " has joined room: " + roomID
    );
    socket.join(roomID);
  });

  socket.on("disconnect", () => {
    console.log("Client disconnected with id: " + socket.id);
    deleteUserFromQueue(socket.id);
  });
});

httpServer.listen(8001);
