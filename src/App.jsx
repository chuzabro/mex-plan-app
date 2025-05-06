import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import ContactUs from "./pages/ContactUs";
import About from "./pages/about";
import Investor from "./pages/investor";
import Careers from "./pages/careers";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/about" element={<About />} />
        <Route path="/investor" element={<Investor />} />
        <Route path="/careers" element={<Careers />} />
        {/* Add more routes as needed */}
       
      </Routes>
    </Router>
  );
};

export default App;