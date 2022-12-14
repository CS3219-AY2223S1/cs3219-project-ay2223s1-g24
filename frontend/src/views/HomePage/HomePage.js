import React from "react";
import { Alert } from "@mui/material";
import "./homepage.scss";
import Navbar from "components/Navbar/Navbar";
import Button from "components/Button/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "views/SignupPage/SignupPage";
import { useCookies } from "react-cookie";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setRoom } from "slices/roomSlice";
import { resetVerification, useVerification } from "slices/verificationSlice";
import Transition from "utils/Transition";

function HomePage() {
  const [cookies] = useCookies(["name", "email", "jwtToken"]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const navigateSignup = () => {
    navigate("/signup");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  function loadRoom() {
    dispatch(
      setRoom({
        roomID: cookies.roomID,
        firstQuestionHash: cookies.firstQuestionHash,
        secondQuestionHash: cookies.secondQuestionHash,
        difficulty: cookies.difficulty,
      })
    );
    navigate(`/coding/${cookies.roomID}`);
  }
  const verificationStatus = useVerification();

  useEffect(() => {
    if (cookies.roomId && cookies.roomID !== "") {
      loadRoom();
    } else if (cookies.jwtToken) {
      navigateToDashboard();
    }

    setTimeout(() => dispatch(resetVerification()), 4000);
  });

  return (
    <Transition
      timeout={2000}
      children={
        <div className="homepage">
          <div>
            <Navbar />
          </div>
          <div className="main-body">
            <div
              className={`msg ${verificationStatus === "ERROR" ? "hide" : ""}`}
            >
              <Alert severity="error">
                <strong>Verification link is invalid or has expired.</strong>
              </Alert>
            </div>
            <div
              className={`msg ${
                verificationStatus === "SUCCESS" ? "hide" : ""
              }`}
            >
              <Alert severity="success">
                <strong>Account has been successfully verified.</strong>
              </Alert>
            </div>
            <div className="tagline">
              {" "}
              <span>Collaborate </span> and <span>Visualize</span> coding
              together{" "}
            </div>
            <div className="description">
              PeerPrep is a platform for individuals to collaborate and code
              together in real-time to prepare for technical interviews. We
              cater for users of all levels through providing difficulties from
              easy to hard and allow for matching between users of similar
              experience.
            </div>
            <div className="signup-btn">
              <Button onClick={navigateSignup} text={"Sign Up Here"} />
              <Routes>
                <Route path="/signup/*" element={<SignupPage />} />
              </Routes>
            </div>
          </div>
        </div>
      }
    />
  );
}

export default HomePage;
