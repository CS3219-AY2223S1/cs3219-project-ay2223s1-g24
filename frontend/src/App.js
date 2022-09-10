import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import MainPage from "views/DashboardPage/MainPage";
import { io } from "socket.io-client";

function App() {
  // Placeholder for socket io connection and examples below:
  // TODO: to create socket instance when matchmaking
  var socket = io("http://localhost:8001");
  socket.connect();

  socket.on("matched", () => {
    console.log("MATCHED");
  })

  const leaveQueue = () => {
    socket.emit("leaveQueue");
  }
  return (
    <div className="App">
      <button onClick={leaveQueue}>HIHIHI</button>
      <Box>
        <Router>
          <Routes>
            <Route exact path="*" element={<HomePage />}></Route>
            <Route path="/signup/*" element={<SignupPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/signin/*" element={<SigninPage />} />
            <Route path="/main/*" element={<MainPage />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
