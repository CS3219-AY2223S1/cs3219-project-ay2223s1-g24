import React, { useEffect, useState } from "react";
import mockData from "assets/mockdata.json";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";

import "codemirror/mode/javascript/javascript";
import "codemirror/mode/python/python";

// useReduce

function CodeComponent({ returnFunc }) {
  const [language, setLanguage] = useState("python");
  const [text, setText] = useState('print("hello world")');

  return (
    <div className="code-container">
      <div className="pane left-pane">
        Questions will be displayed here
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
