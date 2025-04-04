import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./Login.css";
import useApi from "../../useApi";

const Login = () => {
  const navigate = useNavigate();
  
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  
  const [message, setMessage] = useState("");

  const { request, loading, error } = useApi(
    "https://rrn24.techchantier.site/malingo/public/api/login", "POST", null, {}, false,
  );

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("")

    if (!formData.email || !formData.password) {
      setMessage(" Please fill in both fields");
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setMessage(" Please enter a valid email");
      return;
    }

    const response = await request("POST", formData, {
      "Content-Type": "application/json",
      "Accept": "application/json",
    });

    if (response && response.token) {

      localStorage.setItem("token", response.token);

      setMessage(" Login successful!");

   
      setTimeout(() => {
        navigate("/");
      }, 1000);
    } else {
      setMessage(" Login failed! Check your email and password.");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <div className="loginImage">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_640.jpg"
            alt="Login Illustration"
          />
        </div>
        <div className="login-details-container">
          <form onSubmit={handleSubmit}>
            <h3>Login to your account</h3>
            {error && <p style={{ color: "red" }}>Error: {error}</p>}
            <div className="login-input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email here"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="login-input">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Enter your password here"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>

            <button className="login-btn" type="submit" disabled={loading}>
              {loading ? "Logging in..." : "Login"}
            </button>

            <div className="signup-link-container">
              <p className="signup-link">
                Don't have an account?{" "}
                <Link to="/signup">
                  <span>Sign up</span>
                </Link>
              </p>
            </div>

            {message && <p className="error-message">{message}</p>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
