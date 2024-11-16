import React from "react";
import "./forgotPassword-2.css";
// import { Link } from "react-router-dom";

function ForgotPasswordPage2() {
  return (
    <div className="forgot-password-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="forgot-password-box">
        <h2 className="forgot-password-title">Forgot Password</h2>
        <input type="email" placeholder="Enter mobile number" />
        <button className="forgot-password-btn">Send OTP</button>
        <p className="forgot-password-link">
          <a href="/login">Try another way</a>
        </p>
      </div>
    </div>
  );
}

export default ForgotPasswordPage2;
