import "./dashboardTopBar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import mainLogo from "assets/logo.png";

function DashboardTopBar() {
  const [value, setValue] = useState("one");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const navigateMain = useNavigate();
    const navigateToMainPage = () => {
      navigateMain("/main");
  };
  
  const navigateDashboard = useNavigate();
    const navigateToDashboardPage = () => {
      navigateDashboard("/dashboard");
  };

  const tabStyling = {
    fontFamily: "sans-serif",
    fontSize: "14px",
    fontWeight: "500",
    textTransform: "none",
  };
  return (
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
          <Tab value="one" sx={tabStyling} label="Main" />
          <Tab value="two" sx={tabStyling} label="Dashboard" />
        </Tabs>
      </div>
      <div className="logo item">
        <img src={mainLogo} alt="main-logo" />
      </div>

      <div className="user item">USER</div>
    </div>
  );
}

export default DashboardTopBar;
