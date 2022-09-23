import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

function CodingPageHard({ returnFunc }) {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  // Can change this in future to randomise starting question
  const [question, setQuestion] = useState();
  // Question numbers from 1431 ~ 1854
  const questionNumber = useRef(1431);
  const currQuestionNum = useRef(1);
  const [questionCollection, setQuestionCollection] = useState([]);

  useEffect(() => {
    questionNumber.current = getRndInteger(1431, 1855);
    readNewQuestion();
    console.log(questionNumber.current);
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
  }

  const readNewQuestion = async () => {
    questionNumber.current = getRndInteger(1431, 1855);
    const newQuestion = await import(
      `questions/hard/q${questionNumber.current}.js`
    );
    setQuestion(newQuestion.question);
    setQuestionCollection((prevState) => [...prevState, newQuestion.question]);
  };

  return (
    <div className="code-container">
      <div className="pane left-pane">
        <div dangerouslySetInnerHTML={{ __html: question }}></div>
        <div className="button-container">
          {currQuestionNum.current === 2 && (
            <Button
              className="prev-question-button"
              variant="contained"
              onClick={() => {
                setQuestion(questionCollection[0]);
                currQuestionNum.current = currQuestionNum.current - 1;
              }}
            >
              Previous question
            </Button>
          )}
          {currQuestionNum.current === 1 && (
            <Button
              className="next-question-button"
              variant="contained"
              onClick={() => {
                if (questionCollection.length === 1) {
                  readNewQuestion();
                } else {
                  setQuestion(questionCollection[1]);
                }
                currQuestionNum.current = currQuestionNum.current + 1;
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
          onChange={setText}
        />
      </div>
    </div>
  );
}

export default CodingPageHard;
