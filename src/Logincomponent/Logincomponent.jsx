import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"; 
import "./Logincomponent.css";

const Logincomponent = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [loginError, setLoginError] = useState("");
  const navigate = useNavigate(); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validate = () => {
    let formErrors = {};

    if (!formData.email.trim() || !/\S+@\S+\.\S+/.test(formData.email)) {
      formErrors.email = "Valid email is required.";
    }

    if (!formData.password) {
      formErrors.password = "Password is required.";
    } else if (formData.password.trim().length < 6) {
      formErrors.password = "Password must be at least 6 characters.";
    }

    setErrors(formErrors);
    return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.post("http://localhost:3001/login", {
          email: formData.email,
          password: formData.password,
        });

     
        localStorage.setItem("user", JSON.stringify(response.data.user));
        setLoginError("");
       
        navigate("/home"); 
      } catch (error) {
        if (error.response && error.response.status === 401) {
          setLoginError("Invalid email or password. Please try again.");
        } else {
          setLoginError("An error occurred during login. Please try again later.");
          console.error("Error during login:", error);
        }
      }
    }
  };

  return (
    <div className="signin-container" style={{ border: "2px solid rgb(74, 131, 192)", marginTop: "70px" }}>
      <div className="image-section">
        <img
          src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7963.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid"
          alt="Sign In"
        />
      </div>
      <form className="register-form" onSubmit={handleSubmit} style={{ border: "none" }}>
        <h2 className="h111">Login Now</h2>
        {loginError && <p className="error">{loginError}</p>}
        <div>
          <label>
            Email
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
          </label>
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div>
          <label>
            Password
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
            />
          </label>
          {errors.password && <p className="error">{errors.password}</p>}
        </div>
        <div>
          <p className="p90" style={{ fontFamily: "cursive" }}>
            If you don't have an account, please{" "}
            <a href="./signin" style={{ fontFamily: "cursive" }}>
              Sign Up
            </a>
            .
          </p>
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Logincomponent;
