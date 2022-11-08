import React, { useCallback, useEffect, useState } from "react";
import {
  Alert,
  Button,
  CircularProgress,
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
import CallIcon from "@mui/icons-material/Call";

function CodeNavBar(props) {
  const {
    isSavingCode,
    saveCode,
    setIsSavingCode,
    leaveSession,
    endSession,
    retrievePeerId,
    setCallStatus,
    callStatus,
  } = props;
  const navigate = useNavigate();
  const navigateDashboard = () => {
    navigate("/dashboard");
  };
  const [saveMsgShown, setSaveMsgShown] = useState(false);
  const [leaveAlertOpen, setLeaveAlertOpen] = useState(false);
  const [confirmLeavingRoom, setConfirmLeavingRoom] = useState(false);
  const [DEFAULT, CONNECTED, PENDING] = ["", "CONNECTED", "PENDING"];

  const leaveRoom = useCallback(() => {
    setTimeout(() => {
      navigateDashboard();
    }, 4000);
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

  const handleClose = (isLeavingRoom) => {
    if (isLeavingRoom === true) {
      console.log("Leaving room!");
      // Experimental
      endSession();
      // Render different text on the leaving alert
      setConfirmLeavingRoom(true);
      leaveRoom();
    } else {
      setLeaveAlertOpen(false);
    }
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
      setLeaveAlertOpen(true);
      setConfirmLeavingRoom(true);
      endSession();
      leaveRoom();
      // console.log(`Value of confirmLeavingRoom is: ${confirmLeavingRoom}`);
    }
  }, [leaveSession, leaveRoom, endSession]);

  return (
    <div className="code-navbar">
      <Dialog
        open={leaveAlertOpen}
        onClose={(_, reason) => {
          if (reason !== "backdropClick") {
            handleClose();
          }
        }}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {confirmLeavingRoom === false
            ? "Do you want to end the session?"
            : "Leaving session"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {confirmLeavingRoom === false
              ? "Ending the session will redirect you to the difficulty selection page."
              : "Being redirected to difficulty selection, please wait..."}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          {confirmLeavingRoom === false && (
            <Button
              color="error"
              variant="outlined"
              onClick={() => {
                handleClose(true);
              }}
            >
              Confirm
            </Button>
          )}
          {confirmLeavingRoom === false && (
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
          )}
        </DialogActions>
      </Dialog>
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
          {callStatus === DEFAULT && (
            <Button
              className="call-button"
              onClick={() => {
                retrievePeerId();
                setCallStatus(PENDING);
              }}
              color="primary"
              variant="outlined"
              size="small"
            >
              <CallIcon />
              <div className="call-desc">START CALL</div>
            </Button>
          )}

          {callStatus === CONNECTED && (
            <Button
              className="call-button"
              color="primary"
              variant="outlined"
              size="small"
              disabled
            >
              <CallIcon />
              <div className="call-desc">CONNECTED</div>
            </Button>
          )}

          {callStatus === PENDING && (
            <Button
              className="call-button"
              color="primary"
              variant="outlined"
              size="small"
              disabled
            >
              <CallIcon />
              <div className="call-desc">CALLING</div>

              <div className="progress">
                <CircularProgress color="inherit" size="14px" />
              </div>
            </Button>
          )}

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
