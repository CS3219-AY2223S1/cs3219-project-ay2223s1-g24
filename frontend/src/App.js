import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import CodingPage from "views/CodingPage/CodingPage";
import { CookiesProvider } from "react-cookie";
import { io } from "socket.io-client";
import { useEffect } from "react";

function App() {
  // Placeholder for socket io connection and examples below:
  // TODO: to create socket instance when matchmaking
  useEffect(() => {
    var socket = io("http://localhost:8001");
    socket.connect();

    socket.on("MATCHED", (roomID) => {
      console.log("MATCHED with room ID: " + roomID);
      socket.emit("JOIN_ROOM", roomID);
    });

    const joinQueue = (difficulty) => {
      socket.emit("JOIN_QUEUE", difficulty)
    }
    // Just for testing for now
    joinQueue("easy");
  },[])
  

  // const leaveQueue = () => {
  //   socket.emit("LEAVE_QUEUE");
  // };

  
  return (
    <CookiesProvider>
      <div className="App">
        <Box>
          <Router>
            <Routes>
              <Route exact path="*" element={<HomePage />}></Route>
              <Route path="/signup/*" element={<SignupPage />} />
              <Route path="/dashboard/*" element={<DashboardPage />} />
              <Route path="/signin/*" element={<SigninPage />} />
              <Route path="/coding/*" element={<CodingPage />} />
            </Routes>
          </Router>
        </Box>
      </div>
    </CookiesProvider>
  );
}

export default App;
