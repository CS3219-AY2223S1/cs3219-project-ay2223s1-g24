import React from "react";
import "./homepage.scss";
import Navbar from "components/Navbar/Navbar";
import Button from "components/Button/Button";
import { Routes, Route, useNavigate } from "react-router-dom";
import SignupPage from "views/SignupPage/SignupPage";

function HomePage() {
  const navigate = useNavigate();
  const navigateSignup = () => {
    navigate("/signup");
  };

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
            <Route path="/signup" element={<SignupPage />} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
