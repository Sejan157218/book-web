import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../../hook/useAuth";
import "./login.css";

const Login = () => {
  const [error, setError] = useState("");
  const { URl,handlerToSetUser } = useAuth();
  let navigate = useNavigate();


  const handlerToSubmit = (e) => {
    e.preventDefault();
    const fromData = {
      email: e.target.email.value,
      password: e.target.password.value,
    };
    console.log(fromData);
    axios
      .post(`${URl}/auth/login/`, fromData)
      .then(function (response) {
        console.log(response);
        if (response.data.payload) {
          handlerToSetUser(response.data.payload)
          setError("user Login successfully");
          navigate(`/`)
        }
      })
      .catch(function (error) {
        // console.log(error.response.data.error );
        // console.log(error.response.data.email);
        // console.log(error);
        if (error.response.data.error) {
          setError(error.response.data.error); 
        } 
      });
  };

  return (
    <div class="container my-5">
      <div class="login-signup-cards">
        <div class="login-card">
          <div class="login-card-items">
            <h1 class="login-tag">Log In</h1>

            <form onSubmit={handlerToSubmit} class="form-items">
              <input
                class="email-item"
                name="email"
                type="email"
                placeholder="E-Mail"
              />

              <div class="password-item">
                <input type="password" name="password" placeholder="Password" />

                <div class="forgot-password-item">
                  <Link to="/sentotp">Forgot password?</Link>
                </div>
              </div>

              <input class="button-item" type="submit" value="Submit" />

              <div class="create-account-item">
                <Link to="/signup">
                  Don't have an account? <span>Sign Up</span>
                </Link>
                {error ? <p>{error}</p> : ""}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
