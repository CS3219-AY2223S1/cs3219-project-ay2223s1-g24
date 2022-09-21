import { Button } from "@mui/material";
import React, { useState } from "react";
import mockData from "assets/mockdata.json";
import "./codeComponent.scss";
<<<<<<< HEAD
=======
import Editor from "components/Editor/Editor";
>>>>>>> 2babe3d28ed1eeb3bb2054266f91b4daa5744fd6

function CodeComponent({ returnFunc }) {
  const [javascript, setJavascript] = useState('');

  return (
    <div className="codeComponent">
      <div className="left">
        <div className="title">
          {" "}
          {mockData["id"]}. {mockData["title"]}{" "}
        </div>
        <div className="desc"> {mockData["desc"]} </div>
        <div className="examples">
          {mockData["examples"].map((example, idx) => (
            <div>
              <div className="example-header"> Example {idx + 1}: </div>
              <div className="example">
                <div>
                  {" "}
                  <span className="keyword"> Input: </span> {example[0]}
                </div>
                <div>
                  {" "}
                  <span className="keyword"> Output: </span> {example[1]}{" "}
                </div>
                {example[2] && (
                  <div>
                    {" "}
                    <span className="keyword"> Explanation: </span> {example[2]}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
        <div className="constraints">
          <div className="constraints-header"> Constraints: </div>
          {mockData["constraints"].map((constraint) => (
            <li className="constraint"> {constraint} </li>
          ))}{" "}
        </div>

        <div className="return" onClick={() => returnFunc(0)}>
          {" "}
          Back{" "}
        </div>
      </div>

      {/* To be changed */}
      <div className="code-editor"> 
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
