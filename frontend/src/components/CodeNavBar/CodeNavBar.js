import React, { useCallback, useEffect, useState } from "react";
import { Alert, Button } from "@mui/material";
import "./codenavbar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import mainLogo from "assets/logo.png";

function CodeNavBar(props) {
  const { isSavingCode, saveCode, setIsSavingCode } = props;
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [saveMsgShown, setSaveMsgShown] = useState(false);
  const leaveRoom = () => {
    setErrorMsgShown(true);
    setTimeout(() => {
      setErrorMsgShown(false);
      navigateDashboard();
    }, 3000);
  };

  const savingCode = useCallback(() => {
    setSaveMsgShown(true);
    setTimeout(() => {
      setSaveMsgShown(false);
    }, 2000);
  }, []);

  useEffect(() => {
    if (isSavingCode === true) {
      savingCode();
      setIsSavingCode(false);
      console.log("Code has been saved!");
    }
  }, [isSavingCode, savingCode, setIsSavingCode]);

  return (
    <div className="code-navbar">
      <div className={`leaving-page-msg ${errorMsgShown ? "show" : ""}`}>
        <Alert severity="error">
          <strong>Leaving coding page... </strong>
        </Alert>
      </div>
      <div className={`code-save-msg ${saveMsgShown ? "show" : ""}`}>
        <Alert severity="success">
          <strong>Saving in progress... </strong>
        </Alert>
      </div>
      <div className="left">
        <div className="img-container">
          <img src={mainLogo} alt="main-logo" />
        </div>
      </div>
      <div className="right">
        <div className="buttons">
          <Button
            className="save-button"
            onClick={() => {
              savingCode();
              saveCode();
            }}
            color="success"
            variant="contained"
            size="small"
          >
            Save
          </Button>
          <Button
            className="end-button"
            onClick={() => {
              leaveRoom();
            }}
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
