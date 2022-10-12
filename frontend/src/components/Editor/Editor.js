import React, { useState } from "react";

// The following imports is for the theme.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/xq-light.css";
import "codemirror/theme/xq-dark.css";
import "codemirror/addon/selection/active-line";
import "./editor.scss";

import { Controlled as ControlledEditor } from "react-codemirror2-react-17";
import ControlDropdown from "../ControlDropdown/ControlDropdown";

export default function Editor(props) {
  const { value, onChange } = props;

  const modes = [
    { name: "Javascript", code: "javascript" },
    { name: "Python", code: "python" },
  ];

  const [language, setLanguage] = useState("python");
  const [editorTheme, setEditorTheme] = useState("xq-light");

  const handleMode = (e) => {
    setLanguage(e.target.value);
  };

  const handleChange = (editor, data, value) => {
    console.log(value);
    onChange(value);
  }

  const handleEditorTheme = (e) => {
    if (editorTheme === "xq-light") {
      setEditorTheme("xq-dark");
    } else {
      setEditorTheme("xq-light");
    }
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
        <ControlDropdown
          default={language}
          options={modes}
          handleDropdown={handleMode}
        />
      </div>
      <ControlledEditor
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
          lineWrapping: true,
          lint: true,
          mode: language,
          theme: editorTheme,
          lineNumbers: true,
          styleActiveLine: true,
          styleActiveSelected: true,
        }}
      />
    </div>
  );
}
