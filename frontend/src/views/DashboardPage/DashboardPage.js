import * as React from 'react';
import "./dashboard.scss";
import DashboardTopBar from "./DashboardTopBar";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import easyDifficulty from "assets/easy_difficulty.png";
import mediumDifficulty from "assets/medium_difficulty.png";
import hardDifficulty from "assets/hard_difficulty.png";

function DashboardPage() {

  return (
    <div className="dashboard">
      <DashboardTopBar />
      <div class="flexbox-container">
        <Box className='flexbox-item'>
          <CardMedia
            component="img"
            height="140"
            image={easyDifficulty}
            alt="Easy difficulty picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Easy
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the easy difficulty.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
        <Box className='flexbox-item'>
          <CardMedia
            component="img"
            height="140"
            image={mediumDifficulty}
            alt="Medium difficulty picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Medium
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the medium difficulty.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
        <Box className='flexbox-item'>
          <CardMedia
            component="img"
            height="140"
            image={hardDifficulty}
            alt="Hard difficulty picture"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Hard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              This is the hard difficulty.
            </Typography>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Box>
      </div>
      <Box class="flexbox-container">
        <Button className="confirm-btn">
          Confirm Selection
        </Button>
      </Box>
    </div>
  );
}

export default DashboardPage;
