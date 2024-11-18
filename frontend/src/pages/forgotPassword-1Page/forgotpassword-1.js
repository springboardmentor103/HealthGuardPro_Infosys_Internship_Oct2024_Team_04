import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotPassword-1.css";

function ForgotPasswordPage1() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const handleSendOtp = () => {
    // Validate the email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    // Navigate to OTP verification page
    navigate("/verifyOtp");
  };

  return (
    <div className="forgot-password-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button type="button" className="forgot-password-btn" onClick={handleSendOtp}>
            Send OTP
          </button>
        </form>
        
      </div>
    </div>
  );
}

export default ForgotPasswordPage1;