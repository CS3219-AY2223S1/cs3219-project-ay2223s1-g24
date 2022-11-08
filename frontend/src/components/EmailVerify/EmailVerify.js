import { useEffect } from "react";
import { Alert, CircularProgress } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Fragment } from "react/cjs/react.production.min";
import { USER_SERVICE_API_ENDPOINT } from "configs";
import { useDispatch } from "react-redux";
import { setVerification } from "slices/verificationSlice";
import "./emailVerification.scss";

const EmailVerify = () => {
  const dispatch = useDispatch();
  const param = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const verifyEmailUrl = async () => {
      try {
        const url = `${USER_SERVICE_API_ENDPOINT}${param.id}/verify/${param.token}`;
        const { data } = await axios.get(url);
        console.log(data);
        setTimeout(() => {
          navigate("/");
          dispatch(setVerification("SUCCESS"));
        }, 2000);
      } catch (error) {
        setTimeout(() => {
          navigate("/");
          dispatch(setVerification("ERROR"));
        }, 2000);
      }
    };
    verifyEmailUrl();
    // eslint-disable-next-line
  }, [param]);

  return (
    <Fragment>
      <div className="verification-container">
        <Alert
          severity="info"
          sx={{ mt: "10px", fontSize: "12px", display: "flex" }}
        >
          Verification in progress
          <CircularProgress color="inherit" size="10px" sx={{ ml: "7px" }} />
        </Alert>
      </div>
    </Fragment>
  );
};

export default EmailVerify;
