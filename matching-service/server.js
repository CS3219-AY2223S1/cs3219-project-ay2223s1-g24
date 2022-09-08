import express from 'express';
import cors from 'cors';
import { createServer } from 'http';
import { Server } from 'socket.io';
import { addUserToQueue, deleteUserFromQueue } from './queue/queue.js';

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
});

io.on("connection", (socket) => {
    console.log("Client connected with id: " + socket.id);
    addUserToQueue(socket.id, io);
    socket.on("disconnect", () => {
        console.log("Client disconnected with id: " + socket.id);
        deleteUserFromQueue(socket.id);
    });
    socket.on("leaveQueue", () => {
        console.log("Client has left queue: " + socket.id);
        deleteUserFromQueue(socket.id);
    });
});

httpServer.listen(8001);
