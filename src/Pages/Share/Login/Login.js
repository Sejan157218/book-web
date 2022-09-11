import React from "react";
import { Link } from "react-router-dom";
import "./login.css";

const Login = () => {
  return (
    <div class="container my-5">
      <div class="login-signup-cards">
        <div class="login-card">
          <div class="login-card-items">
            <h1 class="login-tag">Log In</h1>

            <form class="form-items">
              <input class="email-item" type="email" placeholder="E-Mail" />

              <div class="password-item">
                <input type="password" placeholder="Password" />

                <div class="forgot-password-item">
                  <Link to="/sentotp">Forgot password?</Link>
                </div>
              </div>

              <button class="button-item" type="button">
                Log In
              </button>

              <div class="create-account-item">
                <Link to="/signup">
                  Don't have an account? <span>Sign Up</span>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
