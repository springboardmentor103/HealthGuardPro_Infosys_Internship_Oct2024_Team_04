import React from "react";
import "./changePassword.css";
 import { Link } from "react-router-dom";

function ChangePassword() {
  return (
    <div className="change-password-container">
      <h1>Healthguard Pro</h1>
      <div className="change-password-box">
        <h2>Change Password</h2>
        <form className="change-password-form">

        <input type="password" placeholder="Enter old password" />
        <input type="password" placeholder="Enter new password" />
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
