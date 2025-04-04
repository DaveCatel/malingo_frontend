import React, { useState } from "react";
import "./SignUpInput.css";
import { FaEye } from "react-icons/fa";
import { RxEyeClosed } from "react-icons/rx";

const SignupInput = ({ formData, onInputChange }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [touched, setTouched] = useState({
    name: false,
    email: false,
    password: false,
    password_confirmation: false,
  });
  const [errors, setErrors] = useState({
    name: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  const weakPassWords = [
    "password", "12345678", "123456789", "qwerty123", "password1", 
    "letmein00", "welcome", "123123123", "11111111", "iloveyou", 
    "football", "sunshine"
  ];

  const checkPasswordStrength = (password) => {
    if (weakPassWords.includes(password.toLowerCase())) {
      return { level: "weak", color: "red", message: "⚠️ Password too weak, try another!" };
    }

    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[a-z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;

    if (strength <= 2) return { level: "weak", color: "red", message: "⚠️ Weak: Use more characters and mix cases." };
    if (strength === 3) return { level: "medium", color: "orange", message: "⚠️ Medium: Add special characters & numbers." };
    return { level: "strong", color: "green", message: "✅ Strong: Good password!" };
  };

  const validateInput = (name, value) => {
    let errorMsg = "";

    if (name === "name") {
      if (value.length < 3) errorMsg = "⚠️ Name must be at least 3 characters.";
      else if (!/^[a-zA-Z\s]+$/.test(value)) errorMsg = "⚠️ Name should contain only letters and spaces.";
    }

    if (name === "email") {
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailPattern.test(value)) errorMsg = "⚠️ Enter a valid email address.";
    }

    if (name === "password") {
      errorMsg = checkPasswordStrength(value).message;
    }

    if (name === "password_confirmation") {
      errorMsg = value !== formData.password ? "⚠️ Passwords do not match!" : "";
    }

    setErrors((prevErrors) => ({ ...prevErrors, [name]: errorMsg }));
  };

  const passwordStrength = checkPasswordStrength(formData.password);

  const handleBlur = (e) => {
    const { name, value } = e.target;
    setTouched((prevTouched) => ({ ...prevTouched, [name]: true }));
    validateInput(name, value);
  };

  return (
    <div className="signup-input-container">
      <label htmlFor="name">User Name</label>
      <input
        type="text"
        name="name"
        placeholder="Enter your name here"
        value={formData.name}
        onChange={(e) => onInputChange(e)}
        onBlur={handleBlur}
        required
      />
      {touched.name && errors.name && <p className="error-message">{errors.name}</p>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        name="email"
        placeholder="Enter your email here"
        value={formData.email}
        onChange={(e) => onInputChange(e)}
        onBlur={handleBlur}
        required
      />
      {touched.email && errors.email && <p className="error-message">{errors.email}</p>}

      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password"
        placeholder="Enter your password"
        value={formData.password}
        onChange={(e) => onInputChange(e)}
        onBlur={handleBlur}
        required
      />
      {touched.password && <p style={{ color: passwordStrength.color }}>{passwordStrength.message}</p>}
      {touched.password && (
        <div className="password-strength-bar">
          <div
            style={{
              width: passwordStrength.level === "weak" ? "33%" : passwordStrength.level === "medium" ? "66%" : "100%",
              backgroundColor: passwordStrength.color,
              height: "5px",
              borderRadius: "3px",
            }}
          ></div>
        </div>
      )}

      <label htmlFor="password_confirmation">Confirm Password</label>
      <input
        type={showPassword ? "text" : "password"}
        name="password_confirmation"
        placeholder="Confirm your password"
        value={formData.password_confirmation}
        onChange={(e) => onInputChange(e)}
        onBlur={handleBlur}
        required
      />
      {touched.password_confirmation && errors.password_confirmation && <p className="error-message">{errors.password_confirmation}</p>}

      <button
        type="button"
        className="toggle-btn"
        onClick={() => setShowPassword(!showPassword)}
      >
        {showPassword ? <RxEyeClosed /> : <FaEye />}
      </button>
    </div>
  );
};

export default SignupInput;
