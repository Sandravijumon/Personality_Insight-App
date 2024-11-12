// Navbar.js
import React from 'react';
import './Navbar.css'; 
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <h2 style={{ color: 'Grey' }}>Personality Insight</h2>
        <a href="/home" className="nav-item">Home</a>
        <a href="/about" className="nav-item">About</a>
        <a href="/articles" className="nav-item">Articles</a>
        <a href="/book" className="nav-item">Get my therapist</a>
        <a href="/results" className="nav-item">Results</a>
        <a href="/personality" className="nav-item">Personality Types</a>
      </div>
      <div className="navbar-right">
          <button className="btn btn-danger" onClick={() => navigate("/login")}>Log Out</button>
        </div>
    </nav>
  );
};

export default Navbar;
