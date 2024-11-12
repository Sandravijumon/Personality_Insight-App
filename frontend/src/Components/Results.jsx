import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Results.css';
import './Navbar';
import Navbar from './Navbar';

const Results = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { prediction } = location.state || {}; 

  console.log('Location state:', location.state); 

  const handleRetry = () => {
    navigate('/quiz');  
  };

  return (
    <div className='container'>
      <Navbar/>
    <div className="results-container">
      
      <h1>Your Personality Prediction</h1>
      {prediction ? (
        <div className="result-box">
          <p>Your predicted personality type is:</p>
          <h2>{prediction}</h2> 
          <Link to="/personality">Know More
          </Link>
        </div>
      ) : (
        <div>
          <p>No result available. Please try again.</p>
          <button onClick={handleRetry} className="retry-btn">Retry</button> 
        </div>
      )}
    </div>
    </div>
  );
};

export default Results;





// import React, { useEffect } from 'react';
// import { Link, useLocation, useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import Navbar from './Navbar';
// import './Results.css';

// const Results = () => {
//   const location = useLocation();
//   const navigate = useNavigate();
//   const { prediction, userId } = location.state || {}; // Retrieve userId and prediction from location state

//   // Send prediction to backend to save
//   useEffect(() => {
//     if (prediction && userId) {
//       axios.post("http://localhost:8080/updatePrediction", { userId, prediction })
//         .then((response) => {
//           console.log("Prediction saved:", response.data);
//         })
//         .catch((error) => {
//           console.error("Error saving prediction:", error);
//         });
//     }
//   }, [prediction, userId]);

//   const handleRetry = () => {
//     navigate('/quiz'); // Redirect to quiz to retry
//   };

//   return (
//     <div className="container">
//       <Navbar />
//       <div className="results-container">
//         <h1>Your Personality Prediction</h1>
//         {prediction ? (
//           <div className="result-box">
//             <p>Your predicted personality type is:</p>
//             <h2>{prediction}</h2>
//             <Link to="/personality">Know More</Link>
//           </div>
//         ) : (
//           <div>
//             <p>No result available. Please try again.</p>
//             <button onClick={handleRetry} className="retry-btn">Retry</button>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Results;

