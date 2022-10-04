import React from "react";

// The following imports is for the theme.
import "codemirror/lib/codemirror.css";
import "codemirror/theme/xq-light.css";
import "codemirror/theme/elegant.css";
import "codemirror/addon/selection/active-line";
import "./editor.scss";

import { Controlled as ControlledEditor } from "react-codemirror2-react-17";
import ControlDropdown from "../ControlDropdown/ControlDropdown";

export default function Editor(props) {
  const { setLanguage, language, value, onChange } = props;

  const modes = [
    { name: "Javascript", code: "javascript" },
    { name: "Python", code: "python" },
  ];

  const handleMode = (e) => {
    setLanguage(e.target.value);
  };

  function handleChange(editor, data, value) {
    onChange(value);
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
          theme: "elegant",
          lineNumbers: true,
          styleActiveLine: true,
          styleActiveSelected: true,
        }}
      />
    </div>
  );
}
