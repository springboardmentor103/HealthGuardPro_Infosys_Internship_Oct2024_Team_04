import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./biomarkers.css";

const questions = [
  {
    id: 1,
    question: "What are biomarkers?",
    options: {
      "Biological indicators that provide measurable information about health, disease, or treatment responses": 10,
      "An instrument used to measure health metrics": 2,
      "A type of medical treatment": 5,
      "A method for diagnosing physical injuries": 7,
    },
  },
  {
    id: 2,
    question: "Which of the following is an example of a biomarker?",
    options: {
      "Blood pressure, cholesterol levels, or genetic mutations": 10,
      "A patient's medical history": 5,
      "The color of a patient's eyes": 2,
      "A treatment's side effects": 7,
    },
  },
  {
    id: 3,
    question: "What is the purpose of monitoring biomarkers?",
    options: {
      "To predict a person's risk of developing certain conditions or diseases": 10,
      "To measure a person's mood": 5,
      "To track a person's daily activities": 2,
      "To monitor someone's sleep patterns": 7,
    },
  },
  {
    id: 4,
    question: "Which of the following is NOT a typical biomarker?",
    options: {
      "Genetic mutations": 2,
      "Cholesterol levels": 5,
      "Eye color": 10,
      "Blood pressure": 7,
    },
  },
  {
    id: 5,
    question: "How can biomarkers be used in treatment plans?",
    options: {
      "To assess the effectiveness of a treatment or medication": 10,
      "To measure a patient's weight": 2,
      "To monitor a patient's location": 5,
      "To suggest cosmetic changes to a patient": 7,
    },
  },
  {
    id: 6,
    question: "Which of these is an example of a genetic biomarker?",
    options: {
      "BRCA1 gene mutation, which increases the risk of breast cancer": 10,
      "Heart rate variability": 5,
      "Body mass index (BMI)": 7,
      "Cholesterol levels": 2,
    },
  },
  {
    id: 7,
    question: "How are biomarkers measured?",
    options: {
      "Through blood tests, imaging scans, or genetic analysis": 10,
      "By observing physical traits alone": 5,
      "Through mental health questionnaires": 2,
      "By tracking exercise habits": 7,
    },
  },
  {
    id: 8,
    question: "What can the presence of certain biomarkers indicate?",
    options: {
      "The presence of a disease or health condition": 10,
      "A person's income level": 5,
      "A person's emotional state": 7,
      "The likelihood of a person moving to a new house": 2,
    },
  },
  {
    id: 9,
    question: "Can biomarkers change over time?",
    options: {
      "Yes, they can fluctuate due to various factors such as age, lifestyle, and treatment": 10,
      "No, biomarkers remain constant throughout life": 2,
      "Yes, but only with significant medical intervention": 7,
      "No, they only change if you go through surgery": 5,
    },
  },
  {
    id: 10,
    question: "Which of the following is a type of biomarker used in cancer detection?",
    options: {
      "Tumor markers, such as PSA (prostate-specific antigen)": 10,
      "Heart rate variability": 5,
      "Sleep quality": 2,
      "Blood sugar levels": 7,
    },
  },
];

const Biomarkers = () => {
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
    navigate("/dashboard");
  };

  return (
    <div className="biomarkers-container">
      <h1>Biomarkers Assessment</h1>
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
        <button type="submit" className="submit-btn">
          Submit
        </button>
      </form>
    </div>
  );
};

export default Biomarkers;



