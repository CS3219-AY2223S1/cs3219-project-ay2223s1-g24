import "./dashboardPage.scss";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Dialog,
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
  STATUS_CODE_ACCOUNT_DOES_NOT_EXIST,
  STATUS_CODE_CREATED,
} from "constants";
import { HEROKU_ENDPOINT } from "configs";
import axios from "axios";

function DashboardPage() {
  const [value, setValue] = useState("one");
  const [tabNumber, setTabNumber] = useState(0);
  const [cookies, setCookie, removeCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
  ]);
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

  const navigate = useNavigate();

  const navigateHome = () => {
    navigate("/");
  };

  useEffect(() => {
    if (!cookies.jwtToken) {
      navigate("/signin");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const isDeleteAccountFormValid = () => {
    return password !== "" || !cookies.email;
  };

  const handleDeleteAccount = async () => {
    // Check fields submitted if they are valid inputs
    if (!isDeleteAccountFormValid()) {
      return;
    }
    const payload = { email: cookies.email, password };
    console.log(payload);
    const res = await axios
      .delete(HEROKU_ENDPOINT + "deleteUser", payload)
      .catch((err) => {
        console.log(err.response);
        if (err.response.status === STATUS_CODE_ACCOUNT_DOES_NOT_EXIST) {
          console.log("password is incorrect");
          setPasswordIncorrectStatus(true);
        } else {
        }
        return;
      });

    if (res && res.status === STATUS_CODE_CREATED) {
      removeCookie("name", { path: "/" });
      removeCookie("email", { path: "/" });
      removeCookie("jwtToken", { path: "/" });
      navigateHome();
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
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={() => {
                setChangePasswordDialogOpen(false);
              }}
            >
              Change Password
            </Button>
            <Button
              sx={{ mr: "7px" }}
              onClick={() => {
                setChangePasswordDialogOpen(false);
                setPasswordInputTouched(false);
                setNewPasswordInputTouched(false);
                setConfirmationPasswordInputTouched(false);
                setPassword("");
                setConfirmationPassword("");
                setNewPassword("");
              }}
            >
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
          </DialogContent>

          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={() => {
                handleDeleteAccount();
              }}
            >
              Delete Account
            </Button>
            <Button
              sx={{ mr: "7px" }}
              onClick={() => {
                setProfileDialogOpen(false);
                setPasswordInputTouched(false);
                setPassword("");
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      {tabNumber === 0 && <MainComponent />}
      {tabNumber === 1 && <DashboardComponent />}
    </div>
  );
}

export default DashboardPage;
