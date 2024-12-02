import React, { useState } from "react";
import "./login.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email || !password) {
      alert("Enter the valid credentials");
      return;
    }

    // Fetch user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && storedUser.email === email && storedUser.password === password) {
      alert("Login successful!");
      navigate("/dashboard");
    } else {
      alert("The credentials entered are not correct");
    }
  };

  return (
    <div className="login-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="login-box">
        <h2 className="login-title">Log In</h2>
        <input
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-btn" onClick={handleLogin}>
          Sign In
        </button>
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

