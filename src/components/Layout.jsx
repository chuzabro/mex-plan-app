import React from "react";
import "../styles/app.css";

const Layout = ({ children }) => {
  return (
    <div className="app">
      {children}
      <div className="bottom-right-logo">
        <img src="/images/app-logo.png" alt="Logo" />
      </div>
    </div>
  );
};

export default Layout;