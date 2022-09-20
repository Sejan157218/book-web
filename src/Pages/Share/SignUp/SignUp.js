import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import useAuth from "../../../hook/useAuth";

const SignUp = () => {
  const [error, setError] = useState("");
  const { URl,handlerToSetUser } = useAuth();
  const handlerToSubmit = (e) => {
    e.preventDefault();

    const fromData = {
      username: e.target.username.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      password: e.target.password1.value,
    };
    if (e.target.password1.value == e.target.password2.value) {
      axios
        .post(`${URl}/auth/signup/`, fromData)
        .then(function (response) {
          console.log(response)
          if (response.data.msg){
            handlerToSetUser(response.data.payload)
            setError("user created successfully");
          }
        })
        .catch(function (error) {
          // console.log(error.response.data.error );
          // console.log(error);
          if (error.response.data.error){
            setError(error.response.data.error[0]);
          }
          else if(error.response.data.username){
            setError(error.response.data.username[0]);
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
            <h1 class="signup-tag">Sign Up</h1>

            <form onSubmit={handlerToSubmit} class="form-items">
              <input
                class="email-item"
                name="username"
                type="text"
                placeholder="User Name"
              />
              <input
                class="email-item"
                name="email"
                type="email"
                placeholder="E-Mail"
              />
              <input
                class="email-item"
                name="phone"
                type="tel"
                placeholder="Phone Number"
              />

              <input
                class="password-item"
                type="password"
                placeholder="Password"
                name="password1"
              />
              <input
                class="password-item"
                type="password"
                placeholder="Confirm Password"
                name="password2"
              />

              <input class="button-item" type="submit" value="Submit" />

              <div class="have-account-item">
                <Link to="/login">
                  Have already an account? <span>Log In</span>
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

export default SignUp;
