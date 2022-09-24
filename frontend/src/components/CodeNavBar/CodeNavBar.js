import React from "react";
import { Button } from "@mui/material";
import mainLogo from "assets/logo.png";
import "./codenavbar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";

function CodeNavBar() {
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate("/dashboard");
  };

  return (
    <div className="code-navbar">
      <div className="code-actions">
        <Button size="small" variant="contained" onClick={navigateDashboard}>
          End Session
        </Button>
        <Routes>
          <Route path="/dashboard/*" element={<DashboardPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default CodeNavBar;
