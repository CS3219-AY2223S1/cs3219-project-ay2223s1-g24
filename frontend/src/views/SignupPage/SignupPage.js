import { Box, Button, TextField, Typography } from "@mui/material";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { HEROKU_ENDPOINT } from "configs";
import { STATUS_CODE_CONFLICT, STATUS_CODE_CREATED } from "constants";
// import { Link } from "react-router-dom";
import "./signup.scss";
import HomePage from "views/HomePage/HomePage";

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
  const MIN_PASSWORD_LEN = 6;

  const navigate = useNavigate();
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

  const handleSignup = async () => {
    if (!isFormValid()) {
      return;
    }
    const payload = { name: username, password, email };
    const res = await axios
      .post(HEROKU_ENDPOINT + "signup", payload)
      .catch((err) => {
        if (err.response.status === STATUS_CODE_CONFLICT) {
          setUsernameDuplicate(err.response.data.invalidEmail);
          setEmailDuplicate(err.response.data.invalidUsername);
        } else {
        }
        return;
      });

    if (res && res.status === STATUS_CODE_CREATED) {
      navigateHome();
    }
  };

  return (
    <div className="signup">
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography className="title" marginBottom={"1rem"}>
          Sign Up
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

        <Box>
          <Button
            className="signup-btn"
            onClick={() => {
              setUserInputTouched(true);
              setEmailInputTouched(true);
              setPasswordInputTouched(true);
              setPasswordConfirmationTouched(true);
              handleSignup();
            }}
          >
            Sign up
          </Button>
        </Box>

        <Box className="text-center">
          Already have an account? <span onClick={navigateHome}> Sign in.</span>
          <Routes>
            <Route path="/*/" element={<HomePage />} />
          </Routes>
        </Box>
      </Box>
    </div>
  );
}

export default SignupPage;
