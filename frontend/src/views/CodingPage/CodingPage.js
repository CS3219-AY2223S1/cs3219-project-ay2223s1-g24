import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import { io } from "socket.io-client";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { Routes, Route, useNavigate} from "react-router-dom";
import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

import { useUsername } from "slices/usernameSlice";
import { useRoom, setRoom } from "slices/roomSlice";
import Editor from "components/Editor/Editor";
import "./codingPage.scss";
import mainLogo from "assets/logo.png";
//import CodeNavBar from "components/CodeNavBar/CodeNavBar";

function CodingPage() {
  const [language, setLanguage] = useState("python");
  // const [text, setText] = useState('print("hello world")');
  const [text, setText] = useState('');
  const [question, setQuestion] = useState();
  const [currentSocket, setCurrentSocket] = useState(null);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();
  const questionSize = {
    easy: 456,
    medium: 388,
    hard: 424,
  };
  const [cookies, setCookie] = useCookies(["name", "email", "jwtToken", "roomID" ,"firstQuestionHash", "secondQuestionHash", "difficulty"]);
  
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

  const navigate = useNavigate();
  const quitSession = () => {
    setCookie("roomID", "", { path: `/` });
    setCookie("firstQuestionHash", "", { path: `/` });
    setCookie("secondQuestionHash", "", { path: `/` });
    setCookie("difficulty", "", { path: `/` });
    currentSocket.emit("END_SESSION", room.roomID);
    // removeCookie("roomID", { path: "/" });
    navigate(`/`);
  };


  const username = useUsername();
  const room = useRoom();
  const dispatch = useDispatch();

  const emitText = (text) => {
    currentSocket.emit("SET_TEXT", text, room.roomID);
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    setCurrentSocket(socket);
    if (room.roomID === '' || room.difficulty ===  '' || room.firstQuestionHash === 0 || room.secondQuestionHash === 0) {
      // case where user refreshes, sends a call to DB to check if username in room
      // if in room: retrieve question hashes and rejoins the room
      // TODO: cookies giving issue when multiple tabs of different usernames open
      console.log("retrieving for username: " + cookies.name);
      socket.emit(
        "RETRIEVE_ROOM",
        cookies.name
      );
      socket.on("RECEIVE_ROOM_DATA", (roomID, difficulty, firstQuestion, secondQuestion) => {
        if (!roomID || !difficulty || !firstQuestion || !secondQuestion) {
          // TODO: room not found, redirect user back to dashboard
          console.log("Room not found! Redirecting back to main page...");
        } else {
          readNewQuestion(
            firstQuestion,
            secondQuestion,
            difficulty
          );
          socket.emit("RETRIEVE_CODE", roomID);
          dispatch(
            setRoom({
              roomID: roomID,
              firstQuestionHash: firstQuestion,
              secondQuestionHash: secondQuestion,
              difficulty: difficulty,
            })
          );
        }
      })
    } else {
      readNewQuestion(
        room.firstQuestionHash,
        room.secondQuestionHash,
        room.difficulty
      );
      socket.emit(
        "JOIN_ROOM",
        room.roomID,
        username,
        room.difficulty,
        room.firstQuestionHash,
        room.secondQuestionHash
      );
    }
    socket.emit("RETRIEVE_CODE", room.roomID);
    socket.on("UPDATE_TEXT", (text) => {
      setText(text);
    });
    socket.on("SESSION_ENDED", () => {
      console.log("BYEBYE");
    })
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const keydownHandler = (e) => {
      let charCode = String.fromCharCode(e.which).toLowerCase();
      if ((e.ctrlKey || e.metaKey) && charCode === "s") {
        e.preventDefault();
        console.log("Saving code to " + room.roomID);
        currentSocket.emit("SAVE_CODE", room.roomID, text);
      }
    };
    document.addEventListener("keydown", keydownHandler);
    return () => {
      document.removeEventListener("keydown", keydownHandler);
    };
    // eslint-disable-next-line
  }, [text]);

  return (
    <div>
      <div className="navbar-top">
        <div className="code-navbar">
          <div className="left">
            <div className="img-container">
              <img src={mainLogo} alt="main-logo" />
            </div>
          </div>
          {/*OnClick behaviour to be changed*/}
          <div className="right">
            <div className="buttons">
              <Button
                className="save-button"
                onClick={() => console.log("Saved successfully!")}
                color="success"
                variant="contained"
                size="small"
              >
                Save
              </Button>
              <Button
                className="end-button"
                onClick={quitSession}
                color="error"
                variant="contained"
                size="small"
              >
                End Session
              </Button>
            </div>
          </div>
          {/* <Routes>
            <Route path="/dashboard/*" element={<DashboardPage />} />
          </Routes> */}
        </div>
        
      </div>
      <div className="code-container">
        <div className="pane left-pane">
          <div dangerouslySetInnerHTML={{ __html: question }}></div>
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

        <div className="pane">
          <Editor
            setLanguage={setLanguage}
            language={language}
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
