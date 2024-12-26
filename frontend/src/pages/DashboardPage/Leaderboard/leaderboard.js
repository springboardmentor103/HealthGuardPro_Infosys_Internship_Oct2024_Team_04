import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./leaderboard.css";

const Leaderboard = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchLeaderboard = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/leaderboard", {
          method: "GET",
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        const data = await response.json();
        if (response.ok) {
          setUsers(data);
        } else {
          console.error(data.message);
        }
      } catch (error) {
        console.error("Error fetching leaderboard:", error);
      }
    };

    fetchLeaderboard();
  }, []);

  const handleViewScores = (user) => {
    setSelectedUser(user);
  };

  const closePopup = () => {
    setSelectedUser(null);
  };

  return (
    <div className="leaderboard-container">
      <h1>Leaderboard</h1>
      <table className="leaderboard-table">
        <thead>
          <tr>
            <th>Rank</th>
            <th>Username</th>
            <th>Last Assessment</th>
            <th>Overall Score</th>
            <th>View</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user._id}>
              <td>{index + 1}</td>
              <td>{user.username}</td>
              <td>{new Date(user.updatedAt).toLocaleDateString()}</td>
              <td>{user.scores.overallScore}</td>
              <td>
                <button className="view-btn" onClick={() => handleViewScores(user)}>View</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button className="back-btn" onClick={() => navigate("/dashboard")}>
        Back to Dashboard
      </button>
      
      {selectedUser && (
        <div className="popup-overlay">
          <div className="popup-content">
            <h2>{selectedUser.username}'s Scores</h2>
            <table className="user-details-table">
              <thead>
                <tr>
                  <th>Assessment</th>
                  <th>Score</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Physical Fitness</td>
                  <td>{selectedUser.scores.physicalFitness}</td>
                </tr>
                <tr>
                  <td>Nutrition</td>
                  <td>{selectedUser.scores.nutrition}</td>
                </tr>
                <tr>
                  <td>Mental Well-Being</td>
                  <td>{selectedUser.scores.mentalWellBeing}</td>
                </tr>
                <tr>
                  <td>Lifestyle</td>
                  <td>{selectedUser.scores.lifestyle}</td>
                </tr>
                <tr>
                  <td>Biomarkers</td>
                  <td>{selectedUser.scores.biomarkers}</td>
                </tr>
                <tr>
                  <td>Overall Score</td>
                  <td>{selectedUser.scores.overallScore}</td>
                </tr>
              </tbody>
            </table>
            <button className="close-btn" onClick={closePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Leaderboard;




