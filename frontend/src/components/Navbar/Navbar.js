import React from "react";
import Button from "components/Button/Button";
import mainLogo from "assets/logo.png";
import "./navbar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import SigninPage from "views/SigninPage/SigninPage";

function Navbar() {
  const navigate = useNavigate();
  const navigateSignin = () => {
    navigate("signin");
  };
  return (
    <div className="navbar">
      <div className="logo">
        <img src={mainLogo} alt="main-logo" />
      </div>
      <div className="actions">
        <Button onClick={navigateSignin} text={"Sign In"} />
        <Routes>
          <Route path="/signin/*" element={<SigninPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default Navbar;
