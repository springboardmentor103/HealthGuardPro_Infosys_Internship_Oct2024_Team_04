import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    
    <div className="login-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="login-box">
      <h2 className="login-title">Log In</h2> 
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button className="login-btn">Sign In</button>
      <div className="signup-link">
      <p>
      New User? <Link to="/signup">Sign up</Link>
                </p>
      
      <p><a href="/forgotPassword-1">Forgot password</a></p>

      </div>
      </div>

    </div>

  );
}

export default Login;
