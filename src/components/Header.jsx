import React, { useState } from "react";
import "../styles/app.css";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State to manage dropdown visibility
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State to manage selected language
  const [isNavOpen, setIsNavOpen] = useState(false); // State to manage nav visibility on small screens

  const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Arabic"];

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleLanguageSelect = (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen); // Toggle nav visibility
  };

  return (
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          MAX<span className="highlight">PAIN</span>
        </a>
      </div>
        <img onClick={toggleNav} src="/images/menu.png" alt="Menu" className="hamburger-icon" />
      <nav className={`nav ${isNavOpen ? "open" : "closed"}`}>
          <img  onClick={toggleNav} src="/images/menu.png" alt="Close" className="hamburger-icon" />
        <a href="/">Friends</a>
        <a href="/investor">Investors</a>
        <a href="/attorneys">Attorneys</a>
        <a href="/about">About</a>
        <a href="/careers">Careers</a>
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