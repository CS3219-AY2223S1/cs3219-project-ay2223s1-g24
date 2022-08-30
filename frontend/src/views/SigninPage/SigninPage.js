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
import { Link } from "react-router-dom";
import "./signin.scss";
import SignupPage from "views/SignupPage/SignupPage";

function SigninPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [dialogTitle, setDialogTitle] = useState("");
    const [isDialogOpen, setIsDialogOpen] = useState(false);
    const [isUserInputTouched, setUserInputTouched] = useState(false);
    const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
    const [dialogMsg, setDialogMsg] = useState("");
    const [isSigninSuccess, setIsSigninSuccess] = useState(false);

    const navigate = useNavigate();
    const navigateSignup = () => {
        navigate("/signup");
    };

    const handleSignin = async () => {
        setIsSigninSuccess(false);
    
        // Add more validation e.g length requirements etc
        if (username === "") {
          setErrorDialog("Username cannot be empty");
          return;
        } else if (password === "") {
          setErrorDialog("Password cannot be empty");
          return;
        }
    
        // const postUserEndpoint = HEROKU_ENDPOINT + "signin";
        // const res = await axios
        //   .post(postUserEndpoint, { name: username, password})
        //   .catch((err) => {
        //     console.log(err);
        //     if (err.response.status === STATUS_CODE_CONFLICT) {
        //       setErrorDialog("This username already exists");
        //     } else {
        //       setErrorDialog("Please try again later");
        //     }
        //   });
    
        // if (res && res.status === STATUS_CODE_CREATED) {
        //   setSuccessDialog("Account successfully created");
        //   setIsSigninSuccess(true);
        // }
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
        <div className="signin">
            <Box display={"flex"} flexDirection={"column"} width={"30%"}>
                <Typography className="title" marginBottom={"1rem"}>
                    Sign In
                </Typography>
                <div className="textfields">
                    <TextField
                        className="field"
                        label="Username"
                        error={isUserInputTouched && username === ""}
                        variant="filled"
                        size="small"
                        InputProps={{ style: { fontSize: 10 } }}
                        InputLabelProps={{ style: { fontSize: 12 } }}
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
                        • Username is required
                    </div>

                    <TextField
                        className="field"
                        label="Password"
                        error={isPasswordInputTouched && password === ""}
                        variant="filled"
                        size="small"
                        InputProps={{ style: { fontSize: 10 } }}
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
                </div>
                <Box>
                    <Button
                        className="signin-btn"
                        onClick={() => {
                        setUserInputTouched(true);
                        setPasswordInputTouched(true);
                        handleSignin();
                        }}
                    >
                        Sign In
                    </Button>
                </Box>

                <Box className="text-center">
                    Don't have an account? <span onClick={navigateSignup}> Sign Up Now!</span>
                    <Routes>
                        <Route path="/*/" element={<SignupPage />} />
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
