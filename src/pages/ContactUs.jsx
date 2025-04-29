import React, { useState } from "react";
import "../styles/contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;

    if (!email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setError("");
    setSuccess("Your message has been sent successfully!");
    console.log("Contact Us form submitted:", formData);
    // Handle form submission logic here
  };

  return (
    <div className="contactus-page">
      <div className="contactus-container">
        <h1 className="contactus-title">Send me your Issu</h1>
        <form className="contactus-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email address"
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Enter your message"
              rows="5"
            ></textarea>
          </div>
          {error && <p className="error-message">{error}</p>}
          {success && <p className="success-message">{success}</p>}
          <button type="submit" className="contactus-btn">Send Message</button>
        </form>
      </div>
      <div className="bottom-right-logo">
        <img src="/images/app-logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default ContactUs;