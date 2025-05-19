import React, { useState } from "react";
import "./Contactcomponent.css";

import Homecomponent from "../Homecomponent/Homecomponent";
import Footercomponent from "../Footercomponent/Footercomponent";
import addNotification from "react-push-notification";

const Contactcomponent = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    phone_number: "",
    city: "",
    enquiryType: "",
    message: "",
  });

  const [errors, setErrors] = useState({}); // State for validation errors

  const clickToNotify = () => {
    addNotification({
      title: " a msg from book my pg ",
      message: "Thanks for contacting us!",
      duration: 5000,
      native: true,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target; // Correctly access the 'name' attribute
    setFormData((prevData) => ({
      ...prevData,
      [name]: value, // Update the formData based on the 'name' attribute
    }));
  
    // Clear errors when user types
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "", // Clear the specific error for this field
    }));
  };
  

  const validateForm = () => {
    const newErrors = {};

    // Name validation
    if (!formData.username?.trim()) {
      newErrors.username = "Name is required.";
    } else if (formData.username.length < 6) {
      newErrors.username = "Name must be at least 6 characters.";
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email?.trim()) {
      newErrors.email = "Email is required.";
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = "Invalid email format.";
    }

    // Mobile number validation
    const mobileRegex = /^[0-9]{10}$/;
    if (!formData.phone_number?.trim()) {
      newErrors.phone_number = "Mobile number is required.";
    } else if (!mobileRegex.test(formData.phone_number)) {
      newErrors.phone_number = "Mobile number must be 10 digits.";
    }

    // City validation
    if (!formData.city?.trim()) {
      newErrors.city = "City is required.";
    }

    // Enquiry type validation
    if (!formData.enquiryType) {
      newErrors.enquiryType = "Please select an enquiry type.";
    }

    // Message validation
    if (!formData.message?.trim()) {
      newErrors.message = "Message is required.";
    } else if (formData.message.length < 10) {
      newErrors.message = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    // Return true if no errors
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    if (validateForm()) {
      try {
        const response = await fetch("http://localhost:3001/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          console.log("Form submitted successfully.");
          // Reset form
          setFormData({
            username: "",
            email: "",
            phone_number: "",
            city: "",
            enquiryType: "",
            message: "",
          });
          clickToNotify(); // Show notification
        } else {
          console.error("Failed to submit the form.");
        }
      } catch (error) {
        console.error("Error submitting the form:", error);
      }
    }
  };
  

  return (
    <>
      <Homecomponent />

      <div className="contact-page">
        <div className="contact-info">
          <h2>It's Easy to Find Us</h2>
          <p>
            Please feel free to contact us for any PG booking-related issues,
            complaints, or support for moving to the PG you have booked through
            us.
          </p>
          <div className="info-section">
            <p>
              <strong>Address:</strong> 9-20, Bethel Nagar St, Industrial Estate,
              Perungudi, Chennai, Tamil Nadu 600096, India
            </p>
            <p>
              <strong>Phone:</strong> +91-8939654691
            </p>
            <p>
              <strong>Email:</strong> info@bookourpg.co.in
            </p>
          </div>
        </div>
        <div className="contact-form">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="username"
                placeholder="Name"
                value={formData.username}
                onChange={handleChange}
                required
              />
              {errors.username && <p className="error">{errors.username}</p>}
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              {errors.email && <p className="error">{errors.email}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="phone_number"
                placeholder="Mobile"
                value={formData.phone_number}
                onChange={handleChange}
                required
              />
              {errors.phone_number && <p className="error">{errors.phone_number}</p>}
            </div>
            <div className="form-group">
              <input
                type="text"
                name="city"
                placeholder="City"
                value={formData.city}
                onChange={handleChange}
                required
              />
              {errors.city && <p className="error">{errors.city}</p>}
            </div>

            <div className="form-group">
              <select
                name="enquiryType"
                value={formData.enquiryType}
                onChange={handleChange}
                required
                className="j1"
              >
                <option value="">Enquiry Type</option>
                <option value="General">General</option>
                <option value="Complaint">Complaint</option>
                <option value="Support">Support</option>
              </select>
              {errors.enquiryType && (
                <p className="error">{errors.enquiryType}</p>
              )}
            </div>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
            {errors.message && <p className="error">{errors.message}</p>}
            <button type="submit" className="btnn">
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="mapp">
        <h1 className="h30"> You Can Go By The Maps tooo!!!!!</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30646.039387668516!2d80.02982015043342!3d16.233034306084175!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4a80e219d5231d%3A0xdfc40d36b38556a!2sNarasaraopeta%2C%20Andhra%20Pradesh%20522601!5e0!3m2!1sen!2sin!4v1735655869537!5m2!1sen!2sin"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="map"
        ></iframe>
      </div>

      <Footercomponent />
    </>
  );
};

export default Contactcomponent;
