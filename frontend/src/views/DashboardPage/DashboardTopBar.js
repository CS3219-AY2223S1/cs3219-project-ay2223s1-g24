import "./dashboardTopBar.scss";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { useState } from "react";

function DashboardTopBar() {
  const [value, setValue] = useState(0);

  return (
    <div className="dashboardTopbar">
      <div className="tabs">
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={setValue}
            aria-label="basic tabs example"
          >
            <Tab label="Item One" />
            <Tab label="Item Two" />
            <Tab label="Item Three" />
          </Tabs>
        </Box>
      </div>
      <div className="logo">LOGO</div>

      <div className="user">USER</div>
    </div>
  );
}

export default DashboardTopBar;
