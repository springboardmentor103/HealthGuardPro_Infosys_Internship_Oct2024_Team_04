// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./verifyOtp.css";

// function OtpVerificationPage() {
//   const [otp, setOtp] = useState("");
//   const navigate = useNavigate();

//   const handleVerifyOtp = () => {
//     // Validate the OTP (example: OTP must be 6 digits)
//     if (otp.trim() === "" || otp.length !== 6) {
//       alert("Please enter a valid 6-digit OTP.");
//       return;
//     }
//     // Navigate to Change Password page
//     navigate("/changePassword");
//   };

//   return (
//     <div className="otp-container">
//       <h1 className="app-title">Healthguard Pro</h1>
//       <div className="otp-box">
//         <h2 className="otp-title">Verify Account</h2>
//         <form onSubmit={(e) => e.preventDefault()}>
//           <input
//             type="text"
//             placeholder="Enter OTP"
//             value={otp}
//             onChange={(e) => setOtp(e.target.value)}
//             required
//           />
//           <button type="button" className="otp-btn" onClick={handleVerifyOtp}>
//             Verify
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default OtpVerificationPage;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./verifyOtp.css";

function OtpVerificationPage() {
  const [otp, setOtp] = useState("");
  const navigate = useNavigate();

  const handleVerifyOtp = () => {
    // Validate the OTP (example: OTP must be 6 digits)
    if (otp.trim() === "" || otp.length !== 6) {
      alert("Please enter a valid 6-digit OTP.");
      return;
    }
    // Navigate to Change Password page
    navigate("/changePassword");
  };

  return (
    <div className="otp-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="otp-box">
        <h2 className="otp-title">Verify Account</h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            type="text"
            placeholder="Enter OTP"
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            required
          />
          <button type="button" className="otp-btn" onClick={handleVerifyOtp}>
            Verify
          </button>
        </form>
      </div>
    </div>
  );
}

export default OtpVerificationPage;
