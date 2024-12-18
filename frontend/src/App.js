import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DashboardPage from "./pages/DashboardPage/dashboard";
import AssessmentFormPage from "./pages/DashboardPage/AssessmentFormPage/assessmentform"
import Signup from "./pages/SignUpPage/signup";
import Login from "./pages/LoginPage/login";
import ForgotPasswordPage1 from "./pages/forgotPassword-1Page/forgotpassword-1";
import ChangePassword from "./pages/changePassword/changePassword";
import OtpVerificationPage from "./pages/verifyOtp/verifyOtp";
import PhysicalFitness from "./pages/DashboardPage/AssessmentFormPage/PhysicalFitness/physicalFitness";
import Lifestyle from "./pages/DashboardPage/AssessmentFormPage/Lifestyle/lifestyle";
import MentalWellBeing from "./pages/DashboardPage/AssessmentFormPage/MentalBeing/mentalBeing";
import Biomarkers from "./pages/DashboardPage/AssessmentFormPage/Biomarkers/biomarkers";
import Nutrition from "./pages/DashboardPage/AssessmentFormPage/Nutrition/nutrition";
import Blogs from "./pages/DashboardPage/Blogs/blogs";
import Cancer from "./pages/DashboardPage/Blogs/Chronic Ailments/Cancer/cancer";
import Thyroid from "./pages/DashboardPage/Blogs/Chronic Ailments/Thyroid/thyroid";
import Hypertension from "./pages/DashboardPage/Blogs/Chronic Ailments/Hypertension/hypertension";
import Asthma from "./pages/DashboardPage/Blogs/Chronic Ailments/Asthma/asthma";
import Arthritis from "./pages/DashboardPage/Blogs/Chronic Ailments/Arthritis/arthritis";
import Ayurveda from "./pages/DashboardPage/Blogs/Lifestyle/Ayurveda/ayurveda";
import Beauty from "./pages/DashboardPage/Blogs/Lifestyle/Beauty/beauty";
import Exercise from "./pages/DashboardPage/Blogs/Lifestyle/Exercise/exercise";
import FoodNutrition from "./pages/DashboardPage/Blogs/Lifestyle/Food&Nutrition/food&nutrition";
import MenHealth from "./pages/DashboardPage/Blogs/Wellness/menHealth/menhealth";
import WomenHealth from "./pages/DashboardPage/Blogs/Wellness/womenHealth.js/womenhealth";
import ChildCare from "./pages/DashboardPage/Blogs/Wellness/childCare/childcare";
import BoneHealth from "./pages/DashboardPage/Blogs/Wellness/boneHealth/bonehealth";
import Sleep from "./pages/DashboardPage/Blogs/Wellness/sleep/sleep";
import OralHealth from "./pages/DashboardPage/Blogs/Wellness/oralHealth/oralhealth";
import Diabetes from "./pages/DashboardPage/Blogs/Chronic Ailments/Diabetes/diabetes";
import Leaderboard from "./pages/DashboardPage/Leaderboard/leaderboard";
import AboutUs from "./pages/DashboardPage/AboutUs/aboutus";

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path="/dashboard" element={<DashboardPage />}/>
      <Route path="/assessment" element={<AssessmentFormPage />}/>
      <Route path="/signup" element={<Signup />}/>
      <Route index element={<Login />}/>
      <Route path="/forgotPassword-1" element={<ForgotPasswordPage1 />} />
      <Route path="/changePassword" element={<ChangePassword />} />
      <Route path="/verifyOtp" element={<OtpVerificationPage />} />
      <Route path="/physical-fitness" element={<PhysicalFitness />}/>
      <Route path="/lifestyle" element={<Lifestyle />}/>
      <Route path="/mental-well-being" element={<MentalWellBeing />}/>
      <Route path="/biomarkers" element={<Biomarkers />}/>
      <Route path="/nutrition" element={<Nutrition />}/>
      <Route path="/blog" element={<Blogs />}/>
      <Route path="/cancer" element={<Cancer />}/>
      <Route path="/thyroid" element={<Thyroid />}/>
      <Route path="/hypertension" element={<Hypertension />}/>
      <Route path="/diabetes" element={<Diabetes />}/>
      <Route path="/asthma" element={<Asthma />}/>
      <Route path="/arthritis" element={<Arthritis />}/>
      <Route path="/ayurveda" element={<Ayurveda />}/>
      <Route path="/beauty" element={<Beauty />}/>
      <Route path="/exercise" element={<Exercise />}/>
      <Route path="/food&nutrition" element={<FoodNutrition />}/>
      <Route path="/menhealth" element={<MenHealth />}/>
      <Route path="/womenhealth" element={<WomenHealth />}/>
      <Route path="/childcare" element={<ChildCare />}/>
      <Route path="/bonehealth" element={<BoneHealth />}/>
      <Route path="/oralhealth" element={<OralHealth />}/>
      <Route path="/sleep" element={<Sleep />}/>
      <Route path="/leaderboard" element={<Leaderboard />}/>
      <Route path="/about-us" element={<AboutUs />}/>

      </Routes>
    </Router>
    </>
  );
}

export default App;
