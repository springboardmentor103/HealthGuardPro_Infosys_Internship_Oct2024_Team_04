import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './leaderboard.css';

const Leaderboard = () => {
  const navigate = useNavigate(); // Initialize the navigation hook

  const handleBackClick = () => {
    navigate('/dashboard'); // Navigate to /dashboard
  };

  return (
    <div className="leaderboard">
      {/* Back Arrow */}
      <button className="back-button" onClick={handleBackClick}>
        <span className="back-arrow">←</span>
      </button>

      {/* Title */}
      <h1 className="leaderboard-title">Leaderboard</h1>

      {/* User Information */}
      <div className="user-info">
        <div className="avatar"></div>
        <div className="user-details">
          <h2>Jhon</h2>
          <p>#3124</p>
        </div>
      </div>

      {/* Table */}
      <div className="score-table">
        <table>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Date & Stamp</th>
              <th>Overall Score</th>
              <th>View Board</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>27/06/2024 & 5:15</td>
              <td>95%</td>
              <td><button className="view-button">View</button></td>
            </tr>
            <tr>
              <td>2</td>
              <td>02/07/2024 & 4:00</td>
              <td>80%</td>
              <td><button className="view-button">View</button></td>
            </tr>
            <tr>
              <td>3</td>
              <td>15/10/2024 & 3:02</td>
              <td>77%</td>
              <td><button className="view-button">View</button></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Leaderboard;
