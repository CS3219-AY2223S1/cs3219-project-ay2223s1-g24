import "./dashboardPage.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import mainLogo from "assets/logo.png";
import MainComponent from "./MainComponent";
import DashboardComponent from "./DashboardComponent";

function DashboardPage() {
  const [value, setValue] = useState("one");
  const [tabNumber, setTabNumber] = useState(0);

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

        <div className="user item">USER</div>
      </div>

      {tabNumber === 0 && <MainComponent />}
      {tabNumber === 1 && <DashboardComponent />}
    </div>
  );
}

export default DashboardPage;
