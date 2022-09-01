import React from "react";
import Button from "components/Button/Button";
import mainLogo from "assets/logo.png";
import "./navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo">
        <img src={mainLogo} alt="main-logo" />
      </div>
      <div className="actions">
        <Button text={"Sign In"} />
      </div>
    </div>
  );
}

export default Navbar;
