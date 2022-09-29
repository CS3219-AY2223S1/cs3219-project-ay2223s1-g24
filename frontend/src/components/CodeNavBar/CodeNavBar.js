import React from "react";
import Button from "@mui/material/Button";
import "./codenavbar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import mainLogo from "assets/logo.png";

function CodeNavBar() {
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  return (
    <div className="code-navbar">
      <div className="left">
        <div className="img-container">
          <img src={mainLogo} alt="main-logo" />
        </div>
      </div>
      {/*OnClick behaviour to be changed*/}
      <div className="right">
        <div className="buttons">
          <Button
            className="save-button"
            onClick={() => console.log("Saved successfully!")}
            color="success"
            variant="contained"
            size="small"
          >
            Save
          </Button>
          <Button
            className="end-button"
            onClick={navigateDashboard}
            color="error"
            variant="contained"
            size="small"
          >
            End Session
          </Button>
        </div>
      </div>
      <Routes>
        <Route path="/dashboard/*" element={<DashboardPage />} />
      </Routes>
    </div>
  );
}

export default CodeNavBar;
