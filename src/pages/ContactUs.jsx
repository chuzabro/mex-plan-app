import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/contactus.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    email: "",
    message: "",
  });
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, message } = formData;

    // Validation
    if (!email || !message) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    // If validation passes, show pop-up and redirect to Home page
    setError("");
    console.log("Contact Us form submitted:", formData);
    setShowPopup(true); // Show the pop-up

    // Redirect to Home page after 3 seconds
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up
      navigate("/"); // Redirect to Home page
    }, 2000);
  };

  return (
    <div className="contactus-page">
      <div className="contactus-container">
        <h1 className="contactus-title">Send me your Issue</h1>
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
            ></textarea>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="contactus-btn">Send Message</button>
        </form>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>We got you! We will respond as soon as possible.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;