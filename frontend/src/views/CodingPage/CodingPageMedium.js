import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import { io } from "socket.io-client";
import { useUsername } from "slices/usernameSlice";
import { useRoom } from "slices/roomSlice";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

function CodingPageMedium() {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  const [question, setQuestion] = useState();
  const [socket, setSocket] = useState(null);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();

  const readNewQuestion = async (firstQuestionHash, secondQuestionHash) => {
    const questionOne = await import(
      `questions/medium/q${(firstQuestionHash % 388) + 1}.js`
    );

    const questionTwo = await import(
      `questions/medium/q${(secondQuestionHash % 388) + 1}.js`
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

  // Utility functions
  const saveToJson = () => {
    // TODO: Emit json data after saving
    const jsonData = JSON.stringify(text);
  };

  const parseFromJson = () => {
    // TODO: Take in JSON data as input
    const jsonData = JSON.stringify(text);
    const parsedData = JSON.parse(jsonData);
  };

  const username = useUsername();
  const room = useRoom();

  const emitText = (text) => {
    socket.emit("SET_TEXT", text, room.roomID);
  };

  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    setSocket(socket);
    readNewQuestion(room.firstQuestionHash, room.secondQuestionHash);
    socket.emit("JOIN_ROOM", room.roomID, username);
    socket.on("UPDATE_TEXT", (text) => {
      setText(text);
    });
    // eslint-disable-next-line
  }, []);

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
        </div>
      </div>

      {/* To be changed */}
      <div className="pane">
        <Editor
          setLanguage={setLanguage}
          language={language}
          value={text}
          onChange={(e) => {
            if (socket) {
              emitText(e);
            }
            setText(e);
          }}
        />
      </div>
    </div>
  );
}

export default CodingPageMedium;
