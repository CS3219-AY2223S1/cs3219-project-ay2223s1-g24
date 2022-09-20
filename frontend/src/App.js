import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import CodingPage from "views/CodingPage/CodingPage";
import { CookiesProvider } from "react-cookie";
import { io } from "socket.io-client";

function App() {
  // Placeholder for socket io connection and examples below:
  // TODO: to create socket instance when matchmaking
  // var socket = io("http://localhost:8001");
  // socket.connect();

  socket.on("MATCHED", () => {
    console.log("MATCHED");
  });

  const joinQueue = (difficulty) => {
    socket.emit("JOIN_QUEUE", difficulty)
  }

  const leaveQueue = () => {
    socket.emit("LEAVE_QUEUE");
  };

  joinQueue("easy");
  
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
