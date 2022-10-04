import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import "./codenavbar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import DashboardPage from "views/DashboardPage/DashboardPage";
import mainLogo from "assets/logo.png";

function CodeNavBar(props) {
  const { isSavingCode, saveCode, setIsSavingCode, leaveSession, endSession } =
    props;
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  const [errorMsgShown, setErrorMsgShown] = useState(false);
  const [saveMsgShown, setSaveMsgShown] = useState(false);
  const [leaveAlertOpen, setLeaveAlertOpen] = useState(false);

  const leaveRoom = useCallback(() => {
    setErrorMsgShown(true);
    setTimeout(() => {
      setErrorMsgShown(false);
      navigateDashboard();
    }, 3000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const savingCode = useCallback(() => {
    setSaveMsgShown(true);
    setTimeout(() => {
      setSaveMsgShown(false);
    }, 2000);
  }, []);

  const handleClickOpen = () => {
    setLeaveAlertOpen(true);
  };

  const handleClose = (confirmLeaveRoom) => {
    if (confirmLeaveRoom === true) {
      console.log("Leaving room!");
      // Experimental
      endSession();
      setLeaveAlertOpen(false);
      leaveRoom();
    }
    setLeaveAlertOpen(false);
  };

  useEffect(() => {
    if (isSavingCode === true) {
      savingCode();
      setIsSavingCode(false);
      console.log("Code has been saved!");
    }
  }, [isSavingCode, savingCode, setIsSavingCode]);

  useEffect(() => {
    if (leaveSession === true) {
      console.log("Client 2 leaving the room...");
      leaveRoom();
    }
  }, [leaveSession, leaveRoom]);

  return (
    <div className="code-navbar">
      <Dialog
        open={leaveAlertOpen}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Do you want to end the session?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Ending the session will redirect you to the difficulty selection
            page.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button
            color="error"
            variant="outlined"
            onClick={() => {
              handleClose(true);
            }}
          >
            Confirm
          </Button>
          <Button
            color="primary"
            variant="outlined"
            autoFocus
            onClick={() => {
              handleClose(false);
            }}
          >
            Cancel
          </Button>
        </DialogActions>
      </Dialog>
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
              handleClickOpen();
              // leaveRoom();
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
