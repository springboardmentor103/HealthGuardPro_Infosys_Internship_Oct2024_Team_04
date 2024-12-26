// import React from "react";
// import "./changePassword.css";
//  import { Link } from "react-router-dom";

// function ChangePassword() {
//   return (
//     <div className="change-password-container">
//       <h1>Healthguard Pro</h1>
//       <div className="change-password-box">
//         <h2>Change Password</h2>
//         <form className="change-password-form">

//         <input type="password" placeholder="Enter old password" />
//         <input type="password" placeholder="Enter new password" />
//         <button type="submit">Confirm</button>
//         </form>
//         <p className="back-to-login">
//         Go back to <Link to="/">Log in</Link>
//         </p>
//       </div>
//     </div>
//   );
// }

// export default ChangePassword;

// import React, { useState } from "react";
// import "./changePassword.css";
// import { Link } from "react-router-dom";

// function ChangePassword() {
//     const [oldPassword, setOldPassword] = useState("");
//     const [newPassword, setNewPassword] = useState("");

//     const handleSubmit = async (e) => {
//         e.preventDefault();

//         try {
//             // Retrieve email from localStorage or token (if stored)
//             const email = localStorage.getItem("email"); // Ensure email is saved during login
//             if (!email) {
//                 alert("Unable to retrieve user email. Please log in again.");
//                 return;
//             }

//             const response = await fetch("http://localhost:5000/api/change-password", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                     Authorization: `Bearer ${localStorage.getItem("token")}`, // Correctly formatted template literal
//                 },
//                 body: JSON.stringify({
//                     email: email,
//                     currentPassword: oldPassword,
//                     newPassword: newPassword,
//                 }),
//             });

//             const data = await response.json();

//             if (response.ok) {
//                 alert(data.message); // Success alert
//             } else {
//                 alert(data.message || "An error occurred while changing the password.");
//             }
//         } catch (error) {
//             console.error("Error:", error);
//             alert("An error occurred while processing your request.");
//         }
//     };

//     return (
//         <div className="change-password-container">
//             <h1>Healthguard Pro</h1>
//             <div className="change-password-box">
//                 <h2>Change Password</h2>
//                 <form className="change-password-form" onSubmit={handleSubmit}>
//                     <input
//                         type="password"
//                         placeholder="Enter old password"
//                         value={oldPassword}
//                         onChange={(e) => setOldPassword(e.target.value)}
//                         required
//                     />
//                     <input
//                         type="password"
//                         placeholder="Enter new password"
//                         value={newPassword}
//                         onChange={(e) => setNewPassword(e.target.value)}
//                         required
//                     />
//                     <button type="submit">Confirm</button>
//                 </form>
//                 <p className="back-to-login">
//                     Go back to <Link to="/">Log in</Link>
//                 </p>
//             </div>
//         </div>
//     );
// }

// export default ChangePassword;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./changePassword.css";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate that the new passwords match
    if (newPassword !== confirmNewPassword) {
      alert("New passwords do not match. Please try again.");
      return;
    }

    try {
      const email = localStorage.getItem("email");
      if (!email) {
        alert("Unable to retrieve user email. Please log in again.");
        return;
      }

      const response = await fetch("http://localhost:5000/api/auth/change-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        body: JSON.stringify({
          email: email,
          newPassword: newPassword,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(data.message); // Show success message
        navigate("/"); // Redirect to login page
      } else {
        alert(data.message || "An error occurred while changing the password.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred while processing your request.");
    }
  };

  return (
    <div className="change-password-container">
      <h1>Healthguard Pro</h1>
      <div className="change-password-box">
        <h2>Change Password</h2>
        <form className="change-password-form" onSubmit={handleSubmit}>
          <input
            type="password"
            placeholder="Enter new password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Confirm new password"
            value={confirmNewPassword}
            onChange={(e) => setConfirmNewPassword(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
        </form>
        <p className="back-to-login">
          Go back to <Link to="/">Log in</Link>
        </p>
      </div>
    </div>
  );
}

export default ChangePassword;

