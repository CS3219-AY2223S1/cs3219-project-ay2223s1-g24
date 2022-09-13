import React, { useState } from "react";
import mockData from "assets/mockdata.json";
import "./codingPage.scss";
import Editor from "components/Editor/Editor";

function CodeComponent({ returnFunc }) {
  const [javascript, setJavascript] = useState('');

  return (
    <div className="code-container">
      <div className="pane left-pane">
        Questions will be here
      </div>

      {/* To be changed */}
      <div className="pane"> 
        <Editor 
          language="javascript" 
          displayName="Javascript"
          value={javascript}
          onChange={setJavascript}
        />
      </div>
    </div>
  );
}

export default CodeComponent;
