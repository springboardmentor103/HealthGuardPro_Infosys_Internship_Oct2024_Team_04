import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import "./verifyOtp.css";

function OtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const [error, setError] = useState(""); // To hold error messages from the backend
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email || "";

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/otp/verify-otp", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, otp }),
      });

      const data = await response.json();
      if (response.ok) {
        alert(data.message); // Alert on successful verification
        navigate("/changePassword", { state: { email } }); // Navigate to change password page
      } else {
        // If OTP is incorrect, set the error message
        alert("Enter the correct OTP!"); 
        setError(data.message || "Invalid OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error verifying OTP:", error);
      setError("Error verifying OTP. Please try again.");
    }
  };

  return (
    <div className="otp-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="otp-box">
        <h2 className="otp-title">Verify OTP</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="submit" className="otp-btn">Verify OTP</button>
        </form>
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
}

export default OtpVerificationPage;

