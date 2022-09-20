import axios from "axios";
import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import useAuth from "../../../hook/useAuth";

const ConfirmOTP = () => {
  const [error,setError]=useState('')
  const [success,setSuccess]=useState('')
  const { URl } = useAuth();
  let { email } = useParams();

  axios(`${URl}/auth/phoneotp/${email}/`,)
    .then(function (response) {
      // console.log(response);
      if (response.data.OTP) {
        console.log(response.data.OTP)
      }
    })
    .catch(function (error) {
      // console.log(error.response.data.error );
      // console.log(error);
      if (error.response.data.error) {
       
      }
    });

    const handlerToSubmit=(e)=>{
      e.preventDefault();
      if(e.target.password1.value===e.target.password2.value){
        console.log(e.target.password1.value,e.target.password2.value)
          if(e.target.password1.value.length>=8){
            const formData = {
              email:email,
              phoneOTP:e.target.otp.value,
              password:e.target.password1.value,
            }
            console.log("formData",formData)
            axios
            .post(`${URl}/auth/phoneotp/`, formData)
            .then(function (response) {
              console.log(response)
              if (response.data.msg){
                setError("")
                setSuccess("password created successfully");
              }
            })
            .catch(function (error) {
              // console.log(error.response.data.error );
              // console.log(error);
              if (error.response.data.error){
                setError(error.response.data.error);
                setSuccess("")
              }
              
            });
          }
          else{
            setError("password must be 8 character")
            }
      }
      else{
        setError("password didn't march")
      }
    }

console.log(error)
  return (
    <div class="container my-5">
      <div class="login-signup-cards">
        <div class="signup-card">
          <div class="signup-card-items">
            <h1 class="signup-tag">Confirm OTP & Set Password</h1>

            <form onSubmit={handlerToSubmit} class="form-items">
              <input class="email-item" name="otp" type="number" placeholder="OTP" required/>

              <input
                class="password-item"
                name="password1"
                type="password"
                placeholder="Password"
                required
              />
              <input
                class="password-item"
                type="password"
                name="password2"
                placeholder="Confirm Password"
                required
              />

              <button class="button-item" type="submit">
                Set Password
              </button>
              {error ? <p>{error}</p> : ""}
          { success?
                <div class="have-account-item">
                  <p>{success}</p>
                <Link to="/login">
                  Go TO Login? <span>Log In</span>
                </Link>
              </div>:""
          }
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmOTP;
