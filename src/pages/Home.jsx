import React, { useState, useEffect } from "react";
import "../styles/app.css";

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("English");
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(+window.scrollY);
  const [isScrollingUp, setIsScrollingUp] = useState(true); // Define state for scrolling direction
  const [isMenuVisible, setIsMenuVisible] = useState(false); // Define state for menu visibility

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setIsNavOpen(false);  // Always close nav when dropdown opens
    setIsMenuVisible(false); // Close menu when dropdown opens
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    if (currentScrollY > lastScrollY) {
      setIsScrollingUp(false); 
    } else {
      setIsScrollingUp(true); 
    }
    setLastScrollY(currentScrollY);
  };

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
    setIsDropdownOpen(false); // Close dropdown when menu opens
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []); // Only attach listener once



  const languages = [
    "English",
    "Spanish",
    "French",
    "German",
    "Chinese",
    "Japanese",
    "Korean",
    "Russian",
    "Arabic",
  ];

  const handleLanguageSelect = async (language) => {
    setSelectedLanguage(language);
    setIsDropdownOpen(false);
    console.log(language);

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
    <div>
    <header className="header">
      <div className="logo">
        <a href="/" className="logo-link">
          MAX<span className="highlight">PAIN</span>
        </a>
      </div>
      <nav className="nav">
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
