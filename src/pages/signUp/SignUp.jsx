import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signUp-container">
      <div className="signUp">
        <div className="signUp-image">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_640.jpg"
            alt=""
          />
        </div>
        <div className="signUpDetails-container">
          <form action="">
            <h3>Register to Experience Companionship</h3>
            
            <div className="name-input">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here"
              />
            </div>
            
            <div className="signUp-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
              />
            </div>
            <div className="password-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password here"
              />
            </div>

            <div className="password-input">
              <label htmlFor="password">Confirm Password</label>
              <input
                type="password"
                id="pwd"
                placeholder="Confirm password here"
              />
            </div>

            <button className="register-btn">sign up</button>
            <div className="loginlink-container">
              <p className="login-link">
                Already have an account{" "}
                <Link>
                  <span>Login</span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
