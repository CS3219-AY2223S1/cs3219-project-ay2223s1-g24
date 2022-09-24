import React from "react";
import "./controlDropdown.scss";

export default function ControlDropdown(props) {
  return (
    <div className="control-dropdown">
      <select value={props.options.default} onChange={props.handleDropdown}>
        {
        props.options.map((option, i) => (
            <option value={option.code} key={i}>{option.name}</option>
        ))}
      </select>
    </div>
  );
}
