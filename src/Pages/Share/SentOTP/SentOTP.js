import React from "react";
import { Link } from "react-router-dom";

const SentOTP = () => {
  return (
    <div class="container my-5">
      <div class="login-signup-cards">
        <div class="signup-card">
          <div class="signup-card-items">
            <h1 class="signup-tag">Give Your Phone Number</h1>

            <form class="form-items">
              <input class="email-item" type="tel" placeholder="Phone Number" />
              <button class="button-item" type="button">
                <Link to="/confirmotp">confirmotp</Link>
                Send OTP
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SentOTP;
