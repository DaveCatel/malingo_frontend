import React, { useState } from "react";
import LoginInput from "../components/LoginInput";
import '../styles/Login.css';
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [values, setValues] = useState({
        email: "",
        password: ""
    });
    const navigate = useNavigate();
    const inputs = [
        {
            id: 1,
            name: "email",
            type: "email",
            placeholder: "Email",
            label: "Email",
            required: true,
            errorMessage: "Email is required"
        },
        {
            id: 2,
            name: "password",
            type: "password",
            placeholder: "Password",
            label: "Password",
            required: true,
            errorMessage: "Password is required"
        }
    ];

    const handleSubmit = (e) => {
        e.preventDefault();

        // Validate inputs before submitting
        for (const key in values) {
            if (!values[key] && inputs.find((input) => input.name === key)?.required) {
                alert(`${key} is required`);
                return;
            }
        }
        navigate("/home");
        console.log("Login successful with:", values);
    };

    const onChange = (e) => {
        setValues({ ...values, [e.target.name]: e.target.value });
    };

    return (
        <div className="form-container">
            <h2 className="login">Login</h2>
            <form onSubmit={handleSubmit}>
                {inputs.map((input) => (
                    <LoginInput
                        key={input.id}
                        {...input}
                        value={values[input.name]}
                        onChange={onChange}
                    />
                ))}
                <div className="button-container">
                    <button type="submit" className="btn">
                        Login
                    </button>
                </div>
            </form>
            <p className="signup-prompt">
                Don't have an account? 
                <Link to="/signup" className="signup-link"> Sign up here</Link>
            </p>
        </div>
    );
};

export default Login;