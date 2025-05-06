import React, { useState } from "react";
import "../styles/app.css";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English"); // State to store the selected language

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const languages = ["English", "Spanish", "French", "German", "Chinese", "Japanese", "Korean", "Russian", "Arabic"];

  const handleLanguageSelect = async (language) => {
    setSelectedLanguage(language); // Update the selected language
    setIsDropdownOpen(false); // Close the dropdown after selection
    console.log(language) // print on console of selected language

    try {
      const response = await fetch("https://your-backend-server.com/api/language", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ language }),
      });

      if (response.ok) {
        console.log("Language posted successfully!");
      } else {
        console.error("Failed to post language.");
      }
    } catch (error) {
      console.error("Error posting language:", error);
    }
  };

  return (
    <div className="app">
      <header className="header">
        <div className="logo">
          <a href="/" className="logo-link">
            MAX<span className="highlight">PAIN</span>
          </a>
        </div>
        <nav className="nav">
          <a href="#attorneys">Friends</a>
          <a href="/investor">Investors</a>
          <a href="#providers">Attorneys</a>
          <a href="/about">About</a>
          <a href="/careers">Careers</a>
        </nav>
        <div className="actions">
          <div className="dropdown">
            <button className="lang-btn" onClick={toggleDropdown}>
              <img src="/images/lang-icon.png" alt="Language" className="flag-icon" />
              <span className="lang-text">{selectedLanguage}</span> {/* Display the selected language */}
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
      <main className="main">
        <div className="hero">
          <div className="branding">
          <div className="hero-content">
            <h1 className="hero-title">
              <span className="hero-max">M</span>
              <span className="hero-axpain">AXPAIN</span>
            </h1>
            <div className="hero-line"></div>
            <div className="hero-subtext">MEDICAL ATTORNEY EXCHANGE</div>
          </div>
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