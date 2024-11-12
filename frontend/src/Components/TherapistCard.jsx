import React from 'react';
import './TherapistCard.css'

const TherapistCard = ({ therapist, onBookNow }) => {
  const { image, name, education, availableDays, mobileNo } = therapist;

  return (
    <div className="therapist-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{education}</p>
      <p>Available Days: {availableDays.join(', ')}</p>
      <p>Mobile No: {mobileNo}</p>
      <button onClick={() => onBookNow(therapist)}>Book Now</button>
    </div>
  );
};

export default TherapistCard;