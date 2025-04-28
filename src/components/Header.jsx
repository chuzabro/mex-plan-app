import React from "react";
import { NavLink } from "react-router-dom";
import "../styles/app.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">MAX<span className="highlight">PAIN</span></div>
      <nav className="nav">
        <NavLink
          to="/friends"
          className="nav-link"
          activeClassName="active-link"
        >
          Friends
        </NavLink>
        <NavLink
          to="/subscribers"
          className="nav-link"
          activeClassName="active-link"
        >
          Subscribers
        </NavLink>
        <NavLink
          to="/providers"
          className="nav-link"
          activeClassName="active-link"
        >
          Providers
        </NavLink>
        <NavLink
          to="/home"
          className="nav-link"
          activeClassName="active-link"
        >
          Attorneys
        </NavLink>
        <NavLink
          to="/meet-max-pain"
          className="nav-link"
          activeClassName="active-link"
        >
          Meet Max Pain
        </NavLink>
      </nav>
      <div className="actions">
        <button className="lang-btn">English</button>
        <NavLink to="/contact-us" className="help-link">
          Contact Us
        </NavLink>
        <NavLink to="/signup" className="join-btn">
          Join MAX
        </NavLink>
      </div>
    </header>
  );
};

export default Header;