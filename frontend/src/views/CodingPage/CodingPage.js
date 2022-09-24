import React, { useRef, useState, useEffect } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import { io } from "socket.io-client";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

// Import questions
import Q1 from "questions/easy/q1.js";

function CodeComponent({ returnFunc }) {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  // Can change this in future to randomise starting question
  const [question, setQuestion] = useState(Q1.question);
  const [socket, setSocket] = useState(null);
  const questionNumber = useRef(1);

  const readNewQuestion = async () => {
    const newQuestion = await import(
      `questions/easy/q${questionNumber.current}.js`
    );
    setQuestion(newQuestion.question);
  };

  const increaseQuestionNumberByOne = () => {
    questionNumber.current = questionNumber.current + 1;
  };

  const decreaseQuestionNumberByOne = () => {
    questionNumber.current = questionNumber.current - 1;
  };

  console.log(socket);

  useEffect(() => {
    const socket = io.connect("http://localhost:8080");
    setSocket(socket);
    // TODO: replace placeholder
    socket.emit("JOIN_ROOM", "abd");
  }, []);

  return (
    <div className="code-container">
      <div className="pane left-pane">
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
        <div className="button-container">
          <Button
            className="prev-question-button"
            variant="contained"
            onClick={() => {
              decreaseQuestionNumberByOne();
              readNewQuestion();
            }}
          >
            Previous question
          </Button>
          <Button
            className="next-question-button"
            variant="contained"
            onClick={() => {
              increaseQuestionNumberByOne();
              readNewQuestion();
            }}
          >
            Next question
          </Button>
        </div>
      </div>

      {/* To be changed */}
      <div className="pane">
        <Editor
          setLanguage={setLanguage}
          language={language}
          value={text}
          onChange={setText}
        />
      </div>
    </div>
  );
}

export default CodeComponent;
