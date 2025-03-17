import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="signup-image">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_640.jpg"
            alt=""
          />
        </div>
        <div className="signup-details-container">
          <form action="">
            <h3>Register</h3>
            
           
            
            <div className="signup-input">

            <div className="name-input">
              <label htmlFor="name">User name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name here"
              />
            </div>

              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email here"
              />
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
            </div>

            <button className="signup-btn">Sign up</button>
            <div className="login-link-container">
              <p className="login-link">
                Already have an account{" "}
                <Link to="/login">
                  <span>Login</span>
                </Link >
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
