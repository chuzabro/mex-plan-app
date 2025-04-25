import React from "react";
import "../styles/app.css";

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <div className="logo">MAX<span className="highlight">PAIN</span></div>
        <nav className="nav">
          <a href="#providers">Providers</a>
          <a href="#attorneys">Attorneys</a>
          <a href="#products">Products</a>
          <a href="#about">About</a>
        </nav>
        <div className="actions">
          <button className="lang-btn">EN</button>
          <a href="#help" className="help-link">Help</a>
          <a href="#login" className="login-link">Log in</a>
          <button className="join-btn">Join MAX</button>
        </div>
      </header>
      <main className="main">
        <div className="hero">
          <h1 className="hero-title">
            A <span className="highlight">friend</span> when you need one.
          </h1>
          <p className="hero-subtitle">
            We put the control back in your hands. Your personal advocate.
          </p>
        </div>
        <div className="tagline">
          <h2>
            MAX<span className="highlight">PAIN</span>
          </h2>
          <p>America’s <span className="highlight">Largest</span> Personal Injury Platform</p>
        </div>
      </main>
    </div>
  );
};

export default App;