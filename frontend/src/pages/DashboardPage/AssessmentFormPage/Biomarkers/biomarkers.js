// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import "./biomarkers.css";

// const questions = [
//   {
//     id: 1,
//     question: "What are biomarkers?",
//     options: {
//       "Biological indicators that provide measurable information about health, disease, or treatment responses": 10,
//       "An instrument used to measure health metrics": 2,
//       "A type of medical treatment": 5,
//       "A method for diagnosing physical injuries": 7,
//     },
//   },
//   {
//     id: 2,
//     question: "Which of the following is an example of a biomarker?",
//     options: {
//       "Blood pressure, cholesterol levels, or genetic mutations": 10,
//       "A patient's medical history": 5,
//       "The color of a patient's eyes": 2,
//       "A treatment's side effects": 7,
//     },
//   },
//   {
//     id: 3,
//     question: "What is the purpose of monitoring biomarkers?",
//     options: {
//       "To predict a person's risk of developing certain conditions or diseases": 10,
//       "To measure a person's mood": 5,
//       "To track a person's daily activities": 2,
//       "To monitor someone's sleep patterns": 7,
//     },
//   },
//   {
//     id: 4,
//     question: "Which of the following is NOT a typical biomarker?",
//     options: {
//       "Genetic mutations": 2,
//       "Cholesterol levels": 5,
//       "Eye color": 10,
//       "Blood pressure": 7,
//     },
//   },
//   {
//     id: 5,
//     question: "How can biomarkers be used in treatment plans?",
//     options: {
//       "To assess the effectiveness of a treatment or medication": 10,
//       "To measure a patient's weight": 2,
//       "To monitor a patient's location": 5,
//       "To suggest cosmetic changes to a patient": 7,
//     },
//   },
//   {
//     id: 6,
//     question: "Which of these is an example of a genetic biomarker?",
//     options: {
//       "BRCA1 gene mutation, which increases the risk of breast cancer": 10,
//       "Heart rate variability": 5,
//       "Body mass index (BMI)": 7,
//       "Cholesterol levels": 2,
//     },
//   },
//   {
//     id: 7,
//     question: "How are biomarkers measured?",
//     options: {
//       "Through blood tests, imaging scans, or genetic analysis": 10,
//       "By observing physical traits alone": 5,
//       "Through mental health questionnaires": 2,
//       "By tracking exercise habits": 7,
//     },
//   },
//   {
//     id: 8,
//     question: "What can the presence of certain biomarkers indicate?",
//     options: {
//       "The presence of a disease or health condition": 10,
//       "A person's income level": 5,
//       "A person's emotional state": 7,
//       "The likelihood of a person moving to a new house": 2,
//     },
//   },
//   {
//     id: 9,
//     question: "Can biomarkers change over time?",
//     options: {
//       "Yes, they can fluctuate due to various factors such as age, lifestyle, and treatment": 10,
//       "No, biomarkers remain constant throughout life": 2,
//       "Yes, but only with significant medical intervention": 7,
//       "No, they only change if you go through surgery": 5,
//     },
//   },
//   {
//     id: 10,
//     question: "Which of the following is a type of biomarker used in cancer detection?",
//     options: {
//       "Tumor markers, such as PSA (prostate-specific antigen)": 10,
//       "Heart rate variability": 5,
//       "Sleep quality": 2,
//       "Blood sugar levels": 7,
//     },
//   },
// ];

// const Biomarkers = () => {
//   const navigate = useNavigate();
//   const [answers, setAnswers] = useState({});

//   const handleOptionChange = (questionId, option) => {
//     setAnswers((prevAnswers) => ({
//       ...prevAnswers,
//       [questionId]: option,
//     }));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     navigate("/dashboard");
//   };

//   return (
//     <div className="biomarkers-container">
//       <h1>Biomarkers Assessment</h1>
//       <form onSubmit={handleSubmit}>
//         {questions.map((q) => (
//           <div className="question-card" key={q.id}>
//             <h3>{q.question}</h3>
//             <div className="options-container">
//               {Object.entries(q.options).map(([option, score]) => (
//                 <label key={option} className="option-label">
//                   <input
//                     type="radio"
//                     name={`question-${q.id}`}
//                     value={score}
//                     checked={answers[q.id] === score}
//                     onChange={() => handleOptionChange(q.id, score)}
//                   />
//                   {option}
//                 </label>
//               ))}
//             </div>
//           </div>
//         ))}
//         <button type="submit" className="submit-btn">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Biomarkers;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./biomarkers.css";

const questions = [
  {
    id: 1,
    question: "What is your current cholesterol level?",
    options: {
      "Less than 150 mg/dL": 10,
      "150-200 mg/dL": 7,
      "201-250 mg/dL": 5,
      "More than 250 mg/dL": 2,
    },
  },
  {
    id: 2,
    question: "What is your current blood pressure?",
    options: {
      "120/80 mmHg or lower": 10,
      "121/81 mmHg to 139/89 mmHg": 7,
      "140/90 mmHg to 159/99 mmHg": 5,
      "160/100 mmHg or higher": 2,
    },
  },
  {
    id: 3,
    question: "What is your fasting blood sugar level?",
    options: {
      "Below 100 mg/dL": 10,
      "100-125 mg/dL": 7,
      "126-150 mg/dL": 5,
      "Above 150 mg/dL": 2,
    },
  },
  {
    id: 4,
    question: "How often do you monitor your cholesterol levels?",
    options: {
      "Regularly (every 6 months)": 10,
      "Occasionally (every year)": 7,
      "Rarely (once every few years)": 5,
      "Never": 2,
    },
  },
  {
    id: 5,
    question: "Do you have a family history of high cholesterol or heart disease?",
    options: {
      "No family history": 10,
      "Yes, some history": 5,
      "Yes, significant family history": 2,
    },
  },
  {
    id: 6,
    question: "How often do you engage in physical activity or exercise?",
    options: {
      "Regularly (3-5 days a week)": 10,
      "Occasionally (1-2 days a week)": 7,
      "Rarely (once a month or less)": 5,
      "Never": 2,
    },
  },
  {
    id: 7,
    question: "Do you smoke?",
    options: {
      "No": 10,
      "Yes, but I am trying to quit": 5,
      "Yes, I smoke regularly": 2,
    },
  },
  {
    id: 8,
    question: "What is your current body mass index (BMI)?",
    options: {
      "Less than 24.9 (Normal weight)": 10,
      "25-29.9 (Overweight)": 7,
      "30 or more (Obesity)": 5,
      "Not sure": 2,
    },
  },
  {
    id: 9,
    question: "What is your current triglyceride level?",
    options: {
      "Below 150 mg/dL": 10,
      "150-199 mg/dL": 7,
      "200-499 mg/dL": 5,
      "500 mg/dL or higher": 2,
    },
  },
  {
    id: 10,
    question: "How often do you consume fatty or processed foods?",
    options: {
      "Rarely or never": 10,
      "Occasionally (1-2 times a week)": 7,
      "Frequently (3-4 times a week)": 5,
      "Daily": 2,
    },
  },
  {
    id: 11,
    question: "Do you consume alcohol?",
    options: {
      "No": 10,
      "Occasionally (1-2 times a week)": 7,
      "Frequently (3-4 times a week)": 5,
      "Daily": 2,
    },
  },
  {
    id: 12,
    question: "How would you rate your overall cardiovascular health?",
    options: {
      "Excellent": 10,
      "Good": 7,
      "Fair": 5,
      "Poor": 2,
    },
  },
  {
    id: 13,
    question: "What is your current vitamin D level?",
    options: {
      "Normal (30-100 ng/mL)": 10,
      "Low (20-29 ng/mL)": 7,
      "Deficient (less than 20 ng/mL)": 5,
      "Not tested": 2,
    },
  },
  {
    id: 14,
    question: "How often do you get a health checkup?",
    options: {
      "Annually or more often": 10,
      "Every 2 years": 7,
      "Every 3 years or less": 5,
      "Never": 2,
    },
  },
];

const BioMarkers = () => {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  const handleOptionChange = (questionId, option) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: option,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalScore = Object.values(answers).reduce((sum, score) => sum + score, 0);

    // Save the score in localStorage (or directly to backend)
    localStorage.setItem("biomarkersScore", totalScore);

    // Redirect to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="biomarkers-container">
      <h1>BioMarkers Assessment</h1>
      <form onSubmit={handleSubmit}>
        {questions.map((q) => (
          <div className="question-card" key={q.id}>
            <h3>{q.question}</h3>
            <div className="options-container">
              {Object.entries(q.options).map(([option, score]) => (
                <label key={option} className="option-label">
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={score}
                    checked={answers[q.id] === score}
                    onChange={() => handleOptionChange(q.id, score)}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>
        ))}
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
  );
};

export default BioMarkers;




