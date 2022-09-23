import React from "react";
import "./controlDropdown.scss";

export default function ControlDropdown(props) {
  return (
    <div className="control-dropdown">
      <select value={props.default} onChange={props.handleDropdown}>
        {props.options.map((option) => (
          <option value={option.code}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
