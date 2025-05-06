import React from 'react';
import './../styles/about.css'; // Ensure you create a CSS file for styling
import Header from '../components/Header'; // Import the Header component
const About = () => {
  return (
    <div className="about-page">
        <Header />
      <header className="about-header">

        <h1 className="about-title">About</h1>
      </header>
      <section className="about-intro">
        <p>
          Movement is what we power. It’s our lifeblood. It runs through our veins. It’s what gets us out of bed each morning. 
          It pushes us to constantly reimagine how we can move better, for you. For all the places you want to go. For all the 
          things you want to get. For all the ways you want to earn. Across the entire world. In real time. At the incredible 
          speed of now.
        </p>
      </section>

      <section className="about-letter">
        <div className="ceo-content-box"> <h2>A letter from our CEO</h2>
        <button className="read-more-button">Read more</button></div>
        <div className="ceo-image-box"> <img
            src="images/ceo-img.png"
            alt="Sustainability"
          /></div>
      </section>

      <section className="about-sections">
        <div className="about-section">

          <div>
          <img
            src="images/right-side.jpg"
            alt="Sustainability"
          />
          </div>
        </div>

        <div className="about-section">
          <div>
          <h3>Your safety drives us </h3>
          <p>
            Whether you’re in the back seat or behind the wheel, your safety is essential. We are committed to doing our part, 
            and technology is at the heart of our approach. We partner with safety advocates and develop new technologies and 
            systems to help improve safety and help make it easier for everyone to get around.
          </p>
          <button className="learn-more-button">Learn more</button>
          </div>
        </div>
      </section>

      <section className="about-company-info">
        <div className="company-info-card">
          <h3>Who’s driving Uber</h3>
          <p>
            We’re building a culture within Uber that emphasizes doing the right thing, period, for riders, drivers, and employees. 
            Find out more about the team that’s leading the way.
          </p>
          <button className="see-leadership-button">See our leadership</button>
        </div>

        <div className="company-info-card2">
        <img  src="images/side-img.jpg"  alt="Sustainability" width={400} height={350} />

        </div>
      </section>

      <footer className="about-footer">
        <h2>Come reimagine with us</h2>
        <div className="footer-image">
        <img
          src="images/footer-icon.png" // Replace with the actual image path
          alt="World"
        />
        </div>
        <div className="footer-text">
        <p>
          We’re always looking for new ways to move the world.
          <hr className='hr'/>
          Join us and help us build the future of transportation.
        </p>
        <button className="join-button">Join us</button>
        </div>
      </footer>
    </div>
  );
};

export default About;