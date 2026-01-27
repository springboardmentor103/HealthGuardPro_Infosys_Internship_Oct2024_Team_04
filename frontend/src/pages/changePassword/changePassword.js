import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./changePassword.css";

function ChangePassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (newPassword !== confirmNewPassword) {
      alert("Passwords do not match");
      return;
    }

    const email = localStorage.getItem("resetEmail");

    if (!email) {
      alert("Session expired. Please restart password reset.");
      navigate("/");
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:5000/api/auth/change-password",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            newPassword,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        alert(data.message);

        // 🧹 Cleanup
        localStorage.removeItem("resetEmail");

        navigate("/");
      } else {
        alert(data.message || "Failed to change password");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Try again.");
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


