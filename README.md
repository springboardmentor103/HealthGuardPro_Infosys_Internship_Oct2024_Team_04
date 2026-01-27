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
```
HealthGuardPro/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   ├── Middleware/
│   │   ├── auth.js
│   │   └── errorHandler.js
│   ├── models/
│   │   ├── OTP.js
│   │   └── user.js
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── routes/
│   │   ├── assessmentRoutes.js
│   │   ├── authRoutes.js
│   │   ├── dashboardRoutes.js
│   │   ├── leaderboardRoutes.js
│   │   └── otpRoutes.js
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   └── setupTests.js
│   ├── .env
│   ├── .gitignore
│   ├── index.js
│   ├── package.json
│   └── README.md
│
├── frontend/
│   ├── public/
│   │   ├── index.html
│   │   ├── manifest.json
│   │   └── robots.txt
│   ├── src/
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── App.test.js
│   │   ├── index.css
│   │   ├── index.js
│   │   ├── reportWebVitals.js
│   │   ├── setupTests.js
│   │   ├── components/
│   │   │   ├── protectedRoutes.js
│   │   │   └── publicRoutes.js
│   │   └── pages/
│   │       ├── LoginPage/
│   │       │   ├── login.css
│   │       │   └── login.js
│   │       ├── SignUpPage/
│   │       │   ├── signup.css
│   │       │   └── signup.js
│   │       ├── forgotPassword-1Page/
│   │       │   ├── forgotPassword-1.css
│   │       │   └── forgotpassword-1.js
│   │       ├── verifyOtp/
│   │       │   ├── verifyOtp.css
│   │       │   └── verifyOtp.js
│   │       ├── changePassword/
│   │       │   ├── changePassword.css
│   │       │   └── changePassword.js
│   │       └── DashboardPage/
│   │           ├── dashboard.css
│   │           ├── dashboard.js
│   │           ├── progress.css
│   │           ├── AboutUs/
│   │           │   ├── aboutus.css
│   │           │   └── aboutus.js
│   │           ├── AssessmentFormPage/
│   │           │   ├── assessmentForm.css
│   │           │   ├── assessmentform.js
│   │           │   ├── Biomarkers/
│   │           │   │   ├── biomarkers.css
│   │           │   │   └── biomarkers.js
│   │           │   ├── Lifestyle/
│   │           │   │   ├── lifestyle.css
│   │           │   │   └── lifestyle.js
│   │           │   ├── MentalBeing/
│   │           │   │   ├── mentalBeing.css
│   │           │   │   └── mentalBeing.js
│   │           │   ├── Nutrition/
│   │           │   │   ├── nutrition.css
│   │           │   │   └── nutrition.js
│   │           │   └── PhysicalFitness/
│   │           │       ├── physicalFitness.css
│   │           │       └── physicalFitness.js
│   │           ├── Blogs/
│   │           │   ├── blogs.css
│   │           │   ├── blogs.js
│   │           │   ├── Chronic Ailments/
│   │           │   │   ├── Arthritis/
│   │           │   │   │   ├── arthritis.css
│   │           │   │   │   └── arthritis.js
│   │           │   │   ├── Asthma/
│   │           │   │   │   ├── asthma.css
│   │           │   │   │   └── asthma.js
│   │           │   │   ├── Cancer/
│   │           │   │   │   ├── cancer.css
│   │           │   │   │   └── cancer.js
│   │           │   │   ├── Diabetes/
│   │           │   │   │   ├── diabetes.css
│   │           │   │   │   └── diabetes.js
│   │           │   │   ├── Hypertension/
│   │           │   │   │   ├── hypertension.css
│   │           │   │   │   └── hypertension.js
│   │           │   │   └── Thyroid/
│   │           │   │       ├── thyroid.css
│   │           │   │       └── thyroid.js
│   │           │   ├── Lifestyle/
│   │           │   │   ├── Ayurveda/
│   │           │   │   ├── Beauty/
│   │           │   │   ├── Exercise/
│   │           │   │   └── Food&Nutrition/
│   │           │   └── Wellness/
│   │           │       ├── boneHealth/
│   │           │       ├── childCare/
│   │           │       ├── menHealth/
│   │           │       ├── oralHealth/
│   │           │       ├── sleep/
│   │           │       └── womenHealth/
│   │           └── Leaderboard/
│   │               ├── leaderboard.css
│   │               └── leaderboard.js
│   ├── .gitignore
│   ├── package.json
│   └── README.md
│
├── LICENSE
└── README.md
``` 

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
    MONGODB_URI=mongodb+srv://charanaryan08_db_user:KZI6dD09mxPqcqmW@cluster0.aixai6y.mongodb.net/?appName=Cluster0
    PORT=5000
    JWT_SECRET=mysecretkey
    EMAIL_USER=charanaryan08@gmail.com
    EMAIL_PASS=ogvrgesgnccgdtlt
    

4. Start the backend server:

    ```sh
    node index.js
    ```
    

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

1. **Start Backend Server**:
   - Navigate to the backend directory: `cd backend`
   - Run: `node index.js`
   - The backend server will start on the port specified in your `.env` file (default: 5000)

2. **Start Frontend Development Server**:
   - Navigate to the frontend directory: `cd frontend`
   - Run: `npm start`
   - The frontend will automatically open in your default browser at `http://localhost:3000`

3. **Ensure MongoDB Connection**:
   - Ensure MongoDB is running locally or that you have a valid MongoDB Atlas connection string in the `.env` file

## API Endpoints

All API endpoints are prefixed with `/api`

### Authentication Routes (`/api/auth`)

#### User Registration
- *Endpoint*: `/api/auth/register`
- *Method*: POST
- *Description*: Registers a new user
- *Request Body*:
    ```json
    {
        "fullName": "John Doe",
        "email": "john@example.com",
        "password": "password123"
    }
    ```

#### User Login
- *Endpoint*: `/api/auth/login`
- *Method*: POST
- *Description*: Authenticates a user and returns JWT token
- *Request Body*:
    ```json
    {
        "email": "john@example.com",
        "password": "password123"
    }
    ```

### OTP Routes (`/api/otp`)

#### Send OTP
- *Endpoint*: `/api/otp/send`
- *Method*: POST
- *Description*: Sends OTP to user's email for password reset
- *Request Body*:
    ```json
    {
        "email": "john@example.com"
    }
    ```

#### Verify OTP
- *Endpoint*: `/api/otp/verify`
- *Method*: POST
- *Description*: Verifies the OTP sent to user's email
- *Request Body*:
    ```json
    {
        "email": "john@example.com",
        "otp": "123456"
    }
    ```

### Dashboard Routes (`/api/dashboard`)

#### Get Dashboard Data
- *Endpoint*: `/api/dashboard`
- *Method*: GET
- *Description*: Retrieves user's dashboard data including health metrics
- *Headers*: Authorization: Bearer {token}

### Assessment Routes (`/api/assessments`)

#### Submit Assessment
- *Endpoint*: `/api/assessments/submit`
- *Method*: POST
- *Description*: Submits user's health assessment data
- *Headers*: Authorization: Bearer {token}
- *Request Body*:
    ```json
    {
        "category": "PhysicalFitness",
        "answers": {...},
        "score": 75
    }
    ```

#### Get Assessment History
- *Endpoint*: `/api/assessments/history`
- *Method*: GET
- *Description*: Retrieves user's assessment history
- *Headers*: Authorization: Bearer {token}

### Leaderboard Routes (`/api/leaderboard`)

#### Get Leaderboard
- *Endpoint*: `/api/leaderboard`
- *Method*: GET
- *Description*: Retrieves the leaderboard with top users' health scores
- *Headers*: Authorization: Bearer {token}
    

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

The application uses CSS for styling. Each component has its corresponding CSS file located alongside the JavaScript component files.

### Frontend Styles Organization
- **Authentication Pages**: CSS files in `frontend/src/pages/` for login, signup, forgot password, OTP verification, and change password
- **Dashboard Components**: CSS files in `frontend/src/pages/DashboardPage/` and its subdirectories for all dashboard-related components
- **Main Application Styles**: 
  - `frontend/src/App.css` - Main application styles
  - `frontend/src/index.css` - Global styles

## Testing

The project uses Jest and React Testing Library for testing.

### Running Tests
To run the tests, navigate to the frontend directory and run:
```sh
npm test
## License
This project is licensed under the MIT License