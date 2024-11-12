import React from 'react';
import './WelcomePage.css';
import { Link } from 'react-router-dom';

const WelcomePage = () => {
  return (
    <div className="welcome-container">
      <div className="welcome-card">
        <h1 className="welcome-heading">Welcome to Personality Insight App</h1>
        <div className="button-container">
            <Link to="/login">
            <button className="user-btn">User</button>
            </Link>
            <Link to="/adminlogin"> 
          <button className="admin-btn">Admin</button>
          </Link>
          <Link to="/therapistlogin"> 
          <button className="admin-btn">Therapist</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
