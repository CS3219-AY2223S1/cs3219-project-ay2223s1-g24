import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUserToRoomDB } from './db/db.js';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Hello World from collaboration-service');
});

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"]
  }
})

io.on("connection", (socket) => {
  console.log("Client connected with id: " + socket.id);

  socket.on("JOIN_ROOM", (roomID, username) => {
    socket.join(roomID);
    // addUserToRoomDB(roomID, username);
    console.log("User with username: " + username + "has joined room: " + roomID);
  })

  socket.on("SET_TEXT", (text, roomID) => {
    socket.to(roomID).emit("UPDATE_TEXT", text);
  })

  socket.on("SAVE_CODE", (roomID, code) => {
    // saveCodeToDB(roomID, code);
    console.log("Saved code for room: " + roomID);
  })
});

httpServer.listen(8080);
