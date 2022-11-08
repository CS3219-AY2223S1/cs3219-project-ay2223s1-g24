import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import {
  STATUS_CODE_SUCCESS,
  STATUS_CODE_ACCOUNT_DOES_NOT_EXIST,
  MIN_PASSWORD_LEN,
} from "constants";
import "./accountRecovery.scss";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setRoom } from "slices/roomSlice";
import mainLogo from "assets/mainlogo.png";
import { STATUS_CODE_UNEXPECTED_ERROR } from "constants";

function PasswordResetPage() {
  const [password, setPassword] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
  const [isPasswordConfirmationTouched, setPasswordConfirmationTouched] =
    useState(false);
  const [status, setStatus] = useState("");
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const params = useParams();

  function loadRoom() {
    dispatch(
      setRoom({
        roomID: cookies.roomID,
        firstQuestionHash: cookies.firstQuestionHash,
        secondQuestionHash: cookies.secondQuestionHash,
        difficulty: cookies.difficulty,
      })
    );
    navigate(`/coding/${cookies.roomID}`);
  }
  useEffect(() => {
    if (cookies.roomId && cookies.roomID !== "") {
      loadRoom();
    } else if (cookies.jwtToken) {
      navigate("/dashboard");
    }
  });

  const navigateSignin = () => {
    navigate("/signin");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const navigateAccountRecovery = () => {
    navigate("/signin/identity");
  };

  const isFormValid = () => {
    return (
      password !== "" &&
      password.length >= MIN_PASSWORD_LEN &&
      confirmationPassword !== "" &&
      password === confirmationPassword
    );
  };

  const resetFormFields = () => {
    setPassword("");
    setConfirmationPassword("");
    setPasswordInputTouched(false);
    setPasswordConfirmationTouched(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handlePasswordReset();
    }
  };
  const handlePasswordReset = async () => {
    // Check fields submitted if they are valid inputs
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    const payload = { token: params.token, password };
    const res = await axios
      .post(USER_SERVICE_API_ENDPOINT + "resetPassword", payload)
      .catch((err) => {
        setLoading(false);
        if (err.response.status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST) {
          setStatus(STATUS_CODE_ACCOUNT_DOES_NOT_EXIST);
        } else {
          setStatus(STATUS_CODE_UNEXPECTED_ERROR);
        }
        return;
      });

    setLoading(false);
    if (res && res.status === STATUS_CODE_SUCCESS) {
      setLoading(false);
      resetFormFields();
      setStatus(STATUS_CODE_SUCCESS);
    }
  };

  return (
    <div className="accountRecovery">
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography className="title-container" marginbottom={"1rem"}>
          <div className="heading">
            <img
              className="left-img"
              src={mainLogo}
              alt="main-logo"
              onClick={navigateHome}
            />
            <div className="title">Password Reset</div>
            <img className="right-img" src={mainLogo} alt="main-logo" />
          </div>
        </Typography>

        <div className="textfields">
          <TextField
            className="field"
            label="Password"
            error={isPasswordInputTouched && password === ""}
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            onBlur={() => {
              setPasswordInputTouched(true);
            }}
            onKeyDown={handleKeyDown}
          />

          <div
            className={`error-msg ${
              isPasswordInputTouched && password === "" ? "" : "hide"
            }`}
          >
            • Password is required
          </div>

          <div
            className={`error-msg ${
              isPasswordInputTouched &&
              password !== "" &&
              password.length < MIN_PASSWORD_LEN
                ? ""
                : "hide"
            }`}
          >
            • Length must be at least {MIN_PASSWORD_LEN} characters
          </div>

          <TextField
            className="field"
            label="Confirm Password"
            error={isPasswordConfirmationTouched && confirmationPassword === ""}
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            type="password"
            value={confirmationPassword}
            onChange={(e) => setConfirmationPassword(e.target.value)}
            onBlur={() => {
              setPasswordConfirmationTouched(true);
            }}
            onKeyDown={handleKeyDown}
          />

          <div
            className={`error-msg ${
              isPasswordConfirmationTouched && confirmationPassword === ""
                ? ""
                : "hide"
            }`}
          >
            • Please confirm your password
          </div>

          <div
            className={`error-msg ${
              isPasswordConfirmationTouched &&
              confirmationPassword.length > 0 &&
              confirmationPassword !== password
                ? ""
                : "hide"
            }`}
          >
            • Passwords do not match
          </div>
        </div>

        <Alert
          className={`alert red-border ${
            status === STATUS_CODE_UNEXPECTED_ERROR ? "" : "hide"
          }`}
          severity="error"
          onClose={() => {
            setStatus("");
          }}
        >
          Something went wrong. Try again later!
        </Alert>

        <Alert
          className={`alert green-border ${
            status === STATUS_CODE_SUCCESS ? "" : "hide"
          }`}
          severity="success"
          onClose={() => {
            setStatus("");
          }}
        >
          Password has been changed successfully. Please login{" "}
          <span onClick={navigateSignin} className="link">
            here.
          </span>
        </Alert>

        <Alert
          className={`alert red-border ${
            status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST ? "" : "hide"
          }`}
          severity="error"
          onClose={() => {
            setStatus("");
          }}
        >
          Link is invalid or may have expired. Please request for a new email to
          reset your password{" "}
          <span onClick={navigateAccountRecovery} className="link">
            here
          </span>
          .
        </Alert>

        <Box>
          <Button
            className="signup-btn"
            onClick={() => {
              handlePasswordReset();
              setPasswordInputTouched(true);
              setPasswordConfirmationTouched(true);
            }}
          >
            Reset Password
            {isLoading && (
              <div className="progress">
                <CircularProgress color="inherit" size="16px" />
              </div>
            )}
          </Button>
        </Box>

        <Box className="text-center">
          Already have an account?{" "}
          <span onClick={navigateSignin}> Sign in.</span>
        </Box>
      </Box>
    </div>
  );
}

export default PasswordResetPage;
