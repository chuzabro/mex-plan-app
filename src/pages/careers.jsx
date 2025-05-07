import React from 'react';
import './../styles/careers.css'; // Ensure you create a CSS file for styling
import Header from '../components/Header'; // Reuse the Header component

const Careers = () => {
  return (
    <div className="careers-page">
      <Header />
      <header className="careers-header">
        <video className="careers-video" autoPlay loop muted>
          <source src="images/8.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <h1 className="careers-title">Reimagine at Mex Plan</h1>
      </header>

      <section className="careers-intro">
        <div className="careers-text">
          <h2>What moves us, moves the world</h2>
          <p>
            At Uber we're reimagining the way the world moves for the better. That means being bold in our decisions and building for something bigger. 
            For us, all of that starts with helping people go anywhere and get anything: cars, takeout, motorcycles, groceries, bikes, people, scooters, 
            items, trucks, buses. It’s what we know and what we do best. And we do it at the speed of now.
          </p>
          <p>
            We show up for millions of people across the globe who rely on the Uber
             platform every day, allowing you to find tremendous purpose 
            
          </p>
        </div>
        <div className="careers-image">
          <img src="images/career5.jpg" alt="Careers Intro" />
        </div>
      </section>

      <section className="careers-sections">
        <div className="careers-section">
          <div className="careers-image">
            <img src="images/career1.jpg" alt="Life at Uber" />
          </div>
          <div className="careers-text">
            <h3>Life at Uber</h3>
            <p>
              Life at Uber is about going boldly together, moving the real world, and growing with the challenge. With a go-get-it attitude, we tackle 
              intriguing, complex problems—fast. Our culture drives innovation, empowers diverse perspectives, and ensures you have support when you need it most.
            </p>
            <a href="#explore" className="careers-link">Explore</a>
          </div>
        </div>

        <div className="careers-section">
          <div className="careers-text">
            <h3>Locations</h3>
            <p>
              Build for something bigger around the world. From San Francisco to Tokyo—our team works just about everywhere.
            </p>
            <a href="#learn-more" className="careers-link">Learn more</a>
          </div>
          <div className="careers-image">
            <img src="images/career3.jpg" alt="Locations" />
          </div>
        </div>

        <div className="careers-section">
          <div className="careers-image">
            <img src="images/career2.jpg" alt="Inside Uber" />
          </div>
          <div className="careers-text">
            <h3>Inside Uber</h3>
            <p>
              Bringing the future to today: making robot delivery a reality. So Funakoshi, Operations and Logistics Manager, was a key member of the 
              team who made the new robot delivery service a reality in Japan.
            </p>
            <a href="#explore" className="careers-link">Explore</a>
          </div>
        </div>
      </section>

      <footer className="careers-footer">
        <div className="carousel-controls">

        </div>
      </footer>
    </div>
  );
};

export default Careers;