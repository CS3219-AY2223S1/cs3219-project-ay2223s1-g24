import {
  Alert,
  Box,
  Button,
  CircularProgress,
  TextField,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import axios from "axios";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import {
  STATUS_CODE_CONFLICT,
  STATUS_CODE_CREATED,
  MIN_PASSWORD_LEN,
  SINGLE_DAY_EXPIRY,
} from "constants";
import "./signup.scss";
import { useCookies } from "react-cookie";
import { useDispatch } from "react-redux";
import { setRoom } from "slices/roomSlice";
import mainLogo from "assets/mainlogo.png";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [isUserInputTouched, setUserInputTouched] = useState(false);
  const [isEmailInputTouched, setEmailInputTouched] = useState(false);
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
  const [isPasswordConfirmationTouched, setPasswordConfirmationTouched] =
    useState(false);
  const [isUsernameDuplicate, setUsernameDuplicate] = useState(false);
  const [isEmailDuplicate, setEmailDuplicate] = useState(false);
  const [hasUnexpectedError, setUnexpectedError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [isSignupSuccess, setSignupSuccess] = useState(false);
  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const signupButton = useRef(null);

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
    if (cookies.roomId && cookies.roomID !== '') {
      loadRoom();
    }
    else if (cookies.jwtToken) {
      navigate("/dashboard");
    }
  });

  const navigateSignin = () => {
    navigate("/signin");
  };

  const navigateHome = () => {
    navigate("/");
  };

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const isFormValid = () => {
    return (
      username !== "" &&
      email !== "" &&
      isValidEmail(email) &&
      password !== "" &&
      password.length >= MIN_PASSWORD_LEN &&
      confirmationPassword !== "" &&
      password === confirmationPassword
    );
  };

  const resetFormFields = () => {
    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmationPassword("");
    setUserInputTouched(false);
    setEmailInputTouched(false);
    setPasswordInputTouched(false);
    setPasswordConfirmationTouched(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignup();
    }
  };

  const handleSignup = async () => {
    // Check fields submitted if they are valid inputs
    if (!isFormValid()) {
      return;
    }
    setLoading(true);
    const payload = { name: username, password, email };
    const res = await axios
      .post(USER_SERVICE_API_ENDPOINT + "signup", payload)
      .catch((err) => {
        setLoading(false);
        console.log(err.response);
        if (err.response.status === STATUS_CODE_CONFLICT) {
          setUsernameDuplicate(err.response.data.invalidEmail);
          setEmailDuplicate(err.response.data.invalidUsername);
        } else {
          setUnexpectedError(true);
        }
        return;
      });

    if (res && res.status === STATUS_CODE_CREATED) {
      setLoading(false);
      resetFormFields();
      setSignupSuccess(true);
      signupButton.current.focus();
    }
  };

  return (
    <div className="signup">
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography className="title-container" marginbottom={"1rem"}>
          <div className="heading">
            <img
              className="left-img"
              src={mainLogo}
              alt="main-logo"
              onClick={navigateHome}
            />
            <div className="title">Signup</div>
            <img className="right-img" src={mainLogo} alt="main-logo" />
          </div>
        </Typography>
        <div className="textfields">
          <TextField
            className="field"
            label="Username"
            error={
              (isUserInputTouched && username === "") ||
              (username !== "" && isUsernameDuplicate)
            }
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onBlur={() => {
              setUserInputTouched(true);
              setUsernameDuplicate(false);
            }}
            onKeyDown={handleKeyDown}
          />

          <div
            className={`error-msg ${
              isUserInputTouched && username === "" ? "" : "hide"
            }`}
          >
            • Username is required
          </div>

          <div
            className={`error-msg ${
              username !== "" && isUsernameDuplicate ? "" : "hide"
            }`}
          >
            • Username already exists
          </div>

          <TextField
            className="field"
            label="Email"
            error={
              (isEmailInputTouched && email === "") ||
              (username !== "" && isEmailDuplicate)
            }
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              setEmailInputTouched(true);
              setEmailDuplicate(false);
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
              username !== "" && isEmailDuplicate ? "" : "hide"
            }`}
          >
            • Email already exists
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
          className={`alert red-border ${hasUnexpectedError ? "" : "hide"}`}
          severity="error"
          onClose={() => {
            setUnexpectedError(false);
          }}
        >
          Something went wrong. Try again later!
        </Alert>

        <Alert
          className={`alert green-border ${isSignupSuccess ? "" : "hide"}`}
          severity="success"
          onClose={() => {
            setSignupSuccess(false);
          }}
        >
          Thank you for signing up. An email has been sent for verification.
        </Alert>

        <Box>
          <Button
            className="signup-btn"
            rootRef={signupButton}
            onClick={() => {
              setUserInputTouched(true);
              setEmailInputTouched(true);
              setPasswordInputTouched(true);
              setPasswordConfirmationTouched(true);
              handleSignup();
            }}
          >
            Sign up
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

export default SignupPage;
