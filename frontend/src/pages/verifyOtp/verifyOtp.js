import React from "react";
import "./verifyOtp.css";

function OtpVerificationPage() {
  return (
    <div className="otp-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="otp-box">
        <h2 className="otp-title">Verify Account</h2>
        <input type="text" placeholder="Enter OTP" />
        <button className="otp-btn">Verify</button>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
