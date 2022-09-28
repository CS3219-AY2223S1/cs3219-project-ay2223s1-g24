import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import { io } from "socket.io-client";
import { useUsername } from "slices/usernameSlice";
import { useRoom } from "slices/roomSlice";
import { useCookies } from "react-cookie";
import { useNavigate, useLocation } from "react-router-dom";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

function CodingPage() {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  const [question, setQuestion] = useState();
  const [currentSocket, setCurrentSocket] = useState(null);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();
  const questionSize = {
    "easy": 456,
    "medium": 388,
    "hard": 424
  };
  const [cookies, setCookie] = useCookies(["name", "email", "jwtToken", "roomID"]);

  const readNewQuestion = async (firstQuestionHash, secondQuestionHash, difficulty) => {

    const firstQuestionNumber = (firstQuestionHash % questionSize[difficulty]) + 1;
    let secondQuestionNumber = (secondQuestionHash % questionSize[difficulty]) + 1;

    const questionOne = await import(
      `questions/${difficulty}/q${firstQuestionNumber}.js`
    );

    if (firstQuestionNumber === secondQuestionNumber) {
      secondQuestionNumber = (firstQuestionNumber + 1) % questionSize[difficulty];
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
    navigate(`/`);
  };


  const username = useUsername();
  const room = useRoom();

  const emitText = (text) => {
    currentSocket.emit("SET_TEXT", text, room.roomID);
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    setCurrentSocket(socket);
    readNewQuestion(room.firstQuestionHash, room.secondQuestionHash, room.difficulty);
    socket.emit("JOIN_ROOM", room.roomID, username, room.difficulty, room.firstQuestionHash, room.secondQuestionHash);
    socket.on("UPDATE_TEXT", (text) => {
      setText(text);
    });
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    const keydownHandler = (e) => {
      let charCode = String.fromCharCode(e.which).toLowerCase();
      if ((e.ctrlKey || e.metaKey) && charCode === 's') {
        e.preventDefault();
        console.log("Saving code to " + room.roomID);
        currentSocket.emit("SAVE_CODE", room.roomID, text);
      }
    };
    document.addEventListener('keydown', keydownHandler);
    return () => {
      document.removeEventListener('keydown', keydownHandler);
    }
    // eslint-disable-next-line
  }, [text])

  return (
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
          
          <Button
              className="next-question-button"
              variant="contained"
              onClick={() => {
                quitSession();
              }}
            >
              Quit
            </Button>
        </div>
      </div>

      {/* To be changed */}
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
  );
}

export default CodingPage;
