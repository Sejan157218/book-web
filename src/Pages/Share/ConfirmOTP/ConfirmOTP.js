import React from 'react';
import { Link } from 'react-router-dom';

const ConfirmOTP = () => {
    return (
        <div class="container my-5">
        <div class="login-signup-cards">
          <div class="signup-card">
            <div class="signup-card-items">
              <h1 class="signup-tag">Confirm OTP & Set Password</h1>
  
              <form class="form-items">
                <input class="email-item" type="number" placeholder="OTP" />
  
                <input
                  class="password-item"
                  type="password"
                  placeholder="Password"
                />
                     <input
                  class="password-item"
                  type="password"
                  placeholder="Confirm Password"
                />
  
                <button class="button-item" type="button">
                  Set Password
                </button>
  
                <div class="have-account-item">
                  <Link to="/login">
                    Have already an account? <span>Log In</span>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ConfirmOTP;