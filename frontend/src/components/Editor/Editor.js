import React, { useState } from "react";

// The following imports is for the theme.
import "codemirror/lib/codemirror.css";
import 'codemirror/theme/material.css'
import "./editor.scss";

// Languages to be used
import 'codemirror/mode/javascript/javascript';
import "codemirror/mode/python/python";

import { Controlled as ControlledEditor } from 'react-codemirror2'

export default function Editor(props) {

  const {
    language,
    displayName,
    value,
    onChange
  } = props

  function handleChange(editor, data, value) {
    onChange(value)
  }

  return (
    <div className="editor-container">
      <div className="editor-title">
          {displayName}
          <button>Fullscreen</button>
      </div>
      <ControlledEditor 
        onBeforeChange={handleChange}
        value={value}
        className="code-mirror-wrapper"
        options={{
            lineWrapping: true,
            lint: true,
            mode: language,
            theme: 'material',
            lineNumbers: true
        }}
      />
    </div>
  )
}