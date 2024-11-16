import React from "react";
import "./forgotPassword-1.css";
// import { Link } from "react-router-dom";

function ForgotPasswordPage1() {
  return (
    <div className="forgot-password-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <input type="email" placeholder="Enter email" />
        <button className="forgot-password-btn">Send OTP</button>
        <p className="forgot-password-link">
          <a href="/login">Try another way</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage1;
