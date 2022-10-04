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
import { useDispatch } from "react-redux";

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
    if (cookies.roomId && cookies.roomID !== '') {
      loadRoom();
    }
    else if (cookies.jwtToken) {
      navigateToDashboard();
    }

    setTimeout(() => dispatch(resetVerification()), 4000);
  });

  return (
    <div className="homepage">
      <div>
        <Navbar />
      </div>
      <div className="main-body">
        <div className={`msg ${verificationStatus === "ERROR" ? "hide" : ""}`}>
          <Alert severity="error">
            <strong>Verification link is invalid or has expired.</strong>
          </Alert>
        </div>
        <div
          className={`msg ${verificationStatus === "SUCCESS" ? "hide" : ""}`}
        >
          <Alert severity="success">
            <strong>Account has been successfully verified.</strong>
          </Alert>
        </div>
        <div className="tagline">
          {" "}
          <span>Organize </span> and <span>Visualize</span> coding practice{" "}
        </div>
        <div className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pretium
          volutpat nunc sagittis ultrices. Donec vitae gravida felis, id
          vestibulum velit. Nam imperdiet convallis commodo. Sed convallis
          tempus lorem sed cursus. Nulla varius, dui vel accumsan dictum, velit
          nunc condimentum enim, ac pretium augue est fringilla neque.
        </div>
        <div className="signup-btn">
          <Button onClick={navigateSignup} text={"Sign Up Here"} />
          <Routes>
            <Route path="/signup/*" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
