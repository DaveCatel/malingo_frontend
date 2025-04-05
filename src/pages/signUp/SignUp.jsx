import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import "./SignUp.css";
import SignupInput from "../../components/formvalidation/SignupInput";
import useApi from "../../useApi";

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });
  
  const { request, loading, error } = useApi(
    "https://rrn24.techchantier.site/malingo/public/api/register", 
    "POST", 
    null, 
    {}, 
    false
  );
  
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // "error" or "success"
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Validate fields before making request
    if (!formData.name || !formData.email || !formData.password || !formData.password_confirmation) {
      setMessage("⚠️ All fields are required!");
      setMessageType("error");
      return;
    }
    
    if (formData.password !== formData.password_confirmation) {
      setMessage("⚠️ Passwords do not match!");
      setMessageType("error");
      return;
    }
    
    // Send JSON instead of FormData
    const submissionData = {
      name: formData.name,
      email: formData.email,
      password: formData.password,
      password_confirmation: formData.password_confirmation,
    };
    
    const response = await request("POST", submissionData, {
      headers: { "Content-Type": "application/json" },
    });
    
    if (!error) {
      setMessage("✅ Successfully registered!");
      setMessageType("success");
      setTimeout(() => {
        navigate("/");
      }, 1500);
    }
  };
  
  return (
    <div className="signup-container">
      <div className="signup">
        <div className="signup-image">
          <img
            src="https://cdn.pixabay.com/photo/2021/11/22/20/32/nature-6817376_640.jpg"
            alt="Sign up"
          />
        </div>
        <div className="signup-details-container">
          <h3>Create Account</h3>
          
          <form onSubmit={handleSubmit}>
            <SignupInput formData={formData} onInputChange={handleChange} />
            
            <button type="submit" disabled={loading} className="signup-btn">
              {loading ? "Processing..." : "Sign Up"}
            </button>
            
            {message && (
              <div className={`message-container message-${messageType}`}>
                {message}
              </div>
            )}
            
            <div className="login-link-container">
              <p className="login-link">
                Already have an account?{" "}
                <Link to="/login">
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