import React, { useState, useEffect } from 'react';
import { Routes, Route, useNavigate } from "react-router-dom";
import "./dashboardComponent.scss";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import { io } from "socket.io-client";



function DashboardComponent() {

  const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState('')
  
  useEffect(() => {
    const socket = io.connect("http://localhost:8001");
    setSocket(socket);

    socket.on("MATCHED", (roomID) => {
      console.log("[FRONTEND] MATCHED with room ID: " + roomID);
      setRoomId(roomID)
      socket.emit("JOIN_ROOM", roomID);
    });
  }, [])

  const navigate = useNavigate();
  useEffect(() => {
    if (roomId !== '') {
      navigate(`/coding/${roomId}`);
    }
  }, [roomId])

  const [easyModal, setEasyModal] = useState(false)
  const openEasyModal = () =>{
    setEasyModal(true)
  }
  const closeEasyModal = () =>{
    setEasyModal(false)
  }
  const [easyQueue, setEasyQueue] = useState(false)
  const easyQueueConnect = () => {
    socket.emit("JOIN_QUEUE", "easy")
    console.log("Easy queue connect button pressed!")
    setEasyQueue(true)
  }
  const easyQueueDisconnect = () =>{
    socket.emit("LEAVE_QUEUE");
    // TODO: handle use case for then the client is no-longer in queue
    console.log("Easy queue disconnect button pressed!")
    setEasyQueue(false)
  }

  const [mediumModal, setMediumModal] = useState(false)
  const openMediumModal = () =>{
    setMediumModal(true)
  }
  const closeMediumModal = () =>{
    setMediumModal(false)
  }
  const [mediumQueue, setMediumQueue] = useState(false)
  const mediumQueueConnect = () => {
    socket.emit("JOIN_QUEUE", "medium")
    console.log("medium queue connect button pressed!")
    setMediumQueue(true)
  }
  const mediumQueueDisconnect = () =>{
    socket.emit("LEAVE_QUEUE");
    // TODO: handle use case for then the client is no-longer in queue
    console.log("medium queue disconnect button pressed!")
    setMediumQueue(false)
  }

  return (
    <div className="main">
      <div className="flexbox-container-main">

      <Dialog open={easyModal}>
          <DialogTitle>Match Service</DialogTitle>
          <DialogContent
            sx={{ display: "flex", "flex-direction": "column", width: "300px" }}
          >
            <span style={{ marginBottom: "20px" }}>
              Please confirm that you want to be matched into the easy question room
            </span>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              disabled={easyQueue}
              sx={{ ml: "7px" }}
              onClick={easyQueueConnect}
            >
              Confirm
            </Button>

            
            <Button
              disabled={!easyQueue}
              sx={{ mr: "7px" }}
              onClick={easyQueueDisconnect}
            >
              Cancel
            </Button>

            <Button
              sx={{ mr: "7px" }}
              onClick={closeEasyModal}
            >
              Go back
            </Button>
          </DialogActions>
      </Dialog>

      <Dialog open={mediumModal}>
          <DialogTitle>Match Service</DialogTitle>
          <DialogContent
            sx={{ display: "flex", "flex-direction": "column", width: "300px" }}
          >
            <span style={{ marginBottom: "20px" }}>
              Please confirm that you want to be matched into the medium question room
            </span>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              disabled={mediumQueue}
              sx={{ ml: "7px" }}
              onClick={mediumQueueConnect}
            >
              Confirm
            </Button>

            
            <Button
              disabled={!mediumQueue}
              sx={{ mr: "7px" }}
              onClick={mediumQueueDisconnect}
            >
              Cancel
            </Button>

            <Button
              sx={{ mr: "7px" }}
              onClick={closeMediumModal}
            >
              Go back
            </Button>
          </DialogActions>
      </Dialog>

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={8} className="grid-container">

        <Grid item>
            <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"
                  alt="green background color"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Easy
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Questions that usually sets the tone for the concepts that will be
                    tested subsequently
                  </Typography>
                </CardContent>
              <CardActions>
                <Button size="small" color="primary" onClick={openEasyModal}>
                  Find Room
                </Button>
              </CardActions>
            </Card>
          </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://htmlcolorcodes.com/assets/images/colors/yellow-color-solid-background-1920x1080.png"
                alt="yellow background color"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Medium
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Majority of the online assessment questions and real life interview questions are of this level
                </Typography>
              </CardContent>
            <CardActions>
                <Button size="small" color="primary" onClick={openMediumModal}>
                  Find Room
                </Button>
            </CardActions>
          </Card>
        </Grid>
        
        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                alt="red background color"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Frequently asked for firms that focus on trading-related activities. Not very common
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Find Room
              </Button>
            </CardActions>
          </Card>
        </Grid>

      </Grid>

      </div>
    </div>
  );
}

export default DashboardComponent;
