import React, { useEffect, useRef, useState } from "react";
import { Button } from "@mui/material";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";
import CodeNavBar from "components/CodeNavBar/CodeNavBar";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

import seedrandom from "seedrandom";

import { io } from "socket.io-client";

let socket;
let rng = new seedrandom("sameseed");

function CodingPageEasy({ returnFunc }) {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');
  // Can change this in future to randomise starting question
  const [question, setQuestion] = useState();
  // Question numbers from 1 ~ 456
  const questionNumber = useRef(1);
  const currQuestionIndex = useRef(0);
  const numOfQuestions = useRef(1);
  const [questionCollection, setQuestionCollection] = useState([]);

  // Socket Variables
  // const [socket, setSocket] = useState(null);
  const [roomId, setRoomId] = useState("");

  useEffect(() => {
    // Set up socket for editor
    socket = io.connect("http://localhost:8080");

    readNewQuestion();
    // console.log("Curr question index: " + currQuestionIndex.current);
  }, []);

  function getRndInteger(min, max) {
    return Math.floor(rng() * (max - min)) + min;
    // return Math.floor(Math.random() * (max - min)) + min;
  }

  const readNewQuestion = async () => {
    questionNumber.current = getRndInteger(1, 457);

    // Generate new rng number for the next question
    rng = new seedrandom("differentseed");

    // console.log(questionNumber.current);
    const newQuestion = await import(
      `questions/easy/q${questionNumber.current}.js`
    );
    setQuestionCollection((prevState) => [...prevState, newQuestion.question]);
    setQuestion(newQuestion.question);

    // Socket handling
    if (numOfQuestions.current === 1) {
      // May be removed
      console.log("Filler Initial Question Action");
    } else {
      // console.log("Handling change question");
      handleChangeQuestion(newQuestion.question);
    }
  };

  // Socket io listeners
  useEffect(() => {
    //   socket.on("RECEIVE_INITIAL_CONNECTION", async (clientNumber) => {
    //     clientNumber.current = clientNumber;
    //     console.log(`I'm client number ${clientNumber.current} client-side!`);
    //     // await sleep(2000);
    //   });

    //   socket.on("RECEIVE_INITIAL_QUESTION", (question) => {
    //     console.log(question);
    //     // setQuestion(question);
    //     setQuestionCollection([question]);
    //   });

    socket.on("RECEIVE_CHANGE_QUESTION", (question, qnIndex) => {
      console.log("Supposed to be rendered once!");
      currQuestionIndex.current = qnIndex;
      setQuestionCollection((prevState) => [...prevState, question]);
      numOfQuestions.current = qnIndex;
      setQuestion(question);
      // console.log("List of questions: " + questionCollection);
    });

    socket.on("RECEIVE_TOGGLE_QUESTION", (qnIndex) => {
      currQuestionIndex.current = qnIndex;
      // console.log("Toggle question num: " + currQuestionIndex.current);
      setQuestion(questionCollection[qnIndex]);
      // console.log("Question to be set: " + questionCollection[qnIndex]);
    });

    socket.on("RECEIVE_TEXT", (text) => {
      // console.log(text);
      setText(text);
    });
  });

  // Socket functions
  // const handleInitialConnection = (question) => {
  //   socket.emit("SEND_INITIAL_CONNECTION", question);
  // };

  // const handleInitialQuestion = (question) => {
  //   socket.emit("SEND_INITIAL_QUESTION", question);
  // };

  const handleChangeQuestion = (question) => {
    socket.emit("SEND_CHANGE_QUESTION", question, currQuestionIndex.current);
  };

  const handleToggleQuestion = (qnIndex) => {
    socket.emit("SEND_TOGGLE_QUESTION", qnIndex);
  };

  return (
    <div>
      <CodeNavBar />
      <div className="code-container">
        <div className="pane left-pane">
          <div dangerouslySetInnerHTML={{ __html: question }}></div>
          <div className="button-container">
            {currQuestionIndex.current === 1 && (
              <Button
                className="prev-question-button"
                variant="contained"
                onClick={() => {
                  setQuestion(questionCollection[0]);
                  handleToggleQuestion(currQuestionIndex.current - 1);
                  currQuestionIndex.current = currQuestionIndex.current - 1;
                  // console.log(currQuestionIndex.current);
                  // console.log(questionCollection);
                }}
              >
                Previous question
              </Button>
            )}
            {currQuestionIndex.current === 0 && (
              <Button
                className="next-question-button"
                variant="contained"
                onClick={() => {
                  if (numOfQuestions.current === 1) {
                    numOfQuestions.current = numOfQuestions.current + 1;
                    currQuestionIndex.current = currQuestionIndex.current + 1;
                    readNewQuestion();
                    // console.log("Render new question!");
                  } else {
                    setQuestion(questionCollection[1]);
                    handleToggleQuestion(currQuestionIndex.current + 1);
                    // console.log("Change question only!");
                    currQuestionIndex.current = currQuestionIndex.current + 1;
                  }
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
            socket={socket}
            onChange={setText}
          />
        </div>
      </div>
    </div>
  );
}

export default CodingPageEasy;
