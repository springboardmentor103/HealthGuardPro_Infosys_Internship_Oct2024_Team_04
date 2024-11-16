import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

function Login() {
  return (
    // <div className="login-container">
    //   <h1>Healthguard Pro</h1>
    //   <div className="login-box">
    //     <h2>Log In</h2>
    //     <input type="email" placeholder="Enter email" />
    //     <input type="password" placeholder="Enter password" />
    //     <button className="login-btn">Sign In</button>
        // <p>
        //   New user? <Link to="/signup">Sign up</Link>
        // </p>
    //     <p>
    //       <Link to="/forgot-password1">Forgot password?</Link>
    //     </p>
    //   </div>
    // </div>
    <div className="login-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="login-box">
      <h2 className="login-title">Log In</h2> 
      <input type="email" placeholder="Enter email" />
      <input type="password" placeholder="Enter password" />
      <button className="login-btn">Sign In</button>
      <div className="signup-link">
      <p>
                    New User? <a href="/">sign up</a>
                </p>
      
      <p><a href="/forgot-password1">Forgot password</a></p>

      </div>
      </div>

    </div>

  );
}

export default Login;


