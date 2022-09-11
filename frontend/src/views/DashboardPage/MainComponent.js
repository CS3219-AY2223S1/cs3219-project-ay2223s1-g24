import * as React from "react";
import "./mainComponent.scss";
import Box from "@mui/material/Box";
import Button from "components/Button/Button";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import CodeComponent from "./CodeComponent";

function MainComponent() {
  const [isCodePageRendered, setCodePageRender] = useState(0);
  return (
    <div>
      {isCodePageRendered === 0 && (
        <div className="dashboard">
          <div className="flexbox-container">
            <Box className="flexbox-item">
              <Typography gutterBottom variant="h5" component="div">
                Easy
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the easy difficulty.
              </Typography>
            </Box>
            <Box className="flexbox-item">
              <Typography gutterBottom variant="h5" component="div">
                Medium
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the medium difficulty.
              </Typography>
            </Box>
            <Box className="flexbox-item">
              <Typography gutterBottom variant="h5" component="div">
                Hard
              </Typography>
              <Typography variant="body2" color="text.secondary">
                This is the hard difficulty.
              </Typography>
            </Box>
          </div>
          <div className="flexbox-container2 confirm-btn">
            <Button text={"Start Matching!"} onClick={() => setCodePageRender(1)} />
          </div>
        </div>
      )}
      {isCodePageRendered === 1 && (
        <CodeComponent returnFunc={setCodePageRender} />
      )}
    </div>
  );
}

export default MainComponent;