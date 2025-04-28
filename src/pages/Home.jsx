import React, { useState } from "react";
import "../styles/app.css";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const languages = ["English", "Spanish", "French", "German", "Chinese","japanese","korean","Russian","arabic"];

  const handleLanguageSelect = (language) => {
    alert(`You selected: ${language}`);
    setIsDropdownOpen(false); // Close the dropdown after selection
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">MAX<span className="highlight">PAIN</span></div>
        <nav className="nav">
          <a href="#attorneys">Friends</a>
          <a href="#subscribers">Subscribers</a>
          <a href="#providers">Providers</a>
          <a href="/friends">Attorneys</a>
          <a href="#meet-max-pain">Meet Max Pain</a>
        </nav>
        <div className="actions">
          <div className="dropdown">
            <button className="lang-btn" onClick={toggleDropdown}>
              English
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
          <a href="#contact-us" className="help-link">Contact Us</a>
          <a href="/signup" className="join-btn">Join MAX</a>
        </div>
      </header>
      <main className="main">
        <div className="hero">
          <div className="branding">
            <h1 className="branding-title">
              <span className="maxpain">MAX<span className="highlight">PAIN</span></span>
              <p className="branding">
              MADICAL ATTRONEY EXCHANGE
            </p>
            </h1>
            <p className="branding-subtitle">
              Connecting you to the right people when things go left.
            </p>
          </div>
        </div>
      </main>
      <div className="bottom-right-logo">
        <img src="/images/app-logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Home;