import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignupPage from "./views/SignupPage/SignupPage";
import HomePage from "./views/HomePage/HomePage";
import { Box } from "@mui/material";
import DashboardPage from "views/DashboardPage/DashboardPage";
import SigninPage from "views/SigninPage/SigninPage";
import { CookiesProvider } from "react-cookie";
import { RouterGuard } from "react-router-guard";
import routeGuardConfig from "./routeGuardConfig";

import CodingPage from "views/CodingPage/CodingPage";
// import { PersistGate } from "redux-persist/integration/react";
// import { persistor } from "./store/store";
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
                {/* <Route path="/coding/*" element={<CodingPage />} /> */}
              </Routes>
            </Router>
            <RouterGuard config={routeGuardConfig} />
          </Box>
        </Provider>
      </div>
    </CookiesProvider>
  );
}

export default App;
