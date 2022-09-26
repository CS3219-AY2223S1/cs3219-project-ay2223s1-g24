import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import { io } from "socket.io-client";
import { useUsername } from "slices/usernameSlice";
import { useRoom } from "slices/roomSlice";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

function CodingPageEasy() {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  const [question, setQuestion] = useState();
  const [socket, setSocket] = useState(null);
  const questionNumber = useRef(1);
  const qnOne = useRef();
  const qnTwo = useRef();

  const readNewQuestion = async (firstQuestionHash, secondQuestionHash) => {
    const firstQuestionNumber = (firstQuestionHash % 456) + 1;
    const secondQuestionNumber = (secondQuestionHash % 456) + 1;

    const questionOne = await import(
      `questions/easy/q${firstQuestionNumber}.js`
    );
    let questionTwo;
    if (firstQuestionNumber === secondQuestionNumber) {
      questionTwo = await import(
        `questions/easy/q${
          secondQuestionNumber + 1 <= 456
            ? secondQuestionNumber + 1
            : secondQuestionNumber - 1
        }.js`
      );
    } else {
      questionTwo = await import(`questions/easy/q${secondQuestionNumber}.js`);
    }
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

export default CodingPageEasy;
