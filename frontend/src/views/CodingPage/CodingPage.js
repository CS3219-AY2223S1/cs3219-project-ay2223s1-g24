import React, { useRef, useState, useEffect, useCallback } from "react";
import { Alert, Button, Dialog } from "@mui/material";
import MicOffIcon from "@mui/icons-material/MicOff";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import { COLLABORATION_SERVICE_SOCKET_ENDPOINT } from "configs";
import { useRoom, setRoom } from "slices/roomSlice";
import Editor from "components/Editor/Editor";
import "./codingPage.scss";
import CodeNavBar from "components/CodeNavBar/CodeNavBar";
import Peer from "simple-peer";
import Draggable from "react-draggable";
import MicIcon from "@mui/icons-material/Mic";
import VideocamIcon from "@mui/icons-material/Videocam";
import VideocamOffIcon from "@mui/icons-material/VideocamOff";

import styled from "styled-components";

const Row = styled.div`
  display: flex;
  width: 100%;
`;

const Video = styled.video`
  border: 1px solid darkgray;
  width: 100%;
  height: 100%;
`;

const PlaceholderVideo = styled.div`
  border: 1px solid darkgray;
  background-color: black;
  width: 100%;
  height: 100%;
`;

function CodingPage() {
  const [text, setText] = useState("");
  const [question, setQuestion] = useState();
  const [currentSocket, setCurrentSocket] = useState(null);
  const [isSavingCode, setIsSavingCode] = useState(false);
  const [leaveSession, setLeaveSession] = useState(false);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();

  const [yourID, setYourID] = useState("");
  // const [peerID, setPeerID] = useState("");
  // const [users, setUsers] = useState({});
  const [stream, setStream] = useState();
  const [receivingCall, setReceivingCall] = useState(false);
  const [caller, setCaller] = useState("");
  const [callerSignal, setCallerSignal] = useState();
  const [callAccepted, setCallAccepted] = useState(false);
  const [isMuted, setMuted] = useState(false);
  const [isVideoOff, setVideoOff] = useState(false);
  const [DEFAULT, CONNECTED] = ["", "CONNECTED"];
  const [callStatus, setCallStatus] = useState(DEFAULT);
  const [hasPartnerDisconnect, setHasPartnerDisconnect] = useState(false);
  const [areUsersConnected, setAreUsersConnected] = useState(false);
  const [reconnectMsgShown, setReconnectMsgShown] = useState(false);
  const [welcomeMsgShown, setWelcomeMsgShown] = useState(false);

  const userVideo = useRef();
  const partnerVideo = useRef();

  const resetFields = () => {
    setHasPartnerDisconnect(false);
    setAreUsersConnected(false);
    setReconnectMsgShown(false);
    setWelcomeMsgShown(false);
  };

  const questionSize = {
    easy: 456,
    medium: 388,
    hard: 424,
  };
  const [cookies, setCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
    "roomID",
    "firstQuestionHash",
    "secondQuestionHash",
    "difficulty",
  ]);

  const readNewQuestion = async (
    firstQuestionHash,
    secondQuestionHash,
    difficulty
  ) => {
    const firstQuestionNumber =
      (firstQuestionHash % questionSize[difficulty]) + 1;
    let secondQuestionNumber =
      (secondQuestionHash % questionSize[difficulty]) + 1;

    const questionOne = await import(
      `questions/${difficulty}/q${firstQuestionNumber}.js`
    );

    if (firstQuestionNumber === secondQuestionNumber) {
      secondQuestionNumber =
        (firstQuestionNumber + 1) % questionSize[difficulty];
    }

    const questionTwo = await import(
      `questions/${difficulty}/q${secondQuestionNumber}.js`
    );

    setQuestion(questionOne.question);
    qnOne.current = questionOne.question;
    qnTwo.current = questionTwo.question;
  };

  const loadQuestionOne = () => {
    questionNumber.current = questionNumber.current - 1;
    setQuestion(qnOne.current);
  };

  const loadQuestionTwo = () => {
    questionNumber.current = questionNumber.current + 1;
    setQuestion(qnTwo.current);
  };

  const room = useRoom();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const emitText = (text) => {
    currentSocket.emit("SET_TEXT", text, room.roomID);
  };

  const saveCode = () => {
    console.log("Save is working!");
    currentSocket.emit("SAVE_CODE", room.roomID, text);
  };

  const endSession = () => {
    console.log("Telling Client 2 to leave page...");
    setCookie("roomID", "", { path: `/` });
    setCookie("firstQuestionHash", "", { path: `/` });
    setCookie("secondQuestionHash", "", { path: `/` });
    setCookie("difficulty", "", { path: `/` });
    currentSocket.emit("END_SESSION", room.roomID);
  };

  const callPeer = useCallback(
    (socket, id) => {
      // Execute only if socket initialised and socket IDs are present
      console.log(
        `Socket: ${socket}, Current socket ID: ${yourID}, Peer ID: ${id}`
      );
      if (socket && id !== "" && yourID !== "") {
        const peer = new Peer({
          initiator: true,
          trickle: false,
          config: {
            iceServers: [
              {
                urls: "stun:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683",
              },
              {
                urls: "turn:numb.viagenie.ca",
                username: "sultan1640@gmail.com",
                credential: "98376683",
              },
            ],
          },
          stream: stream,
        });

        peer.on("signal", (data) => {
          console.log(
            "Calling Peer socket id: " + id + ", current socket id: " + yourID
          );
          socket.emit("callUser", {
            userToCall: id,
            signalData: data,
            from: yourID,
          });
        });

        peer.on("stream", (stream) => {
          if (partnerVideo.current) {
            partnerVideo.current.srcObject = stream;
          }
        });

        socket.on("callAccepted", (signal) => {
          setCallAccepted(true);
          setCallStatus(CONNECTED);
          peer.signal(signal);
        });
      }
    },
    // eslint-disable-next-line
    [stream, yourID]
  );

  const acceptCall = useCallback(() => {
    console.log(
      `Caller signal: ${callerSignal}, currentSocket: ${currentSocket}`
    );
    setCallAccepted(true);
    setCallStatus(CONNECTED);
    const peer = new Peer({
      initiator: false,
      trickle: false,
      stream: stream,
    });
    peer.on("signal", (data) => {
      currentSocket.emit("acceptCall", { signal: data, to: caller });
    });

    peer.on("stream", (stream) => {
      partnerVideo.current.srcObject = stream;
    });

    peer.signal(callerSignal);
    // eslint-disable-next-line
  }, [caller, callerSignal, currentSocket, stream]);

  let UserVideo;
  if (stream) {
    UserVideo = <Video playsInline muted ref={userVideo} autoPlay />;
  } else {
    UserVideo = <PlaceholderVideo />;
  }

  let PartnerVideo;
  if (callAccepted) {
    PartnerVideo = <Video playsInline ref={partnerVideo} autoPlay />;
  } else {
    PartnerVideo = <PlaceholderVideo />;
  }

  const retrievePeerId = () => {
    currentSocket.emit("RETRIEVE_PEER_ID", room.roomID);
  };

  const handleCall = useCallback(
    (socket, peerId) => {
      console.log(`Current socket: ${socket}`);
      callPeer(socket, peerId);
    },
    [callPeer]
  );

  const muteAudio = () => {
    stream.getAudioTracks()[0].enabled = false;
  };

  const unmuteAudio = () => {
    stream.getAudioTracks()[0].enabled = true;
  };

  const pauseVideo = () => {
    stream.getVideoTracks()[0].enabled = false;
  };

  const unpauseVideo = () => {
    stream.getVideoTracks()[0].enabled = true;
  };

  useEffect(() => {
    const socket = io.connect(COLLABORATION_SERVICE_SOCKET_ENDPOINT);
    // const socket = io.connect("http://localhost:8081");
    // const socket = io.connect("http://collaboration-service-dev.ap-southeast-1.elasticbeanstalk.com/");
    setCurrentSocket(socket);
    if (
      room.roomID === "" ||
      room.difficulty === "" ||
      room.firstQuestionHash === 0 ||
      room.secondQuestionHash === 0
    ) {
      console.log("retrieving for username: " + cookies.name);
      socket.emit("RETRIEVE_ROOM", cookies.name);
      socket.on(
        "RECEIVE_ROOM_DATA",
        (roomID, difficulty, firstQuestion, secondQuestion, id) => {
          if (!roomID || !difficulty || !firstQuestion || !secondQuestion) {
            endSession();
            navigate("/");
            console.log("Room not found! Redirecting back to main page...");
          } else {
            readNewQuestion(firstQuestion, secondQuestion, difficulty);
            socket.emit("RETRIEVE_CODE", roomID);
            dispatch(
              setRoom({
                roomID: roomID,
                firstQuestionHash: firstQuestion,
                secondQuestionHash: secondQuestion,
                difficulty: difficulty,
              })
            );
            console.log(`Socket id received: ${id}`);
          }
        }
      );
    } else {
      readNewQuestion(
        room.firstQuestionHash,
        room.secondQuestionHash,
        room.difficulty
      );
      socket.emit(
        "JOIN_ROOM",
        room.roomID,
        cookies.name,
        room.difficulty,
        room.firstQuestionHash,
        room.secondQuestionHash
      );
      socket.emit("RETRIEVE_CODE", room.roomID);
    }
    socket.on("UPDATE_TEXT", (text) => {
      setText(text);
    });
    socket.on("SESSION_ENDED", () => {
      setLeaveSession(true);
      resetFields();
    });

    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((stream) => {
        setStream(stream);
        if (userVideo.current) {
          userVideo.current.srcObject = stream;
        }
      });

    socket.on("yourID", (id) => {
      setYourID(id);
    });

    socket.on("CALLING", (data) => {
      setReceivingCall(true);
      setCaller(data.from);
      setCallerSignal(data.signal);
    });

    socket.on("USERS_CONNECTED", () => {
      setWelcomeMsgShown(true);
    });

    socket.on("USER_RECONNECTED_SUCCESS", () => {
      setReconnectMsgShown(true);
    });

    socket.on("PARTNER_DISCONNECT", () => {
      setCallStatus(DEFAULT);
      setCallAccepted(false);
      setHasPartnerDisconnect(true);
    });

    return () => {
      socket.disconnect();
    };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const keydownHandler = (e) => {
      let charCode = String.fromCharCode(e.which).toLowerCase();
      if ((e.ctrlKey || e.metaKey) && charCode === "s") {
        e.preventDefault();
        // Error handling for when socket not initialised yet
        if (currentSocket) {
          console.log("Saving code to " + room.roomID);
          currentSocket.emit("SAVE_CODE", room.roomID, text);
          setIsSavingCode(true);
        } else {
          console.log("Socket not initialised yet!");
          return;
        }
      }
    };
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
    // eslint-disable-next-line
  }, [text]);

  useEffect(() => {
    if (currentSocket) {
      currentSocket.on("RECEIVE_PEER_ID", (id) => {
        console.log(`Current socket ${currentSocket}, Peer ID: ${id}`);
        handleCall(currentSocket, id);
      });
    }
  }, [currentSocket, handleCall]);

  return (
    <div>
      <div className={`call-alert ${welcomeMsgShown ? "hide" : ""}`}>
        <Alert severity="success" className="alert">
          The match was a success! Have fun coding!
          <Button
            color="inherit"
            onClick={() => {
              setWelcomeMsgShown(false);
            }}
          >
            Close
          </Button>
        </Alert>
      </div>

      <div className={`call-alert ${reconnectMsgShown ? "hide" : ""}`}>
        <Alert severity="success" className="alert">
          Your partner has reconnected!
          <Button
            color="inherit"
            onClick={() => {
              setReconnectMsgShown(false);
            }}
          >
            Close
          </Button>
        </Alert>
      </div>

      <div className={`call-alert ${hasPartnerDisconnect ? "hide" : ""}`}>
        <Alert severity="error" className="alert">
          Your partner has disconnected.
          <Button
            color="inherit"
            onClick={() => {
              setHasPartnerDisconnect(false);
            }}
          >
            Close
          </Button>
        </Alert>
      </div>

      <div className={`call-alert ${receivingCall ? "hide" : ""}`}>
        <Alert severity="success" className="alert">
          {/* {caller} is calling you */}
          Your partner is calling you.
          <Button
            color="inherit"
            onClick={() => {
              acceptCall();
              setReceivingCall(false);
            }}
          >
            Accept
          </Button>
        </Alert>
      </div>

      <div className="navbar-top">
        <CodeNavBar
          isSavingCode={isSavingCode}
          saveCode={saveCode}
          setIsSavingCode={setIsSavingCode}
          leaveSession={leaveSession}
          endSession={endSession}
          retrievePeerId={retrievePeerId}
          setCallStatus={setCallStatus}
          callStatus={callStatus}
        />
      </div>
      <div className="code-container">
        <div className="pane left-pane">
          <Draggable>
            <Dialog
              className="video-panel"
              open={true}
              hideBackdrop
              disableEnforceFocus
              disableScrollLock
            >
              <div className="videos">
                <Row>{UserVideo}</Row>
                <Row>{PartnerVideo}</Row>
              </div>
              <div className="btn-container">
                <div>
                  <Button
                    onClick={() => {
                      if (isVideoOff) {
                        unpauseVideo();
                      } else {
                        pauseVideo();
                      }
                      setVideoOff(!isVideoOff);
                    }}
                  >
                    {isVideoOff ? <VideocamOffIcon /> : <VideocamIcon />}
                  </Button>
                  <Button
                    onClick={() => {
                      if (isMuted) {
                        unmuteAudio();
                      } else {
                        muteAudio();
                      }
                      setMuted(!isMuted);
                    }}
                  >
                    {isMuted ? <MicOffIcon /> : <MicIcon />}
                  </Button>
                </div>
              </div>
            </Dialog>
          </Draggable>

          <div dangerouslySetInnerHTML={{ __html: question }}></div>
          <div></div>
          <div className="button-container">
            {questionNumber.current === 2 && (
              <Button
                className="prev-question-button"
                variant="contained"
                onClick={() => {
                  loadQuestionOne();
                }}
              >
                Previous question
              </Button>
            )}
            {questionNumber.current === 1 && (
              <Button
                className="next-question-button"
                variant="contained"
                onClick={() => {
                  loadQuestionTwo();
                }}
              >
                Next question
              </Button>
            )}
          </div>
        </div>

        <div className="pane right-pane">
          <Editor
            value={text}
            onChange={(e) => {
              if (currentSocket) {
                emitText(e);
              }
              setText(e);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default CodingPage;
