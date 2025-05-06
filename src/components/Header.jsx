import React, { useState } from "react";
import "../styles/app.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State to manage selected language
  const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Arabic"]; // Example languages

  // Function to toggle the dropdown
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Function to handle language selection
  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          MAX<span className="highlight">PAIN</span>
        </a>
      </div>
      <nav className="nav">
        <a href="#attorneys">Friends</a>
        <a href="#subscribers">Investors</a>
        <a href="#providers">Attorneys</a>
        <a href="/about">About</a>
        <a href="#meet-max-pain">Careers</a>
      </nav>
      <div className="actions">
        <div className="dropdown">
          <button className="lang-btn" onClick={toggleDropdown}>
            <img src="/images/lang-icon.png" alt="Language" className="flag-icon" />
            <span className="lang-text">{selectedLanguage}</span>
          </button>
          {isDropdownOpen && (
            <ul className="dropdown-menu">
              {languages.map((language, index) => (
                <li
                  key={index}
                  className="dropdown-item"
                  onClick={() => handleLanguageSelect(language)}
                >
                  {language}
                </li>
              ))}
            </ul>
          )}
        </div>
        <a href="/contact-us" className="help-link">help</a>
        <a href="/Login" className="help-link">Log In</a>
        <a href="/signup" className="join-btn">Join MAX</a>
      </div>
    </header>
  );
};

export default Header;