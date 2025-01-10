# HealthGuardPro_Infosys_Internship_Oct2024_Team_04

Here we will track the health status of the user.

## Table of Contents

1. [Project Overview](#project-overview)
2. [Project Structure](#project-structure)
3. [Setup Instructions](#setup-instructions)
4. [Running the Application](#running-the-application)
5. [API Endpoints](#api-endpoints)
6. [Frontend Components](#frontend-components)
7. [Styling](#styling)
8. [Testing](#testing)
9. [License](#license)

## Project Overview

HealthGuard Pro is a health tracking application that allows users to sign up, log in, and manage their health data. The application includes features such as password reset, OTP verification, and more.

## Project Structure
HealthGuardPro/
│
├── backend/
│   ├── config/
│   │   └── database.js
│   ├── controllers/
│   │   ├── quizController.js
│   │   └── userController.js
│   ├── middleware/
│   │   └── authenticate.js
│   ├── models/
│   │   └── User.js
│   ├── routes/
│   │   ├── quizRoutes.js
│   │   └── userRoutes.js
│   ├── .env
│   └── server.js
│
├── frontend/
│   ├── src/
│   │   ├── pages/
│   │   │   ├── LoginPage/
│   │   │   │   └── login.js
│   │   │   ├── SignUpPage/
│   │   │   │   └── signup.js
│   │   │   ├── forgotPassword-1Page/
│   │   │   │   └── forgotpassword-1.js
│   │   │   ├── verifyOtp/
│   │   │   │   └── verifyOtp.js
│   │   │   ├── changePassword/
│   │   │   │   └── changePassword.js
│   │   │   ├── DashboardPage/
│   │   │   │   ├── dashboard.js
│   │   │   │   ├── AssessmentFormPage/
│   │   │   │   │   ├── assessmentform.js
│   │   │   │   │   ├── PhysicalFitness/
│   │   │   │   │   │   └── physicalFitness.js
│   │   │   │   │   ├── Lifestyle/
│   │   │   │   │   │   └── lifestyle.js
│   │   │   │   │   ├── MentalBeing/
│   │   │   │   │   │   └── mentalBeing.js
│   │   │   │   │   ├── Biomarkers/
│   │   │   │   │   │   └── biomarkers.js
│   │   │   │   │   ├── Nutrition/
│   │   │   │   │   │   └── nutrition.js
│   │   │   │   ├── Blogs/
│   │   │   │   │   ├── Chronic Ailments/
│   │   │   │   │   │   └── Cancer/cancer.js
│   │   │   │   │   │   └── Thyroid/thyroid.js
│   │   │   │   │   └── ...
│   │   │   │   ├── Leaderboard/
│   │   │   │   │   └── leaderboard.js
│   │   │   │   ├── AboutUs/
│   │   │   │   │   └── aboutus.js
│   │   ├── styles/
│   │   │   ├── login.css
│   │   │   ├── signup.css
│   │   │   ├── ...
│   │   ├── components/
│   │   │   ├── protectedRoutes.js
│   │   │   └── publicRoutes.js
│   ├── package.json
│   └── README.md 

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (local installation or MongoDB Atlas)
- npm (v6 or higher)

### Backend Setup

1. Navigate to the backend directory:

    sh
    cd backend
    

2. Install the required dependencies:

    sh
    npm install
    

3. Create a .env file in the backend directory with the following content:

    plaintext
    MONGODB_URI=mongodb+srv://healthguardpro2024:health2024@cluster0.liupn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
    PORT=5000
    JWT_SECRET=mysecretkey
    

4. Start the backend server:

    sh
    npx node
    

### Frontend Setup

1. Navigate to the frontend directory:

    sh
    cd frontend
    

2. Install the required dependencies:

    sh
    npm install
    

3. Start the frontend development server:

    sh
    npm start
    

## Running the Application

1. Ensure MongoDB is running locally or that you have a valid connection string for MongoDB Atlas.
2. Start the backend server by running npm run dev in the backend directory.
3. Start the frontend server by running npm start in the frontend directory.
4. Open your browser and navigate to http://localhost:3000 to view the application.

## API Endpoints


### User Registration

- *Endpoint*: /api/users/register
- *Method*: POST
- *Description*: Registers a new user.
- *Request Body*:
    json
    {
        "fullName": "Ram Raj",
        "email": "Ram.Raj@example.com",
        "password": "password123"
    }
    

### User Login

- *Endpoint*: /api/users/login
- *Method*: POST
- *Description*: Authenticates a user.
- *Request Body*:
    json
    {
        "email": "Ram.Raj@example.com",
        "password": "password123"
    }
    

### Password Reset

- *Endpoint*: /api/forgot-password
- *Method*: POST
- *Description*: Sends an OTP to the user's email for password reset.
- *Request Body*:
    json
    {
        "email": "Ram.Raj@example.com"
    }
    

### Health Tracking
- *Endpoint*: /api/quiz/update-score
- *Method*: POST
- *Description*: Records user's health metrics
- *Request Body*:
    json
    {
        "email": "Ram.Raj@example.com",
        "category": "PhysicalFitness",
        "score": 75
    }
    

### Health History

- *Endpoint*: /api/quiz/scores
- *Method*: POST
- *Description*: Retrieves user's health scores.
- *Request Body*:
    json
    {
        "email": "Ram.Raj@example.com"
    }
    

## Frontend Components

### Login Page
- *File*: frontend/src/pages/LoginPage/login.js
- *Description*: Renders the login form and handles user authentication.

### Signup Page
- *File*: frontend/src/pages/SignUpPage/signup.js
- *Description*: Renders the signup form and handles user registration.

### Forgot Password Page
- *File*: frontend/src/pages/forgotPassword-1Page/forgotpassword-1.js
- *Description*: Renders the forgot password form and handles OTP sending.

### OTP Verification Page
- *File*: frontend/src/pages/verifyOtp/verifyOtp.js
- *Description*: Renders the OTP verification form and handles OTP validation.

### Reset Password Page
- *File*: frontend/src/pages/changePassword/changePassword.js
- *Description*: Renders the reset password form and handles password resetting.

### Health Dashboard
- *File*: frontend/src/pages/DashboardPage/dashboard.js
- *Description*: Main dashboard showing health metrics and graphs.

### Assessment Form Page
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/assessmentform.js
- *Description*: Page containing forms for various health assessments.

### Physical Fitness Assessment
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/PhysicalFitness/physicalFitness.js
- *Description*: Renders the physical fitness assessment form and handles form submission.

### Lifestyle Assessment
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/Lifestyle/lifestyle.js
- *Description*: Renders the lifestyle assessment form and handles form submission.

### Mental Well-Being Assessment
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/MentalBeing/mentalBeing.js
- *Description*: Renders the mental well-being assessment form and handles form submission.

### Biomarkers Assessment
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/Biomarkers/biomarkers.js
- *Description*: Renders the biomarkers assessment form and handles form submission.

### Nutrition Assessment
- *File*: frontend/src/pages/DashboardPage/AssessmentFormPage/Nutrition/nutrition.js
- *Description*: Renders the nutrition assessment form and handles form submission.

### Blogs
- *File*: frontend/src/pages/DashboardPage/Blogs/blogs.js
- *Description*: Main blog page showing a list of blog categories.

### Chronic Ailments Blogs

#### Cancer Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Cancer/cancer.js
- *Description*: Renders the blog content related to cancer.

#### Thyroid Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Thyroid/thyroid.js
- *Description*: Renders the blog content related to thyroid issues.

#### Hypertension Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Hypertension/hypertension.js
- *Description*: Renders the blog content related to hypertension.

#### Asthma Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Asthma/asthma.js
- *Description*: Renders the blog content related to asthma.

#### Arthritis Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Arthritis/arthritis.js
- *Description*: Renders the blog content related to arthritis.

#### Diabetes Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Chronic Ailments/Diabetes/diabetes.js
- *Description*: Renders the blog content related to diabetes.

### Lifestyle Blogs

#### Ayurveda Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Lifestyle/Ayurveda/ayurveda.js
- *Description*: Renders the blog content related to Ayurveda.

#### Beauty Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Lifestyle/Beauty/beauty.js
- *Description*: Renders the blog content related to beauty.

#### Exercise Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Lifestyle/Exercise/exercise.js
- *Description*: Renders the blog content related to exercise.

#### Food & Nutrition Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Lifestyle/Food&Nutrition/food&nutrition.js
- *Description*: Renders the blog content related to food and nutrition.

### Wellness Blogs

#### Men's Health Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/menHealth/menhealth.js
- *Description*: Renders the blog content related to men's health.

#### Women's Health Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/womenHealth/womenhealth.js
- *Description*: Renders the blog content related to women's health.

#### Child Care Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/childCare/childcare.js
- *Description*: Renders the blog content related to child care.

#### Bone Health Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/boneHealth/bonehealth.js
- *Description*: Renders the blog content related to bone health.

#### Sleep Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/sleep/sleep.js
- *Description*: Renders the blog content related to sleep.

#### Oral Health Blog
- *File*: frontend/src/pages/DashboardPage/Blogs/Wellness/oralHealth/oralhealth.js
- *Description*: Renders the blog content related to oral health.

### Leaderboard Page
- *File*: frontend/src/pages/DashboardPage/Leaderboard/leaderboard.js
- *Description*: A dynamic leaderboard displaying real-time user performance from health assessments.

### About Us Page
- *File*: frontend/src/pages/DashboardPage/AboutUs/aboutus.js
- *Description*: Information about the application and the team.

## Styling

The application uses CSS for styling. The styles are organized in the frontend/src/styles directory.

### Example Styles
- *Login Page Styles*: frontend/src/styles/login.css
- *Signup Page Styles*: frontend/src/styles/signup.css
- *Forgot Password Page Styles*: frontend/src/styles/forgotpassword.css
- *OTP Verification Page Styles*: frontend/src/styles/otpverification.css
- *Reset Password Page Styles*: frontend/src/styles/resetpassword.css
- *Dashboard Styles*: frontend/src/styles/dashboard.css
- *LeaderBoard Styles*: frontend/src/styles/leaderboard.css

## Testing

The project uses Jest and React Testing Library for testing.

### Running Tests
To run the tests, navigate to the frontend directory and run:
```sh
npm test
## License
This project is licensed under the MIT License