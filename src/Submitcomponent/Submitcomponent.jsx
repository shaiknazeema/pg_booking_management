import React, { useState } from 'react';
import './Submitcomponent.css';
// import emailjs from 'emailjs-com';
import Homecomponent from '../Homecomponent/Homecomponent';
import Footercomponent from '../Footercomponent/Footercomponent';

const SubmitComponent = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    roomType: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Data Submitted:', formData);

    // const templateParams = {
    //   name: formData.name,
    //   email: formData.email, // Email of the form filler
    //   phoneNumber: formData.phoneNumber,
    //   roomType: formData.roomType,
    //   message: `Dear ${formData.name}, thank you for booking a PG. You have selected the room type: ${formData.roomType}. We will contact you shortly for further details.`, // Customize this message as needed
    // };

    // emailjs.send('service_kzzf6wl', 'template_rwh8exu', templateParams, 'meAmrzD3pXu70CWQE')
    //   .then((response) => {
    //     console.log('SUCCESS!', response.status, response.text);
    //     alert('Email sent successfully!');
    //   }, (error) => {
    //     console.error('FAILED...', error);
    //     alert('Failed to send email. Error: ' + JSON.stringify(error));
    //   });
    const formDataToSend = {
      name: formData.name,
      email: formData.email,
      phoneNumber: formData.phoneNumber,
      roomType: formData.roomType
  };
  fetch('http://localhost:3001/submit', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(formDataToSend)
})
    .then((response) => {
        if (response.ok) {
            alert('Booking confirmed. Confirmation email sent!');
        } else {
            alert('Failed to confirm booking.');
        }
    })
    .catch((error) => {
        console.error('Error:', error);
        alert('An error occurred while submitting the form.');
    });
};
  return (
    <>
      <Homecomponent />
      <h1> Please book the PG that you require</h1>
      <div className="main-container">
        <div className="sub-container image-container">
          <img src="https://img.freepik.com/free-vector/flat-hotel-booking-concept-background_23-2148193794.jpg?t=st=1736070417~exp=1736074017~hmac=dd8e8d82ab0cf67979a69bb99d9197e5cc74e5c8428cfce3c51abcd6286da85b&w=740" alt="Placeholder" />
        </div>
        <div className="sub-container form-container">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label>Room Type:</label>
              <select
                name="roomType"
                value={formData.roomType}
                onChange={handleChange}
                required
              >
                <option value="">Select a room type</option>
                <option value="single_no_ac">Single Bed Room without AC</option>
                <option value="single_with_ac">Single Bed Room with AC</option>
                <option value="3bhk_no_ac">3BHK without AC</option>
                <option value="3bhk_with_ac">3BHK with AC</option>
              </select>
            </div>
            <button className="bt btn-success" style={{ width: "300px", borderRadius: "3px", height: "40px", marginLeft: "30px" }}>Submit</button>
          </form>
        </div>
      </div>
      <Footercomponent />
    </>
  );
};

export default SubmitComponent;
