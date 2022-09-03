import "./dashboardTopBar.scss";
import { Routes, Route, useNavigate } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useState } from "react";
import mainLogo from "assets/logo.png";

function DashboardTopBar() {
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
          <Tab value="one" sx={tabStyling} label="Main" onClick={() => setTabNumber(0)} />
          <Tab value="two" sx={tabStyling} label="Dashboard" onClick={() => setTabNumber(1)}/>
        </Tabs>
      </div>
      <div className="logo item">
        <img src={mainLogo} alt="main-logo" />
      </div>

      <div className="user item">USER</div>
        {tabNumber === 0 && <div>Main Page</div>}
        {tabNumber === 1 && <div>DashBoard Page</div>}
    </div>
  );
}

export default DashboardTopBar;
