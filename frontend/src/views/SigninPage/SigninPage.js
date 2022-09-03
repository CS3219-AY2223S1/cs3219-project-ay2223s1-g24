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
import { Routes, Route, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import { HEROKU_ENDPOINT } from "configs";
import { Link } from "react-router-dom";
import mainLogo from "assets/logo.png";
import "./signin.scss";
import SignupPage from "views/SignupPage/SignupPage";
import { STATUS_CODE_SUCCESS, STATUS_CODE_INCORRECT_PARAMS, STATUS_CODE_ACCOUNT_DOES_NOT_EXIST, 
    STATUS_CODE_WRONG_PASSWORD, STATUS_CODE_UNEXPECTED_ERROR } from "constants";

function SigninPage() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");
    const [status, setStatus] = useState(STATUS_CODE_SUCCESS);
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUserInputTouched, setUserInputTouched] = useState(false);
    const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
    const [dialogMsg, setDialogMsg] = useState("");
    const [isSigninSuccess, setIsSigninSuccess] = useState(false);

    const navigateSignup = useNavigate();
    const navigateToSignup = () => {
        navigateSignup("/signup");
    };

    // Placeholder path for dashboard, to be updated
    const navigateDashboard = useNavigate();
    const navigateToDashboard = () => {
        navigateDashboard("/dashboard");
    };

    const isValidEmail = (email) => {
        return /\S+@\S+\.\S+/.test(email);
      };

    const areValidFields = (email, password) => {
        if (email === "") {
            return false;
        }  else if (!isValidEmail) {
            return false;
        } else if (password === "") {
            return false;
        }

        return true;
    }

    const handleKeyDown = event => {
    
        if (event.key === 'Enter') {
          handleSignin();
        }
    };

    const handleSignin = async () => {
        setIsSigninSuccess(false);
    
        // Check fields submitted if they are valid inputs
        if (!areValidFields) {
            return;
        }
            
        const postUserEndpoint = HEROKU_ENDPOINT + "login";
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
              setErrorDialog("Please try again later");
            }
          });
    
        if (res && res.status === STATUS_CODE_SUCCESS) {
          navigateToDashboard();
        }
    };

    const closeDialog = () => setIsDialogOpen(false);

    const setErrorDialog = (msg) => {
        setIsDialogOpen(true);
        setDialogTitle("Error");
        setDialogMsg(msg);
    };

    return (
        <div className="signin">
            <Box display={"flex"} flexDirection={"column"} width={"30%"}>
                <div className="heading">
                    <img className="left-img" src={mainLogo} alt="main-logo" />
                    <div className="title" marginBottom={"1rem"}>
                        Sign in
                    </div>
                    <img className="right-img" src={mainLogo} alt="main-logo" />
                </div>
                <div className="textfields">
                    <TextField
                        className="field"
                        label="Email"
                        error={(isUserInputTouched && email === "") || (email !== "" && !isValidEmail(email)) 
                            || (isValidEmail(email) && status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST)}
                        variant="filled"
                        size="small"
                        InputProps={{ style: { fontSize: 10 } }}
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
                            isValidEmail(email) && status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST ? "" : "hide"
                        }`}
                    >
                        • Your account does not exists
                    </div>

                    <TextField
                        className="field"
                        label="Password"
                        error={(isPasswordInputTouched && password === "") || 
                            (password !== "" && status === STATUS_CODE_WRONG_PASSWORD)}
                        variant="filled"
                        size="small"
                        InputProps={{ style: { fontSize: 10 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
                        type="password"
                        value={password}
                        onChange={(e) => {
                            setPassword(e.target.value)
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
                            password !== "" && status === STATUS_CODE_WRONG_PASSWORD ? "" : "hide"
                        }`}
                    >
                        • Wrong password. Please try again
                    </div>
                </div>
                <Box>
                    <Button
                        className="signin-btn"
                        onClick={() => {
                            handleSignin();
                        }}
                    >
                        Sign In
                    </Button>
                </Box>

                <Box className="text-center">
                    Don't have an account? <span onClick={navigateToSignup}> Sign Up Now!</span>
                    <Routes>
                        <Route path="/signup/*" element={<SignupPage />} />
                    </Routes>
                </Box>

                <Dialog open={isDialogOpen} onClose={closeDialog}>
                    <DialogTitle>{dialogTitle}</DialogTitle>
                    <DialogContent>
                        <DialogContentText>{dialogMsg}</DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        {isSigninSuccess ? (
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

export default SigninPage;
