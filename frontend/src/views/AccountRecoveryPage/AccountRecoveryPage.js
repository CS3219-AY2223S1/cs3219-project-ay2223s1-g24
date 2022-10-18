import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import {
  STATUS_CODE_UNVERIFIED_EMAIL,
  STATUS_CODE_UNEXPECTED_ERROR,
  STATUS_CODE_ACCOUNT_DOES_NOT_EXIST,
  STATUS_CODE_SUCCESS,
} from "constants";
import "./accountRecovery.scss";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setRoom } from "slices/roomSlice";
import mainLogo from "assets/mainlogo.png";

function AccountRecoveryPage() {
  const [email, setEmail] = useState("");
  const [isEmailInputTouched, setEmailInputTouched] = useState(false);
  const [isLoading, setLoading] = useState(false);
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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

  const navigateSignup = () => {
    navigate("/signup");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isFormValid = () => {
    return email !== "" && isValidEmail(email);
  };

  const resetFormFields = () => {
    setEmail("");
    setEmailInputTouched(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleAccountRecovery();
    }
  };
  const handleAccountRecovery = async () => {
    // Check fields submitted if they are valid inputs
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    const payload = { email };
    const res = await axios
      .post(USER_SERVICE_API_ENDPOINT + "sendPasswordChange", payload)
      .catch((err) => {
        setLoading(false);
        if (err.response.status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST) {
          setStatus(STATUS_CODE_ACCOUNT_DOES_NOT_EXIST);
        } else if (err.response.status === STATUS_CODE_UNVERIFIED_EMAIL) {
          setStatus(STATUS_CODE_UNVERIFIED_EMAIL);
        } else {
          setStatus(STATUS_CODE_UNEXPECTED_ERROR);
        }
        console.log(status);
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
            <div className="title">Account Recovery</div>
            <img className="right-img" src={mainLogo} alt="main-logo" />
          </div>
        </Typography>

        <div className="desc">
          Please enter your email address to search for your account.
        </div>
        <div className="textfields">
          <TextField
            className="field"
            label="Email"
            error={isEmailInputTouched && email === ""}
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              setEmailInputTouched(true);
            }}
            onKeyDown={handleKeyDown}
          />

          <div
            className={`error-msg ${
              isEmailInputTouched && email === "" ? "" : "hide"
            }`}
          >
            • Email is required
          </div>

          <div
            className={`error-msg ${
              isEmailInputTouched && email.length > 0 && !isValidEmail(email)
                ? ""
                : "hide"
            }`}
          >
            • Please provide a valid email address
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
          An email has been sent to reset your password.
        </Alert>

        <Alert
          className={`alert red-border ${
            status === STATUS_CODE_UNVERIFIED_EMAIL ? "" : "hide"
          }`}
          severity="error"
          onClose={() => {
            setStatus("");
          }}
        >
          Email provided has not been verified yet. Please check your email for
          a verification email.
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
          Email provided does not exist. Please
          <span className="link" onClick={navigateSignup}>
            {" "}
            sign up here.
          </span>
        </Alert>

        <Box>
          <Button
            className="signup-btn"
            onClick={() => {
              handleAccountRecovery();
              setEmailInputTouched(true);
            }}
          >
            Send Verification
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

export default AccountRecoveryPage;
