import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';

const app = express();
app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors()) // config cors so that front-end can use
app.options('*', cors())

app.get('/', (req, res) => {
  res.send('Hello World from matching-service');
});

const httpServer = createServer(app)
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3000"]
  }
})

io.on("connection", (socket) => {
  console.log("Client connected with id: " + socket.id);

  socket.on("JOIN_ROOM", (roomID) => {
    socket.join(roomID);
  })

  socket.on("SET_TEXT", (text, roomID) => {
    socket.to(roomID).emit("UPDATE_TEXT", text);
  })

  socket.on("SAVE_TEXT", (roomID) => {

  })
});

httpServer.listen(8080);