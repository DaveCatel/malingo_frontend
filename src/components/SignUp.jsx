import { useState } from "react";
import "../styles/SignUp.css";

const SignUpInput = ({ label, onChange, errorMessage, id, required, ...inputProps }) => {
    const [focused, setFocused] = useState(false);

    const handleBlur = () => {
        setFocused(true);
    };

    const handleFocus = () => {
        setFocused(false);
    };

    return (
        <div className="formInput">
            <label htmlFor={id}>{label}</label>
            <input
                {...inputProps}
                onChange={onChange}
                onBlur={handleBlur}
                onFocus={handleFocus}
                focused={focused.toString()}
                aria-invalid={!!errorMessage}
                aria-describedby={`${id}-error`}
            />
            <span id={`${id}-error`} className="error-message">
                {focused && errorMessage}
            </span>
        </div>
    );
};

export default SignUpInput;
