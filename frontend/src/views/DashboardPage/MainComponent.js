import { useState, useEffect } from "react";
import "./mainComponent.scss";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Alert,
  Box,
  CircularProgress,
  Button,
  Card,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Typography,
} from "@mui/material";
import { io } from "socket.io-client";
import { useUsername } from "slices/usernameSlice";
import { setRoom } from "slices/roomSlice";
import { useDispatch } from "react-redux";

const RATIO = 100 / 10;

function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color="text.secondary"
          fontSize="2.5rem"
        >
          {`${Math.round(props.value / RATIO)}s`}
        </Typography>
      </Box>
    </Box>
  );
}

function DashboardComponent() {
  const [EASY, MEDIUM, HARD] = ["easy", "medium", "hard"];
  const [DEFAULT, ERROR, SUCCESS] = ["", "ERROR", "SUCCESS"];
  const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState("");
  const [matchStatus, setMatchStatus] = useState(DEFAULT);
  const [roomDifficulty, setRoomDifficulty] = useState(null);
  const [progress, setProgress] = useState(100);
  const [easyModal, setEasyModal] = useState(false);
  const [isQueueing, setIsQueueing] = useState(false);
  const location = useLocation();
  const dispatch = useDispatch();
  const username = useUsername();

  const openEasyModal = () => {
    setEasyModal(true);
  };
  const closeEasyModal = () => {
    setEasyModal(false);
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:8001");
    setSocket(socket);
    socket.on("MATCHED", (roomID, firstHash, secondHash, difficulty) => {
      setMatchStatus(SUCCESS);
      setTimeout(() => {
        console.log(
          "[FRONTEND] MATCHED with room ID: " +
            roomID +
            " first hash: " +
            firstHash +
            " second hash: " +
            secondHash +
            " of difficulty: " +
            difficulty
        );
        dispatch(
          setRoom({
            roomID,
            firstQuestionHash: firstHash,
            secondQuestionHash: secondHash,
            difficulty,
          })
        );
        setRoomId(roomID);
        socket.disconnect();
      }, 3000);
    });
    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  const navigate = useNavigate();
  useEffect(() => {
    if (roomId === "") {
      return;
    }
    navigate(`/coding/${roomId}`);
  });

  useEffect(() => {
    if (location.pathname !== "/dashboard") {
      socket.disconnect();
    }
    // eslint-disable-next-line
  }, [location]);

  useEffect(() => {
    if (socket == null) {
      return;
    }

    if (isQueueing) {
      socket.emit("JOIN_QUEUE", username, roomDifficulty);
    } else {
      socket.emit("LEAVE_QUEUE");
    }
    // eslint-disable-next-line
  }, [isQueueing]);

  useEffect(() => {
    if (progress <= 0 && matchStatus !== SUCCESS) {
      setIsQueueing(false);
      setMatchStatus(ERROR);
    }
    // eslint-disable-next-line
  }, [progress]);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) =>
        prevProgress <= 0 + RATIO ? 0 : prevProgress - RATIO
      );
    }, 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="main">
      <div className="flexbox-container-main">
        <Dialog open={easyModal}>
          <DialogTitle>Finding a match for you..</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              justifyContent: "center",
              width: "300px",
              flexDirection: "column",
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <CircularProgressWithLabel value={progress} size={"7rem"} />
            </div>
            {matchStatus === SUCCESS && (
              <Alert sx={{ mt: "10px", fontSize: "14px", display: "flex" }}>
                Match found!
                <div style={{ paddingRight: "10px" }}>
                  Redirecting to room..
                  <CircularProgress
                    color="inherit"
                    size="12px"
                    sx={{ ml: "5px" }}
                  />
                </div>
              </Alert>
            )}

            {matchStatus === ERROR && progress <= 0 && (
              <Alert
                severity={"error"}
                sx={{ mt: "10px", fontSize: "14px", display: "flex" }}
              >
                Match could not be found.
              </Alert>
            )}
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "center", pb: "15px" }}
          >
            {matchStatus === ERROR && (
              <Button
                variant="contained"
                sx={{}}
                onClick={() => {
                  setMatchStatus(DEFAULT);
                  setIsQueueing(true);
                  setProgress(100);
                }}
              >
                Continue Matching
              </Button>
            )}
            <Button
              variant="contained"
              sx={{}}
              onClick={() => {
                closeEasyModal();
                setIsQueueing(false);
              }}
            >
              Cancel
            </Button>
          </DialogActions>
        </Dialog>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          spacing={8}
          className="grid-container"
        >
          <Grid item>
            <div
              className={`glow-green ${
                roomDifficulty === EASY ? "selected" : ""
              }`}
              onClick={() => setRoomDifficulty(EASY)}
            >
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
                    Questions that usually sets the tone for the concepts that
                    will be tested subsequently
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item>
            <div
              className={`glow-yellow ${
                roomDifficulty === MEDIUM ? "selected" : ""
              }`}
              onClick={() => setRoomDifficulty(MEDIUM)}
            >
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
                    Majority of the online assessment questions and real life
                    interview questions are of this level
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>

          <Grid item>
            <div
              className={`glow-red ${
                roomDifficulty === HARD ? "selected" : ""
              }`}
              onClick={() => {
                console.log("selecting");
                setRoomDifficulty(HARD);
              }}
            >
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
                    Frequently asked for firms that focus on trading-related
                    activities. Not very common
                  </Typography>
                </CardContent>
              </Card>
            </div>
          </Grid>
        </Grid>
      </div>
      <Button
        className="find-room-btn"
        size="small"
        variant="contained"
        color="primary"
        onClick={() => {
          openEasyModal();
          setIsQueueing(true);
          setProgress(100);
        }}
      >
        Find Room
      </Button>
    </div>
  );
}

export default DashboardComponent;
