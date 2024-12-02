import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import "./progress.css";

const CircleProgress = () => {
  const radius = 50;
  const strokeWidth = 10;
  const normalizedRadius = radius - strokeWidth * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  return (
    <svg width={radius * 2} height={radius * 2} className="circular-progress">
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#e6e6e6"
        strokeWidth={strokeWidth}
        fill="none"
      />
      <circle
        cx={radius}
        cy={radius}
        r={normalizedRadius}
        stroke="#4e9eab"
        strokeWidth={strokeWidth}
        fill="none"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * 0.25} // Static progress (25% for visual)
        strokeLinecap="round"
        style={{ transition: "stroke-dashoffset 0.5s ease" }}
      />
      <text
        x="50%"
        y="50%"
        textAnchor="middle"
        dy="0.3em"
        fontSize="20"
        fill="#4e9eab"
      >
        75%
      </text>
    </svg>
  );
};

const DashboardPage = () => {
  const navigate = useNavigate();
  const [logoutConfirm, setLogoutConfirm] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    setLogoutConfirm(true);
  };

  const confirmLogout = (confirm) => {
    if (confirm) {
      localStorage.removeItem("loggedInEmail");
      navigate("/");
    }
    setLogoutConfirm(false);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar / Navbar */}
      <div className={`sidebar ${isMenuOpen ? "open" : ""}`}>
        <div className="menu">
          <button onClick={() => navigate("/assessment")}>Take Assessment</button>
          <button onClick={() => navigate("/blog")}>Blogs</button>
          <button onClick={() => navigate("/leaderboard")}>Leaderboard</button>
          <button onClick={() => navigate("/about-us")}>About Us</button>
          <button onClick={handleLogout}>Logout</button>
        </div>
      </div>

      {/* Hamburger / Close Button */}
      <div className="hamburger" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? "✖" : "☰"}
      </div>

      {/* Logout confirmation popup */}
      {logoutConfirm && (
        <div className="logout-popup">
          <div className="popup-content">
            <p>Do you want to sign out?</p>
            <div className="popup-buttons">
              <button onClick={() => confirmLogout(true)}>Yes</button>
              <button onClick={() => confirmLogout(false)}>No</button>
            </div>
          </div>
        </div>
      )}

      <div className="main-content">
        <h1>Welcome!</h1>
        <h2>Your Health Scores</h2>
        <div className="score-cards">
          <div className="score-card">
            <h3>Physical Fitness</h3>
            <CircleProgress />
          </div>
          <div className="score-card">
            <h3>Nutrition</h3>
            <CircleProgress />
          </div>
          <div className="score-card">
            <h3>Mental Well-Being</h3>
            <CircleProgress />
          </div>
          <div className="score-card">
            <h3>Lifestyle</h3>
            <CircleProgress />
          </div>
          <div className="score-card">
            <h3>Bio Markers</h3>
            <CircleProgress />
          </div>
          <div className="score-card">
            <h3>Overall Score</h3>
            <CircleProgress />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
