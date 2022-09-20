import "./dashboardPage.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import {
  Alert,
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
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState, useEffect } from "react";
import mainLogo from "assets/logo.png";
import MainComponent from "./MainComponent";
import DashboardComponent from "./DashboardComponent";
import { useCookies } from "react-cookie";
import UserMenu from "components/UserMenu/UserMenu";

function DashboardPage() {
  const [value, setValue] = useState("one");
  const [tabNumber, setTabNumber] = useState(0);
  const [cookies, setCookie] = useCookies(["name", "email", "jwtToken"]);
  const [isChangePasswordDialogOpen, setChangePasswordDialogOpen] =
    useState(false);
  const [isProfileDialogOpen, setProfileDialogOpen] = useState(false);
  const [password, setPassword] = useState("");
  const [isPasswordInputTouched, setPasswordInputTouched] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    if (!cookies.jwtToken) {
      navigate("/signin");
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const tabStyling = {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "none",
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
            sx={{ display: "flex", "flex-direction": "column", width: "300px" }}
          >
            <TextField
              className="field"
              label="Current Password"
              error={false}
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
            <TextField
              sx={{ mt: "15px" }}
              className="field"
              label="New Password"
              error={false}
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
            <TextField
              sx={{ mt: "15px" }}
              className="field"
              label="Confirm Password"
              error={false}
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
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>

        <Dialog open={isProfileDialogOpen}>
          <DialogTitle>Account</DialogTitle>
          <DialogContent
            sx={{ display: "flex", "flex-direction": "column", width: "300px" }}
          >
            <span style={{ marginBottom: "20px" }}>
              To delete your account, please confirm your password.
            </span>
            <TextField
              className="field"
              label="Confirm Password"
              error={false}
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
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={() => {
                setProfileDialogOpen(false);
              }}
            >
              Delete Account
            </Button>
            <Button
              sx={{ mr: "7px" }}
              onClick={() => {
                setProfileDialogOpen(false);
              }}
            >
              Close
            </Button>
          </DialogActions>
        </Dialog>
      </div>

      <div>
        {tabNumber === 0 && <MainComponent />}
        {tabNumber === 1 && <DashboardComponent />}
      </div>
    </div>
  );
}

export default DashboardPage;
