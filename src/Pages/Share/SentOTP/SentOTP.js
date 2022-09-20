import axios from "axios";
import React, { useState } from "react";
import { useNavigate} from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const SentOTP = () => {
  let navigate = useNavigate();
  const { URl, setSentOtpUser } = useAuth();
  const [error, setError] = useState("");


  const handlerToSubmit = (e) => {
    e.preventDefault();
    const phoneData = {
      email:e.target.email.value,
      phone:e.target.phone.value
    }
    if (phoneData) {
      axios
        .put(`${URl}/auth/phoneotp/`,phoneData)
        .then(function (response) {
          // console.log(response);
          if (response.data.msg) {
            setError("user created successfully");
            setSentOtpUser(phoneData)
            navigate(`/confirmotp/${e.target.email.value}`)
          }
        })
        .catch(function (error) {
          // console.log(error.response.data.error );
          // console.log(error);
          if (error.response.data.error) {
            setError(error.response.data.error);
          } 
        });

      setError("");
    } else {
      setError("password didn't march");
    }
  };
  return (
    <div class="container my-5">
      <div class="login-signup-cards">
        <div class="signup-card">
          <div class="signup-card-items">
            <h1 class="signup-tag">Give Your Phone Number</h1>

            <form onSubmit={handlerToSubmit} class="form-items">
            <input
                class="email-item"
                name="email"
                type="email"
                placeholder="Email"
                required
              />
              <input
                class="email-item"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                required
              />
              <button class="button-item" type="submit">
                {/* <Link to="/confirmotp">confirmotp</Link> */}
                Send OTP
              </button>
              {error ? <p>{error}</p> : ""}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentOTP;
