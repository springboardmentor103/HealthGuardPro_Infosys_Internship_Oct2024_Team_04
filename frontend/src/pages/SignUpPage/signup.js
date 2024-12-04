import React from "react";
import "./signup.css";
import { Link } from "react-router-dom";


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
                Already have an account? <Link to="/login">Sign in</Link>                </p>
            </div>
        </div>
    );
}

export default Signup;