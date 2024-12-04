import React from "react";
import "./forgotpassword1.css";

function ForgotPassword() {
    return (
        <div className="signup-page">
            <h1 className="app-title">Healthguard Pro</h1>
            <div className="signup-box">
                <h2 className="signup-title">Forgot Password</h2>
                <form>
                    <input type="text" placeholder="Enter Email" required />
                    <button type="submit">Get OTP</button>
                </form>
                <p className="signin-link">
                <a href="/login">Try another way?</a>
                </p>
            </div>
        </div>
    );
}
export default ForgotPassword;