
import "./mainComponent.scss";
import React, { useState } from 'react';
import "./dashboardComponent.scss";
import CustomButton from "components/Button/Button";
import {
  Alert,
  Box,
  Button,
  Card,
  CardActions,
  CardActionArea,
  CardContent,
  CardMedia,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Grid,
  Paper,
  styled,
  TextField,
  Typography,
} from "@mui/material";
import CodeComponent from "./CodeComponent";
import { Routes, Route, useNavigate } from "react-router-dom";

function MainComponent() {
  const [isCodePageRendered, setCodePageRender] = useState(0);

  const navigate = useNavigate();
  const navigateToCodingPage = () => {
    navigate("/coding");
  };


  const [easyModal, setEasyModal] = useState(false)
  const openEasyModal = () =>{
    setEasyModal(true)
  }
  const closeEasyModal = () =>{
    setEasyModal(false)
  }

  return (

    <div className="flexbox-container">
      <Dialog open={easyModal}>
          <DialogTitle>Match Service</DialogTitle>
          <DialogContent
            sx={{ display: "flex", "flex-direction": "column", width: "300px" }}
          >
            <span style={{ marginBottom: "20px" }}>
              Please confirm that you want to be matched into the easy question room
            </span>
          </DialogContent>
          <DialogActions
            sx={{ display: "flex", justifyContent: "space-between" }}
          >
            <Button
              sx={{ ml: "7px" }}
              onClick={closeEasyModal}
            >
              CONFIRM (nothing for now)
            </Button>
            <Button
              sx={{ mr: "7px" }}
              onClick={closeEasyModal}
            >
              Go back
            </Button>
          </DialogActions>
      </Dialog>

      <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={8} className="grid-container">

        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://htmlcolorcodes.com/assets/images/colors/green-color-solid-background-1920x1080.png"
                alt="green background color"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Easy
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Questions that usually sets the tone for the concepts that will be
                  tested subsequently
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary" onClick={openEasyModal}>
                Find Room
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://htmlcolorcodes.com/assets/images/colors/yellow-color-solid-background-1920x1080.png"
                alt="yellow background color"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Medium
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Majority of the online assessment questions and real life interview questions are of this level
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Find Room
              </Button>
            </CardActions>
          </Card>
        </Grid>

        <Grid item>
          <Card sx={{ maxWidth: 345 }}>
              <CardMedia
                component="img"
                height="140"
                image="https://htmlcolorcodes.com/assets/images/colors/red-color-solid-background-1920x1080.png"
                alt="red background color"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Hard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Frequently asked for firms that focus on trading-related activities. Not very common
                </Typography>
              </CardContent>
            <CardActions>
              <Button size="small" color="primary">
                Find Room
              </Button>
            </CardActions>
          </Card>
        </Grid>
        
              
        <CustomButton text={"Start Matching!"} onClick={navigateToCodingPage} />
        
      </Grid>
    </div>

    
    // <div>
    //   {isCodePageRendered === 0 && (
    //     <div className="dashboard">
    //       <div className="flexbox-container">
    //         <Box className="flexbox-item">
    //           <Typography gutterBottom variant="h5" component="div">
    //             Easy
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             This is the easy difficulty.
    //           </Typography>
    //         </Box>
    //         <Box className="flexbox-item">
    //           <Typography gutterBottom variant="h5" component="div">
    //             Medium
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             This is the medium difficulty.
    //           </Typography>
    //         </Box>
    //         <Box className="flexbox-item">
    //           <Typography gutterBottom variant="h5" component="div">
    //             Hard
    //           </Typography>
    //           <Typography variant="body2" color="text.secondary">
    //             This is the hard difficulty.
    //           </Typography>
    //         </Box>
    //       </div>
    //       {/*<div className="flexbox-container2 confirm-btn">
    //         <Button text={"Start Matching!"} onClick={() => setCodePageRender(1)} />
    //       </div>*/}
    //       <div className="flexbox-container2 confirm-btn">
    //         <Button text={"Start Matching!"} onClick={navigateToCodingPage} />
    //       </div>
    //     </div>
    //   )}
    // </div>
  );
}

export default MainComponent;