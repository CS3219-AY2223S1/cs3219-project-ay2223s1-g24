import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { URL_USER_SVC, HEROKU_ENDPOINT } from "configs";
import { STATUS_CODE_CONFLICT, STATUS_CODE_CREATED } from "constants";
import { Link } from "react-router-dom";
import "./signup.scss";
import mainLogo from "assets/logo.png";

function SignupPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isUserInputTouched, setUserInputTouched] = useState(false);
  const [isEmailInputTouched, setEmailInputTouched] = useState(false);
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
  const [dialogTitle, setDialogTitle] = useState("");
  const [dialogMsg, setDialogMsg] = useState("");
  const [isSignupSuccess, setIsSignupSuccess] = useState(false);

  const handleSignup = async () => {
    setIsSignupSuccess(false);
    const postUserEndpoint = HEROKU_ENDPOINT + "signup";
    const res = await axios
      .post(postUserEndpoint, { name: username, password, email })
      .catch((err) => {
        console.log(err);
        if (err.response.status === STATUS_CODE_CONFLICT) {
          setErrorDialog("This username already exists");
        } else {
          setErrorDialog("Please try again later");
        }
      });

    if (res && res.status === STATUS_CODE_CREATED) {
      setSuccessDialog("Account successfully created");
      setIsSignupSuccess(true);
    }
  };

  const closeDialog = () => setIsDialogOpen(false);

  const setSuccessDialog = (msg) => {
    setIsDialogOpen(true);
    setDialogTitle("Success");
    setDialogMsg(msg);
  };

  const setErrorDialog = (msg) => {
    setIsDialogOpen(true);
    setDialogTitle("Error");
    setDialogMsg(msg);
  };

  return (
    <div className="signup">
      <Box display={"flex"} flexDirection={"column"} width={"30%"}>
        <Typography className="title" marginBottom={"2rem"}>
          Sign Up
        </Typography>
        <div className="textfields">
          <TextField
            required
            className="field"
            label="Username"
            error={isUserInputTouched && username === ""}
            variant="filled"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            onBlur={() => {
              setUserInputTouched(true);
            }}
          />

          <div
            className={`error-msg ${
              isUserInputTouched && username === "" ? "" : "hide"
            }`}
          >
            • Username cannot be empty
          </div>

          <TextField
            required
            className="field"
            label="Email"
            error={isEmailInputTouched && email === ""}
            variant="filled"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={() => {
              setEmailInputTouched(true);
            }}
          />

          <div
            className={`error-msg ${
              isEmailInputTouched && email === "" ? "" : "hide"
            }`}
          >
            • Email cannot be empty
          </div>

          <TextField
            required
            className="field"
            label="Password"
            error={isPasswordInputTouched && password === ""}
            variant="filled"
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
            • Password cannot be empty
          </div>
        </div>

        <Box>
          <Button className="signup-btn" onClick={handleSignup}>
            Sign up
          </Button>
        </Box>

        <Box className="text-center">
          Already have an account? <a href="./">Sign in.</a>
        </Box>

        <Dialog open={isDialogOpen} onClose={closeDialog}>
          <DialogTitle>{dialogTitle}</DialogTitle>
          <DialogContent>
            <DialogContentText>{dialogMsg}</DialogContentText>
          </DialogContent>
          <DialogActions>
            {isSignupSuccess ? (
              <Button component={Link} to="/login">
                Log in
              </Button>
            ) : (
              <Button onClick={closeDialog}>Done</Button>
            )}
          </DialogActions>
        </Dialog>
      </Box>
    </div>
  );
}

export default SignupPage;
