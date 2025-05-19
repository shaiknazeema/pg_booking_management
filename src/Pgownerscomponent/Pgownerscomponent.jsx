import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import './Pgownerscomponent.css';
import Homecomponent from "../Homecomponent/Homecomponent";

function Pgownerscomponent() {
  const navigate = useNavigate(); 
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = formData;

   
    if (email === "nazeemashaik852@gmail.com" && password === "nazeemashaik@852") {
      console.log("Login Successful");
      navigate("/main"); 
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <>
    <Homecomponent/>
      <div className="d1" style={{ borderColor: "black" }}>
        <div className="d2">
          <img
            src="https://img.freepik.com/free-vector/hotel-booking-concept-illustration_114360-27998.jpg?ga=GA1.1.2140725953.1734529645&semt=ais_hybrid"
            alt="Login illustration"
          />
        </div>
        <div className="d3">
          <h2 className="d6">Login as Pgowner</h2>
          {error && <p style={{ color: "red" }}>{error}</p>} 
          <form onSubmit={handleSubmit}>
            <div className="d4">
              <input
                type="text"
                name="email"
                placeholder="Enter the Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="d4">
              <input
                type="password"
                name="password"
                placeholder="Enter the Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className="d5">
              OwnerLogin
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Pgownerscomponent;
