import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import SigninPage from "views/SigninPage/SigninPage";
import DashboardPage from "views/DashboardPage/DashboardPage";
import MainPage from "views/DashboardPage/MainPage";

function App() {
  return (
    <div className="App">
      <Box>
        <Router>
          <Routes>
            <Route exact path="*" element={<HomePage />}></Route>
            <Route path="/signup/*" element={<SignupPage />} />
            <Route path="/signin/*" element={<SigninPage />} />
            <Route path="/dashboard/*" element={<DashboardPage />} />
            <Route path="/main/*" element={<MainPage />} />
          </Routes>
        </Router>
      </Box>
    </div>
  );
}

export default App;
