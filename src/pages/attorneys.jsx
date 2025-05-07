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
              <button className="attorneys-read-more">Read More</button>
              <button className="attorneys-emergency">Emergency</button>
            </div>
          </div>
        </section>
  
        {/* Testimonial Section */}
        <section className="attorneys-testimonial">
          <div className="attorneys-testimonial-content">
            <img src="/images/testimonial.jpg" alt="Client" className="attorneys-testimonial-image" />
            <blockquote>
              "Lorem ipsum dolor sit amet, consectetur elit. Aperiam commodi expedita."
            </blockquote>
            <p>- Johann Doe Patterson</p>
          </div>
          <div className="attorneys-testimonial-image-wrapper">
            <img src="/images/scales.jpg" alt="Scales of Justice" />
          </div>
        </section>
  
        {/* Expert Lawyers */}
        <section className="attorneys-expert-lawyers">
          <h2>Expert Lawyers</h2>
          <p>Solving your legal problems</p>
          <div className="attorneys-lawyer-cards">
            {[1, 2, 3, 4].map((item, index) => (
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
          <h2>Expert Team</h2>
          <p>Solving your legal problems</p>
          <div className="attorneys-team-members">
            <div className="attorneys-member">
              <img src="/images/member1.jpg" alt="Elizabeth Wozniak" />
              <h4>Elizabeth Wozniak</h4>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
            <div className="attorneys-member">
              <img src="/images/member2.jpg" alt="Johann Albergo Boussou" />
              <h4>Johann Albergo Boussou</h4>
              <p>Lorem ipsum dolor sit amet, consectetur elit.</p>
            </div>
          </div>
        </section>
  
        {/* Kirkland Team */}
        <section className="attorneys-kirkland-team">
          <div className="attorneys-team-content">
            <h2>Kirkland Team</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis scelerisque consectetur.
            </p>
            <button>Emergency</button>
          </div>
          <div className="attorneys-team-video">
            <img src="/images/team-video.jpg" alt="Team Video" />
          </div>
        </section>
  
        {/* Footer Logos */}
        <section className="attorneys-footer-logos">
          <img src="/images/logo1.png" alt="Biotech" />
          <img src="/images/logo2.png" alt="Eagle" />
          <img src="/images/logo3.png" alt="Mission" />
          <img src="/images/logo4.png" alt="JK" />
          <img src="/images/logo5.png" alt="Profession" />
        </section>
  
        {/* Footer */}
        <footer className="attorneys-footer">
         
        </footer>
      </div>
    );
  };
  
  export default Attorines;