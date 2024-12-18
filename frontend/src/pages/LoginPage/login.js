// import React from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";

// function Login() {
//   const navigate = useNavigate(); // Hook for navigation

//   const handleLogin = () => {
//     // Logic for handling login can go here
//     // For now, just navigate to /dashboard
//     navigate("/dashboard");
//   };

//   return (
//     <div className="login-container">
//       <h1 className="app-title">Healthguard Pro</h1>
//       <div className="login-box">
//         <h2 className="login-title">Log In</h2>
//         <input type="email" placeholder="Enter email" />
//         <input type="password" placeholder="Enter password" />
//         <button className="login-btn" onClick={handleLogin}>
//           Sign In
//         </button>
//         <div className="signup-link">
//           <p>
//             New User? <Link to="/signup">Sign up</Link>
//           </p>
//           <p>
//             <a href="/forgotPassword-1">Forgot password</a>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;

// import React, { useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
// import "./login.css";

// function Login() {
//   const [formData, setFormData] = useState({
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await fetch("http://localhost:5000/api/users/login", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(formData),
//       });

//       const data = await response.json();
//       if (response.status === 200) {
//         alert(data.message);
//         localStorage.setItem("token", data.token); // Save token for authentication
//         navigate("/dashboard", { state: { username: data.username } });
//       } else {
//         alert(data.message);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//     }
//   };

//   return (
//     <div className="login-container">
//       <h1 className="app-title">Healthguard Pro</h1>
//       <div className="login-box">
//         <h2 className="login-title">Log In</h2>
//         <form onSubmit={handleSubmit}>
//           <input
//             type="email"
//             name="email"
//             placeholder="Enter email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//           <input
//             type="password"
//             name="password"
//             placeholder="Enter password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//           <button className="login-btn" type="submit">
//             Sign In
//           </button>
//         </form>
//         <div className="signup-link">
//           <p>
//             New User? <Link to="/signup">Sign up</Link>
//           </p>
//           <p>
//             <Link to="/forgotPassword-1">Forgot password?</Link>
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/users/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.status === 200) {
        alert(data.message);
        localStorage.setItem("token", data.token); // Save token for authentication
        localStorage.setItem("email", formData.email); // Save email after successful login
        navigate("/dashboard", { state: { username: data.username } });
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <div className="login-container">
      <h1 className="app-title">Healthguard Pro</h1>
      <div className="login-box">
        <h2 className="login-title">Log In</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Enter email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Enter password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button className="login-btn" type="submit">
            Sign In
          </button>
        </form>
        <div className="signup-link">
          <p>
            New User? <Link to="/signup">Sign up</Link>
          </p>
          <p>
            <Link to="/forgotPassword-1">Forgot password?</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;