import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import { CookiesProvider } from "react-cookie";

import CodingPage from "views/CodingPage/CodingPage";
import EmailVerify from "./components/EmailVerify/EmailVerify";
import store from "./store/store";
import { Provider } from "react-redux";
import { useCookies } from "react-cookie";

function App() {

  const [cookies, setCookie] = useCookies([
    "name",
    "email",
    "jwtToken",
    "roomID",
    "firstQuestionHash",
    "secondQuestionHash",
    "difficulty",
  ]);

  return (
    <CookiesProvider>
      <div className="App">
        <Provider store={store}>
          <Box>
            <Router>
              <Routes>
                <Route exact path="*" element={<HomePage />}></Route>
                <Route path="/signup/*" element={<SignupPage />} />
                <Route path="/dashboard/*" element={<DashboardPage />} />
                <Route path="/signin/*" element={<SigninPage />} />
                <Route path="/coding/*" element={<CodingPage />} />
                <Route
                  path="/users/:id/verify/:token"
                  element={<EmailVerify />}
                />
                <Route path="/coding/*" element={cookies.roomID !== "" ? <CodingPage /> : <Navigate to='/dashboard'/>} />
              </Routes>
            </Router>
          </Box>
        </Provider>
      </div>
    </CookiesProvider>
  );
}

export default App;
