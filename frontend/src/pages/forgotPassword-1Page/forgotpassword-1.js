// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./forgotPassword-1.css";

// function ForgotPasswordPage1() {
//   const [email, setEmail] = useState("");
//   const navigate = useNavigate();

//   const handleSendOtp = () => {
//     // Validate the email address
//     const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//     if (email.trim() === "" || !emailRegex.test(email)) {
//       alert("Please enter a valid email address.");
//       return;
//     }
//     // Navigate to OTP verification page
//     navigate("/verifyOtp");
//   };

//   return (
//     <div className="forgot-password-container">
//       <h1 className="app-title">Healthguard Pro</h1>
//       <div className="forgot-password-box">
//         <h2 className="forgot-password-title">Forgot Password</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="email"
//             placeholder="Enter email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//           <button type="button" className="forgot-password-btn" onClick={handleSendOtp}>
//             Send OTP
//           </button>
//         </form>
        
//       </div>
//     </div>
//   );
// }

// export default ForgotPasswordPage1;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./forgotPassword-1.css";

function ForgotPasswordPage1() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(""); // To hold error messages from the backend
  const navigate = useNavigate();

  const handleSendOtp = async () => {
    // Validate the email address using regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email.trim() === "" || !emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    try {
      // Send the email to the backend to generate and send OTP
      const response = await fetch('http://localhost:5000/api/send-otp', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        // If OTP is successfully sent, navigate to OTP verification page
        alert("OTP sent successfully! Please check your email.");
        navigate("/verifyOtp", { state: { email } }); // Pass the email to the next page
      } else {
        setError(data.message || "Error sending OTP. Please try again.");
      }
    } catch (error) {
      console.error("Error sending OTP:", error);
      setError("Error sending OTP. Please try again.");
    }
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
        {error && <p className="error-message">{error}</p>} {/* Display error message */}
      </div>
    </div>
  );
}

export default ForgotPasswordPage1;