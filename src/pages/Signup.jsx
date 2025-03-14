import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SignUpInput from '../components/SignUp'; // Make sure this path is correct
import '../styles/SignUp.css';

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    firstName: "",
    email: "",
    dateOfBirth: "",
    password: "",
    confirmPassword: ""
  });

  const inputs = [
    { id: 1, name: "firstName", type: "text", placeholder: "User Name", label: "User Name", required: true },
    { id: 2, name: "email", type: "email", placeholder: "Email", label: "Email", required: true },
    { id: 3, name: "dateOfBirth", type: "date", placeholder: "Date of Birth", label: "Date of Birth", required: true },
    { id: 4, name: "password", type: "password", placeholder: "Password", label: "Password", required: true },
    { id: 5, name: "confirmPassword", type: "password", placeholder: "Confirm Password", label: "Confirm Password", required: true }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Check if passwords match
    if (values.password !== values.confirmPassword) {
      alert("Passwords do not match!");
      return;
    }
    
    // Validate required fields
    for (const key in values) {
      if (!values[key] && inputs.find(input => input.name === key)?.required) {
        alert(`${key} is required.`);
        return;
      }
    }

    console.log("Signup Successful:", values);
    navigate('/home');
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <div className="app">
      <form onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        {inputs.map((input) => (
          <SignUpInput 
            key={input.id} 
            {...input} 
            value={values[input.name]} 
            onChange={onChange} 
            errorMessage={`${input.label} is required`} // Add an error message
          />
        ))}
        <div className="button-container">
          <button type="submit" className="btn">Sign Up</button>
        </div>
      </form>  
    </div>
  );
};

export default Signup;
