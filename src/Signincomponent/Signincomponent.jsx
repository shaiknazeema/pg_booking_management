import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Signincomponent.css";

const Signincomponent = ({ onRegister }) => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    password: "",
    repeatPassword: "",
    terms: false,
  });

  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.username.trim()) {
      formErrors.username = "Username is required.";
    } else if (formData.username.trim().length <= 6) {
      formErrors.username = "Username must be greater than 6 characters.";
    }

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Valid email is required.";
    }

    if (!formData.phone_number.trim() || !/^\d{10}$/.test(formData.phone_number)) {
      formErrors.phone_number = "Valid 10-digit phone number is required.";
    }

    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (formData.password.trim().length <= 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    if (formData.password !== formData.repeatPassword) {
      formErrors.repeatPassword = "Passwords do not match.";
    }

    if (!formData.terms) {
      formErrors.terms = "You must accept the terms.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
         await axios.post("http://localhost:3001/main", formData);
       
        navigate('/login')
        setFormData({
          username: "",
          email: "",
          phone_number: "",
          password: "",
          repeatPassword: "",
          terms: false,
        });
        onRegister();
        // navigate('/login')
        
        // onRegister(response.data);
      } catch (error) {
        console.error("Error submitting form:", error);
      }
    }
  };

  return (
    <div className="signin-container" style={{ border: "2px solid rgb(74, 131, 192)" }}>
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/sign-concept-illustration_114360-5425.jpg"
          alt="Sign In"
        />
      </div>
      <form className="register-form" onSubmit={handleSubmit} style={{ border: "none" }}>
        <h2 className="h111">Register</h2>
        <div>
          <label>
            Username
            <input
              type="text"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
          </label>
          {errors.username && <p className="error">{errors.username}</p>}
        </div>
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>
            Phone Number
            <input
              type="text"
              name="phone_number"
              value={formData.phone_number}
              onChange={handleChange}
            />
          </label>
          {errors.phone_number && <p className="error">{errors.phone_number}</p>}
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <label>
            Repeat Password
            <input
              type="password"
              name="repeatPassword"
              value={formData.repeatPassword}
              onChange={handleChange}
            />
          </label>
          {errors.repeatPassword && <p className="error">{errors.repeatPassword}</p>}
        </div>
        <div className="terms">
          <label>
            <input
              type="checkbox"
              name="terms"
              checked={formData.terms}
              onChange={handleChange}
            />
            Please accept our <a href="./terms" style={{ color: "#0056b3" }}>Terms & Conditions</a>.
          </label>
          {errors.terms && <p className="error">{errors.terms}</p>}
        </div>
        <p className="999" style={{ fontFamily: "cursive" }}>
          If you already have an account? <a href="./login" style={{ fontFamily: "cursive" }}>Login</a>
        </p>
        <button type="submit">Register Now</button>
      </form>
    </div>
  );
};

export default Signincomponent;
