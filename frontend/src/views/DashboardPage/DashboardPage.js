import "./dashboardPage.scss";
import { useNavigate } from "react-router-dom";
import {
  Alert,
  Button,
  Dialog,
  CircularProgress,
  DialogActions,
  DialogContent,
  DialogTitle,
  TextField,
  Typography,
} from "@mui/material";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import mainLogo from "assets/logo.png";
import MainComponent from "./MainComponent";
import DashboardComponent from "./DashboardComponent";
import { useCookies } from "react-cookie";
import UserMenu from "components/UserMenu/UserMenu";
import {
  MIN_PASSWORD_LEN,
  STATUS_CODE_WRONG_PASSWORD,
  STATUS_CODE_SUCCESS,
  STATUS_CODE_INCORRECT_PARAMS,
  ERROR_DEFAULT,
  ERROR_WRONG_PASSWORD,
  ERROR_UNEXPECTED,
} from "constants";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import axios from "axios";
import { decodeToken, isExpired } from "react-jwt";

function DashboardPage() {
  const [value, setValue] = useState("one");
  const [tabNumber, setTabNumber] = useState(0);
  const [isChangePasswordDialogOpen, setChangePasswordDialogOpen] =
    useState(false);
  const [isProfileDialogOpen, setProfileDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);
  const [confirmationPassword, setConfirmationPassword] = useState("");
  const [
    isConfirmationPasswordInputTouched,
    setConfirmationPasswordInputTouched,
  ] = useState(false);
  const [newPassword, setNewPassword] = useState("");
  const [isNewPasswordInputTouched, setNewPasswordInputTouched] =
    useState(false);
  const [isIncorrectPasswordStatus, setPasswordIncorrectStatus] =
    useState(false);
  const [isActionSuccess, setActionSuccess] = useState(false);
  const [isErrorPresent, setErrorStatus] = useState(ERROR_DEFAULT);
  const [isLoading, setLoading] = useState(false);

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  // eslint-disable-next-line
  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);

  useEffect(() => {
    const decodedToken = decodeToken(cookies?.jwtToken);
    if (
      !cookies.jwtToken ||
      decodedToken?.email !== cookies?.email ||
      decodedToken?.name !== cookies?.name ||
      isExpired(cookies.jwtToken)
    ) {
      removeCookie("name", { path: "/" });
      removeCookie("email", { path: "/" });
      removeCookie("jwtToken", { path: "/" });
      navigate("/signin");
    }
  });

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const resetAllFields = () => {
    setProfileDialogOpen(false);
    setChangePasswordDialogOpen(false);
    setPasswordInputTouched(false);
    setNewPasswordInputTouched(false);
    setConfirmationPasswordInputTouched(false);
    setPassword("");
    setConfirmationPassword("");
    setNewPassword("");
    setActionSuccess(false);
    setErrorStatus(ERROR_DEFAULT);
    setLoading(false);
  };

  const resetPasswordFields = () => {
    setPasswordInputTouched(false);
    setNewPasswordInputTouched(false);
    setConfirmationPasswordInputTouched(false);
    setPassword("");
    setConfirmationPassword("");
    setNewPassword("");
    setErrorStatus(ERROR_DEFAULT);
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isDeleteAccountFormValid = () => {
    return password && cookies.email;
  };

  const isPasswordChangeFormValid = () => {
    return (
      cookies.email &&
      password &&
      newPassword &&
      newPassword === confirmationPassword
    );
  };

  const handleDeleteAccount = async () => {
    // Check fields submitted if they are valid inputs
    if (!isDeleteAccountFormValid()) {
      return;
    }
    setLoading(true);
    const payload = { name: cookies.name, email: cookies.email, password };
    const res = await axios
      .delete(USER_SERVICE_API_ENDPOINT + "deleteUser", { data: payload })
      .catch((err) => {
        setLoading(false);
        if (err.response.status === STATUS_CODE_INCORRECT_PARAMS) {
          setPasswordIncorrectStatus(true);
        } else {
          setErrorStatus(ERROR_UNEXPECTED);
        }
        return;
      });
    if (res && res.status === STATUS_CODE_SUCCESS) {
      setLoading(false);
      setActionSuccess(true);
      removeCookie("name", { path: "/" });
      removeCookie("email", { path: "/" });
      removeCookie("jwtToken", { path: "/" });
      await sleep(4000);
      navigateHome();
    }
  };

  const handlePasswordChange = async () => {
    // Check fields submitted if they are valid inputs
    if (!isPasswordChangeFormValid()) {
      return;
    }
    setLoading(true);
    const payload = {
      name: cookies.name,
      email: cookies.email,
      password,
      new_password: newPassword,
    };
    const res = await axios
      .put(USER_SERVICE_API_ENDPOINT + "updatePassword", payload)
      .catch((err) => {
        setLoading(false);
        console.log(payload);
        console.log(err.response);
        if (err.response.status === STATUS_CODE_WRONG_PASSWORD) {
          setActionSuccess(false);
          setErrorStatus(ERROR_WRONG_PASSWORD);
        } else {
          setErrorStatus(ERROR_UNEXPECTED);
        }
        return;
      });

    if (res && res.status === STATUS_CODE_SUCCESS) {
      setLoading(false);
      resetPasswordFields();
      setActionSuccess(true);
    }
  };

  const tabStyling = {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "none",
  };

  const errorMsgStyling = {
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "none",
    color: "red",
  };

  const errorMsgStylingWithMB = {
    fontFamily: "sans-serif",
    fontSize: "12px",
    fontWeight: "500",
    textTransform: "none",
    color: "red",
    marginTop: "7px",
  };

  return (
    <div className="dashboard">
      <div className="dashboardTopbar">
        <div className="tabs item">
          <Tabs
            value={value}
            onChange={handleChange}
            TabIndicatorProps={{
              style: {
                backgroundColor: "#2c7be5",
              },
            }}
            aria-label="secondary tabs example"
          >
            <Tab
              value="one"
              sx={tabStyling}
              label="Main"
              onClick={() => setTabNumber(0)}
            />
            <Tab
              value="two"
              sx={tabStyling}
              label="Dashboard"
              onClick={() => setTabNumber(1)}
            />
          </Tabs>
        </div>
        <div className="logo item">
          <img src={mainLogo} alt="main-logo" />
        </div>

        <div className="user item">
          <UserMenu
            name={cookies.name}
            setChangePasswordDialogOpen={setChangePasswordDialogOpen}
            setProfileDialogOpen={setProfileDialogOpen}
          />
        </div>

        <Dialog open={isChangePasswordDialogOpen}>
          <DialogTitle>Password Change</DialogTitle>
          <DialogContent
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "300px",
              paddingBottom: "0px",
              paddingTop: "0px",
            }}
          >
            <TextField
              className="field"
              type="password"
              label="Current Password"
              error={
                isPasswordInputTouched &&
                (!password || (password && password.length < MIN_PASSWORD_LEN))
              }
              variant="filled"
              size="small"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
              }}
              onBlur={() => {
                setPasswordInputTouched(true);
              }}
              // onKeyDown={handleKeyDown}
            />
            {isPasswordInputTouched && !password && (
              <Typography sx={errorMsgStylingWithMB}>
                • Please enter your old password.
              </Typography>
            )}
            {isPasswordInputTouched &&
              password &&
              password.length < MIN_PASSWORD_LEN && (
                <Typography sx={errorMsgStylingWithMB}>
                  • Password must be at least {MIN_PASSWORD_LEN} characters.
                </Typography>
              )}

            <TextField
              className="field"
              type="password"
              label="New Password"
              sx={{ mt: "15px" }}
              error={
                isNewPasswordInputTouched &&
                (!newPassword ||
                  (newPassword && newPassword.length < MIN_PASSWORD_LEN))
              }
              variant="filled"
              size="small"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              value={newPassword}
              onChange={(e) => {
                setNewPassword(e.target.value);
              }}
              onBlur={() => {
                setNewPasswordInputTouched(true);
              }}
              // onKeyDown={handleKeyDown}
            />
            {isNewPasswordInputTouched && !newPassword && (
              <Typography sx={errorMsgStylingWithMB}>
                • Please enter your new password.
              </Typography>
            )}

            {isNewPasswordInputTouched &&
              newPassword &&
              newPassword.length < MIN_PASSWORD_LEN && (
                <Typography sx={errorMsgStylingWithMB}>
                  • Password must be at least {MIN_PASSWORD_LEN} characters.
                </Typography>
              )}

            <TextField
              className="field"
              type="password"
              label="Confirm New Password"
              sx={{ mt: "15px", mb: "7px" }}
              error={
                isConfirmationPasswordInputTouched &&
                (!confirmationPassword ||
                  (confirmationPassword &&
                    confirmationPassword !== newPassword))
              }
              variant="filled"
              size="small"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              value={confirmationPassword}
              onChange={(e) => {
                setConfirmationPassword(e.target.value);
              }}
              onBlur={() => {
                setConfirmationPasswordInputTouched(true);
              }}
              // onKeyDown={handleKeyDown}
            />
            {isConfirmationPasswordInputTouched && !confirmationPassword && (
              <Typography sx={errorMsgStylingWithMB}>
                • Please confirm your new password.
              </Typography>
            )}

            {isConfirmationPasswordInputTouched &&
              confirmationPassword &&
              confirmationPassword !== newPassword && (
                <Typography sx={errorMsgStyling}>
                  • Passwords do not match.
                </Typography>
              )}
            {isActionSuccess && (
              <Alert
                sx={{ mt: "10px", fontSize: "12px" }}
                severity="success"
                onClose={() => {
                  setActionSuccess(false);
                }}
              >
                Password changed successfully.
              </Alert>
            )}

            {isErrorPresent === ERROR_UNEXPECTED && (
              <Alert
                sx={{ mt: "10px", fontSize: "12px" }}
                severity="error"
                onClose={() => {
                  setErrorStatus(ERROR_DEFAULT);
                }}
              >
                Something went wrong. Try again later!
              </Alert>
            )}

            {isErrorPresent === ERROR_WRONG_PASSWORD && (
              <Alert
                sx={{ mt: "10px", fontSize: "12px" }}
                severity="error"
                onClose={() => {
                  setErrorStatus(ERROR_DEFAULT);
                }}
              >
                Wrong password. Try again!
              </Alert>
            )}
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={() => {
                handlePasswordChange();
                setPasswordInputTouched(true);
                setNewPasswordInputTouched(true);
                setConfirmationPasswordInputTouched(true);
              }}
            >
              Change Password{" "}
              {isLoading && (
                <div className="progress">
                  <CircularProgress
                    color="inherit"
                    size="16px"
                    sx={{ display: "flex", ml: "7px", alignItems: "center" }}
                  />
                </div>
              )}
            </Button>
            <Button sx={{ mr: "7px" }} onClick={resetAllFields}>
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={isProfileDialogOpen}>
          <DialogTitle>Account</DialogTitle>
          <DialogContent
            sx={{ display: "flex", flexDirection: "column", width: "300px" }}
          >
            <Typography style={{ marginBottom: "20px" }}>
              To delete your account, please confirm your password.
            </Typography>
            <TextField
              className="field"
              label="Confirm Password"
              sx={{ mb: "10px" }}
              type="password"
              error={isPasswordInputTouched && !password}
              variant="filled"
              size="small"
              InputProps={{ style: { fontSize: 12 } }}
              InputLabelProps={{ style: { fontSize: 12 } }}
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPasswordIncorrectStatus(false);
              }}
              onBlur={() => {
                setPasswordInputTouched(true);
              }}
              // onKeyDown={handleKeyDown}
            />{" "}
            {isPasswordInputTouched && !password && (
              <Typography sx={errorMsgStyling}>
                • Please confirm your old password.
              </Typography>
            )}
            {isPasswordInputTouched && isIncorrectPasswordStatus && (
              <Typography sx={errorMsgStyling}>
                • Password is incorrect. Try again.
              </Typography>
            )}
            {isErrorPresent === ERROR_UNEXPECTED && (
              <Alert
                sx={{ mt: "10px", fontSize: "12px" }}
                severity="error"
                onClose={() => {
                  setErrorStatus(ERROR_DEFAULT);
                }}
              >
                Something went wrong. Try again later!
              </Alert>
            )}
            {isActionSuccess && (
              <Alert sx={{ mt: "10px", fontSize: "12px", display: "flex" }}>
                Account deleted successfully.
                <div className="progress">
                  Redirecting to main page..
                  <CircularProgress
                    color="inherit"
                    size="10px"
                    sx={{ ml: "7px" }}
                  />
                </div>
              </Alert>
            )}
          </DialogContent>

          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={() => {
                handleDeleteAccount();
                setPasswordInputTouched(true);
              }}
            >
              Delete Account
              {isLoading && (
                <div className="progress">
                  <CircularProgress
                    color="inherit"
                    size="16px"
                    sx={{ display: "flex", ml: "7px", alignItems: "center" }}
                  />
                </div>
              )}
            </Button>
            <Button sx={{ mr: "7px" }} onClick={resetAllFields}>
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>
        {tabNumber === 0 && <MainComponent username={cookies.name} />}
        {tabNumber === 1 && <DashboardComponent />}
      </div>
    </div>
  );
}

export default DashboardPage;
