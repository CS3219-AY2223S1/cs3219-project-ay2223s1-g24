import React, { useState } from 'react';
import "./dashboardComponent.scss";
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
import easyDifficulty from "assets/easy_difficulty.png";
import mediumDifficulty from "assets/medium_difficulty.png";
import hardDifficulty from "assets/hard_difficulty.png";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function DashboardComponent() {

  
  const [easyModal, setEasyModal] = useState(false)
  const openEasyModal = () =>{
    setEasyModal(true)
  }
  const closeEasyModal = () =>{
    setEasyModal(false)
  }



  return (
    <Grid container direction="row" justifyContent="space-evenly" alignItems="center" spacing={8} className="grid-container">

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
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
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Find Room
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
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
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Find Room
            </Button>
          </CardActions>
        </Card>
      </Grid>

      <Grid item>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
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
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              Find Room
            </Button>
          </CardActions>
        </Card>
      </Grid>
    
    </Grid>
  );
}

export default DashboardComponent;
