import { Alert, Box, Button, TextField, CircularProgress } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import mainLogo from "assets/mainlogo.png";
import "./signin.scss";
import SignupPage from "views/SignupPage/SignupPage";
import { useCookies } from "react-cookie";
import {
  STATUS_CODE_SUCCESS,
  STATUS_CODE_INCORRECT_PARAMS,
  STATUS_CODE_ACCOUNT_DOES_NOT_EXIST,
  STATUS_CODE_WRONG_PASSWORD,
  STATUS_CODE_UNEXPECTED_ERROR,
} from "constants";
import { useDispatch } from "react-redux";
import { setRoom } from "slices/roomSlice";

function SigninPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [status, setStatus] = useState(STATUS_CODE_SUCCESS);
  const [isUserInputTouched, setUserInputTouched] = useState(false);
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
  const [hasUnexpectedError, setUnexpectedError] = useState(false);
  const [isLoading, setLoading] = useState(false);
  const [cookies, setCookie] = useCookies(["name", "email", "jwtToken", "roomID" ,"firstQuestionHash", "secondQuestionHash", "difficulty"]);
  const SINGLE_DAY_EXPIRY = 86400 * 1000;
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const navigateToSignup = () => {
    navigate("/signup");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const navigateToHome = () => {
    navigate("/");
  };

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
    if (cookies.roomID !== null && cookies.roomID !== '') {
      loadRoom();
    }
    else if (cookies.jwtToken) {
      navigateToDashboard();
    }
  });

  const isValidEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const areValidFields = () => {
    return email !== "" && isValidEmail(email) && password !== "";
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      handleSignin();
    }
  };

  const handleSignin = async () => {
    // Check fields submitted if they are valid inputs
    if (!areValidFields()) {
      return;
    }

    setLoading(true);
    const postUserEndpoint = USER_SERVICE_API_ENDPOINT + "login";
    const res = await axios
      .post(postUserEndpoint, { email, password })
      .catch((err) => {
        console.log(err);
        if (err.response.status === STATUS_CODE_INCORRECT_PARAMS) {
          setStatus(STATUS_CODE_INCORRECT_PARAMS);
        } else if (err.response.status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST) {
          setStatus(STATUS_CODE_ACCOUNT_DOES_NOT_EXIST);
        } else if (err.response.status === STATUS_CODE_WRONG_PASSWORD) {
          setStatus(STATUS_CODE_WRONG_PASSWORD);
        } else if (err.response.status === STATUS_CODE_UNEXPECTED_ERROR) {
          setStatus(STATUS_CODE_UNEXPECTED_ERROR);
        } else {
          setUnexpectedError(true);
        }
        setLoading(false);
        return;
      });

      console.log(res)

    if (res && res.status === STATUS_CODE_SUCCESS) {
      setLoading(false);
      let expires = new Date();
      expires.setTime(expires.getTime() + SINGLE_DAY_EXPIRY);
      setCookie("jwtToken", res.data.token, { path: "/", expires });
      setCookie("email", res.data.user.email, { path: "/", expires });
      setCookie("name", res.data.user.name, { path: "/", expires });
      navigateToDashboard();
    }
  };

  return (
    <div className="signin">
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <div className="heading">
          <img
            className="left-img"
            src={mainLogo}
            alt="main-logo"
            onClick={navigateToHome}
          />
          <div className="title" marginbottom={"1rem"}>
            Sign in
          </div>
          <img className="right-img" src={mainLogo} alt="main-logo" />
        </div>
        <div className="textfields">
          <TextField
            className="field"
            label="Email"
            error={
              (isUserInputTouched && email === "") ||
              (email !== "" && !isValidEmail(email)) ||
              (isValidEmail(email) &&
                status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST)
            }
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              setStatus(200);
            }}
            onBlur={() => {
              setUserInputTouched(true);
            }}
            onKeyDown={handleKeyDown}
          />

          <div
            className={`error-msg ${
              isUserInputTouched && email === "" ? "" : "hide"
            }`}
          >
            • Email is required
          </div>

          <div
            className={`error-msg ${
              email !== "" && !isValidEmail(email) ? "" : "hide"
            }`}
          >
            • Email is not valid
          </div>

          <div
            className={`error-msg ${
              isValidEmail(email) &&
              status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST
                ? ""
                : "hide"
            }`}
          >
            • Account does not exist.
          </div>

          <TextField
            className="field"
            label="Password"
            error={
              (isPasswordInputTouched && password === "") ||
              (password !== "" && status === STATUS_CODE_WRONG_PASSWORD)
            }
            variant="filled"
            size="small"
            InputProps={{ style: { fontSize: 12 } }}
            InputLabelProps={{ style: { fontSize: 12 } }}
            type="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setStatus(200);
            }}
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
              password !== "" && status === STATUS_CODE_WRONG_PASSWORD
                ? ""
                : "hide"
            }`}
          >
            • Wrong password. Please try again
          </div>
        </div>

        <Alert
          className={`alert ${hasUnexpectedError ? "" : "hide"}`}
          severity="error"
          marginbottom={"10px"}
          onClose={() => {
            setUnexpectedError(false);
          }}
        >
          Something went wrong. Try again later!
        </Alert>

        <Box>
          <Button
            className="signin-btn"
            onClick={() => {
              handleSignin();
              setUserInputTouched(true);
              setPasswordInputTouched(true);
            }}
          >
            Sign In
            {isLoading && (
              <div className="progress">
                <CircularProgress color="inherit" size="16px" />
              </div>
            )}
          </Button>
        </Box>

        <Box className="text-center">
          Don't have an account yet?{" "}
          <span onClick={navigateToSignup}> Sign up.</span>
          <Routes>
            <Route path="/signup/*" element={<SignupPage />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default SigninPage;
