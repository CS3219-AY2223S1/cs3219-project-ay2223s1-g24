import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import { io } from "socket.io-client";
import { useUsername } from "slices/usernameSlice";
import { useRoom, setRoom } from "slices/roomSlice";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";
import CodeNavBar from "components/CodeNavBar/CodeNavBar";

function CodingPage() {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  const [question, setQuestion] = useState();
  const [currentSocket, setCurrentSocket] = useState(null);
  const [isSavingCode, setIsSavingCode] = useState(false);
  const [leaveSession, setLeaveSession] = useState(false);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();
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

  const username = useUsername();
  const room = useRoom();
  const dispatch = useDispatch();

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
    currentSocket.emit("END_SESSION", room.roomID);
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    setCurrentSocket(socket);
    if (
      room.roomID === "" ||
      room.difficulty === "" ||
      room.firstQuestionHash === 0 ||
      room.secondQuestionHash === 0
    ) {
      // case where user refreshes, sends a call to DB to check if username in room
      // if in room: retrieve question hashes and rejoins the room
      // TODO: cookies giving issue when multiple tabs of different usernames open
      console.log("retrieving for username: " + cookies.name);
      socket.emit("RETRIEVE_ROOM", cookies.name);
      socket.on(
        "RECEIVE_ROOM_DATA",
        (roomID, difficulty, firstQuestion, secondQuestion) => {
          if (!roomID || !difficulty || !firstQuestion || !secondQuestion) {
            // TODO: room not found, redirect user back to dashboard
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
        username,
        room.difficulty,
        room.firstQuestionHash,
        room.secondQuestionHash
      );
    }
    socket.on("UPDATE_TEXT", (text) => {
      setText(text);
    });
    socket.on("SESSION_ENDED", () => {
      setLeaveSession(true);
    });
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

  return (
    <div>
      <div className="navbar-top">
        <CodeNavBar
          isSavingCode={isSavingCode}
          saveCode={saveCode}
          setIsSavingCode={setIsSavingCode}
          leaveSession={leaveSession}
          endSession={endSession}
        />
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

        <div className="pane right-pane">
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
