import React, { useState } from 'react';
import '../styles/CreateActivity.css';

const Activity = (props) => {
    const [focus, setFocus] = useState(false);
    const { label, onChange, id, type, accept, ...inputProps } = props;

    const handleFocus = () => setFocus(true);
    const handleBlur = () => setFocus(false);

    return (
        <div className="Activity-container">
            <label htmlFor={id}>{label}</label>
            {type === "textarea" ? (
                <textarea
                    {...inputProps}
                    onChange={onChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    focus={focus.toString()}
                />
            ) : (
                <input
                    {...inputProps}
                    type={type}
                    accept={type === "file" ? accept : undefined} // ✅ Pass `accept` only for file inputs
                    onChange={onChange}
                    onBlur={handleBlur}
                    onFocus={handleFocus}
                    focus={focus.toString()}
                />
            )}
        </div>
    );
};

export default Activity;
