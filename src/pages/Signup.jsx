import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/signup.css";

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [confirmPassword, setConfirmPassword] = useState(""); // State for confirm password
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false); // State to control pop-up visibility
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validation for firstName and lastName to accept only alphabets
    if ((name === "firstName" || name === "lastName") && !/^[a-zA-Z]*$/.test(value)) {
      return; // Prevent updating state if input contains invalid characters
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { firstName, lastName, email, password } = formData;

    // Validation
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
      setError("All fields are required.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // If validation passes, show pop-up and redirect to Home page
    setError("");
    console.log("Signup successful:", formData);
    setShowPopup(true); // Show the pop-up

    // Redirect to Home page after 3 seconds
    setTimeout(() => {
      setShowPopup(false); // Hide the pop-up
      navigate("/"); // Redirect to Home page
    }, 2000);
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-title">Join To MAX<span className="highlight">PAIN</span></h1>
        <form className="signup-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="Enter your first name"
            />
          </div>
          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Enter your last name"
            />
          </div>
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
            <label htmlFor="password">Password</label>
            <div className="password-input-container" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter your password"
                style={{ paddingRight: '30px', width: '95%' }}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <div className="password-input-container" style={{ position: 'relative' }}>
              <input
                type={showPassword ? "text" : "password"}
                id="confirmPassword"
                name="confirmPassword"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                placeholder="Confirm your password"
                style={{ paddingRight: '30px', width: '95%' }}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowPassword(!showPassword)}
                style={{ position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer' }}
              >
                {showPassword ? "🙈" : "👁️"}
              </span>
            </div>
          </div>
          {error && <p className="error-message">{error}</p>}
          <button type="submit" className="signup-btn">Sign up</button>
        </form>
        <p className="login-link">
          Already have an account? <a href="/login">Log in</a>
        </p>
      </div>

      {/* Pop-up Modal */}
      {showPopup && (
        <div className="popup-overlay">
          <div className="popup">
            <p>Welcome to Mex Plan! Your account has been created successfully.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signup;