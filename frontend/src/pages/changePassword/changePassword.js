import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
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

