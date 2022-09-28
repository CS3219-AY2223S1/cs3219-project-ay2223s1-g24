import React from "react";
import "./homepage.scss";
import Navbar from "components/Navbar/Navbar";
import Button from "components/Button/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "views/SignupPage/SignupPage";
import { useCookies } from "react-cookie";
import { useEffect } from "react";

function HomePage() {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };

  const navigateToDashboard = () => {
    navigate("/dashboard");
  };

  const [cookies] = useCookies(["name", "email", "jwtToken"]);

  useEffect(() => {
    if (cookies.roomID !== null && cookies.roomID !== '') {
      navigate(`/coding/${cookies.roomID}`);
    }
    else if (cookies.jwtToken) {
      navigateToDashboard();
    }
  });

  return (
    <div className="homepage">
      <div>
        <Navbar />
      </div>
      <div className="main-body">
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
