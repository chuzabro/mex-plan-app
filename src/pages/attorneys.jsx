import React, { useState, useEffect } from 'react';
import './../styles/attoreys.css'; // Ensure you create a CSS file for styling
import Header from '../components/Header'; // Reuse the Header component
const Attorines = () => {
    return (
      <div className="attorneys-page">
        {/* Hero Section */}
        <Header />
        <section className="attorneys-hero">
          <div className="attorneys-hero-content">
            <h1>Kirkland Law</h1>
            <p>Solving complex litigation, corporate and tax issues</p>
            <div className="attorneys-hero-buttons">
              {/* <button className="attorneys-read-more">Read More</button>
              <button className="attorneys-emergency">Emergency</button> */}
            </div>
          </div>
        </section>
  
        {/* Testimonial Section */}
        <section className="attorneys-testimonial">
          <div className="attorneys-testimonial-content">
            <img src="/images/career6.jpg" alt="Client" className="attorneys-testimonial-image" />
            <blockquote>
              "Lorem ipsum dolor sit amet, consectetur elit. Aperiam commodi expedita."
            </blockquote>
            <p>- Johann Doe Patterson</p>
          </div>
          <div className="attorneys-testimonial-image-wrapper">
            <img src="/images/footer-icon.png" alt="Scales of Justice" />
          </div>
        </section>
  
        {/* Expert Lawyers */}
        <section className="attorneys-expert-lawyers">
          <h2>Expert Lawyers</h2>
          <p>Solving your legal problems</p>
          <div className="attorneys-lawyer-cards">
            {[1, 2, 3,].map((item, index) => (
              <div key={index} className="attorneys-card">
                <div className="attorneys-icon">⚖️</div>
                <h3>Finance</h3>
                <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
                <button>Explore</button>
              </div>
            ))}
          </div>
        </section>
  
        {/* Expert Team */}
        <section className="attorneys-expert-team">

        </section>
  
        {/* Kirkland Team */}
        <section className="attorneys-kirkland-team">
          <div className="main">
          <div className="attorneys-team-content">
            <h2>Kirkland Team</h2>
            <p>
            As a team leader, I am committed to guiding my team toward achieving 
            our goals with clarity, collaboration, and accountability.
             I believe in fostering an environment of trust and open c
             ommunication, where every team member feels valued and motivated
              to contribute their best. By setting clear expectations, providing 
              constructive feedback, and recognizing achievements, I help drive both individual 
              growth and team success. My focus is not only on delivering results but also on creating
               a positive and supportive atmosphere 
            that encourages innovation and continuous improvement.
            </p>
            {/* <button>Emergency</button> */}
            <button className="read-more-button">Read more</button>
          </div>
          <div className="attorneys-team-video">
            <img src="/images/career3.jpg" alt="Team Video" />
          </div>
          </div>
        </section>
  
        {/* Footer Logos */}
        <section className="attorneys-footer-logos">
          <img src="/images/biotech.jpeg" alt="Biotech" />
          <img src="/images/egel.jpg" alt="Eagle" />
          <img src="/images/mission.jpg" alt="Mission" />
          <img src="/images/jk.png" alt="JK" />
          <img src="/images/prof.jpg" alt="Profession" />
        </section>
  
        {/* Footer */}
        <footer className="attorneys-footer">
         
        </footer>
      </div>
    );
  };
  
  export default Attorines;