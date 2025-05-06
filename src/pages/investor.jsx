import React, { useState, useEffect } from 'react';
import './../styles/investor.css'; // Ensure you create a CSS file for styling
import Header from '../components/Header'; // Reuse the Header component

const Investor = () => {
  const [currentIndex, setCurrentIndex] = useState(0); // State to track the current image index
  const images = [
    'images/1.png',
    'images/33.png',
    'images/44.png',
  ]; // Array of image paths

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Auto-scroll functionality
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 4000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [images.length]);

  return (
    <div className="investor-page">
      <Header />
      <header className="investor-header">
        <h1 className="investor-title">Reimagine at Mex Plan</h1>
      </header>

      <section className="investor-mission">
        <h2>Our mission</h2>
        <p>We reimagine the way the world moves for the better</p>
      </section>

      <section className="investor-tabs">
        <a href="#safety">Safety</a>
        <a href="#privacy">Privacy</a>
        <a href="#citizenship">Global citizenship</a>
        <a href="#accessibility">Accessibility</a>
      </section>

      <section className="investor-carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>❮</button>
        <div className="carousel-image">
          <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
        </div>
        <button className="carousel-btn next" onClick={handleNext}>❯</button>
      </section>
      <section className="investor-sections">
        <div className="investor-section">
          <div>
            <img src="images/sideimage-invst.jpg" alt="Sustainability" />
          </div>
        </div>

        <div className="investor-section">
          <div>
            <h3>Your safety Investor us </h3>
            <p>
              As an investor, you are part of our journey toward innovation, growth, and long-term value creation. 
              We are committed to maintaining transparency, delivering sustainable returns, and driving strategic 
              initiatives that position us at the forefront of the industry. Our team is focused on disciplined 
              execution, technological leadership, and responsible governance to build enduring shareholder confidence.
            </p>
            <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Investor;