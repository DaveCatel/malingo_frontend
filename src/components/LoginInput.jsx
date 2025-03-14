import React, { useState } from "react";
import '../styles/Login.css'

const LoginInput = ({ label, onChange, errorMessage, id, required, ...inputProps }) => {
    const [focused, setFocused] = useState(false);

    return (
        <div className="form-container">
            <label htmlFor={id} className="block font-medium">{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={() => setFocused(true)}
                focused={focused.toString()}
                required={required}
            />
            {focused && errorMessage && <span className="text-red-500">{errorMessage}</span>}
        </div>
    );
};

export default LoginInput;
