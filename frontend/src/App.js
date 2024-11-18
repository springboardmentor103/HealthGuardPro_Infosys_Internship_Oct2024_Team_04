import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/loginPage/login";
import Signup from "./pages/signUpPage/signup";
import ForgotPasswordPage1 from "./pages/forgotPassword-1Page/forgotpassword-1";

import ChangePassword from "./pages/changePassword/changePassword";
import OtpVerificationPage from "./pages/verifyOtp/verifyOtp";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />

        <Route path="/signup" element={<Signup />} />
        <Route path="/forgotPassword-1" element={<ForgotPasswordPage1 />} />
        <Route path="/changePassword" element={<ChangePassword />} />
        <Route path="/verifyOtp" element={<OtpVerificationPage />} />
      </Routes>
    </Router>
  );
}

export default App;

