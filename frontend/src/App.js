import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import { CookiesProvider } from "react-cookie";
import CodingPageEasy from "views/CodingPage/CodingPageEasy";
import CodingPageMedium from "views/CodingPage/CodingPageMedium";
import CodingPageHard from "views/CodingPage/CodingPageHard";

function App() {
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
              <Route path="/coding/easy/*" element={<CodingPageEasy />} />
              <Route path="/coding/medium/*" element={<CodingPageMedium />} />
              <Route path="/coding/hard/*" element={<CodingPageHard />} />
            </Routes>
          </Router>
        </Box>
      </div>
    </CookiesProvider>
  );
}

export default App;
