import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-container">
      <div className="login">
        <div className="loginImage">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_640.jpg"
            alt=""
          />
        </div>
        <div className="login-details-container">
          <form action="">
            <h3>Login to your account</h3>
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
              />
            </div>
            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                placeholder="Enter your password here"
              />
            </div>
            <button className="login-btn">Login</button>
            <div className="signup-link-container">
              <p className="signup-link">
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

export default Login;
