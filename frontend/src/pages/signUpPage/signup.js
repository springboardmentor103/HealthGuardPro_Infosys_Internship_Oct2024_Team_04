import React from "react";
import "./signup.css";

function Signup() {
    return (
        <div className="signup-page">
            <h1 className="app-title">Healthguard Pro</h1>
            <div className="signup-box">
                <h2 className="signup-title">Register</h2>
                <form>
                    <input type="email" placeholder="Enter email" required />
                    <input type="password" placeholder="Enter password" required />
                    <input type="password" placeholder="Confirm password" required />
                    <button type="submit">Sign Up</button>
                </form>
                <p className="signin-link">
                    already have an account? <a href="/login">sign in</a>
                </p>
            </div>
        </div>
    );
}

export default Signup;
