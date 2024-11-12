import React from 'react';
import './About.css'; // Import the CSS file for styling
import Navbar from './Navbar';

const About = () => {
  return (
    <div>
    <Navbar/>
  
    <div className="about-page">
      {/* Background Image */}
      <div className="background-image">
        <div className="overlay"></div>
      </div>

      {/* Content Container */}
      <div className="about-content">
        {/* Heading */}
        <br></br>
        <h1 className="about-heading">ABOUT US</h1>
        <h2 className='about-heading1'>Our dream is transforming the human minds to the best</h2>

        {/* Centered GIF */}
        <div className="gif-container">
          <img
            src="https://i.pinimg.com/originals/53/36/50/5336509c84cd8d1fc7ab7c619928c60b.gif"
            alt="Personality Insight"
            className="gif-image"
          />
        </div>

        {/* Description Paragraph */}
        <p className="about-paragraph">
          The Personality Insight app helps you discover key traits about yourself by analyzing your responses to a series of thoughtfully crafted questions.
          The app uses modern data-driven personality assessment algorithms to provide you with meaningful insights about your behavioral patterns, preferences, and cognitive style.
          Start your journey towards greater self-awareness today!
        </p>
      </div>
    </div>
    </div>
  );
};

export default About;
