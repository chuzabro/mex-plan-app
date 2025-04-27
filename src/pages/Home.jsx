import React from "react";
import "../styles/app.css";

const Home = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">MAX<span className="highlight">PAIN</span></div>
        <nav className="nav">
          <a href="#friends">Friends</a>
          <a href="#subscribers">Subscribers</a>
          <a href="#providers">Providers</a>
          <a href="#attorneys">Attorneys</a>
          <a href="#meet-max-pain">Meet Max Pain</a>
        </nav>
        <div className="actions">
          <button className="lang-btn">English</button>
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
    </div>
  );
};

export default Home;