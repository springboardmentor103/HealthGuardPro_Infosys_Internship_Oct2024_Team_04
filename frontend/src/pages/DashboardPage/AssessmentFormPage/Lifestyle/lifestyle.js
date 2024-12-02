import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./lifestyle.css";

const questions = [
  {
    id: 1,
    question: "How often do you exercise per week?",
    options: {
      "Every day": 10,
      "4-5 times": 7,
      "2-3 times": 5,
      "Rarely": 2,
    },
  },
  {
    id: 2,
    question: "How many hours of sleep do you get each night?",
    options: {
      "7-9 hours": 10,
      "5-7 hours": 7,
      "3-5 hours": 5,
      "Less than 3 hours": 2,
    },
  },
  {
    id: 3,
    question: "Do you follow a balanced diet?",
    options: {
      "Yes, always": 10,
      "Mostly": 7,
      "Sometimes": 5,
      "No, rarely": 2,
    },
  },
  {
    id: 4,
    question: "How much water do you drink daily?",
    options: {
      "More than 8 cups": 10,
      "6-8 cups": 7,
      "4-6 cups": 5,
      "Less than 4 cups": 2,
    },
  },
  {
    id: 5,
    question: "How often do you take breaks from work or study?",
    options: {
      "Every hour": 10,
      "Every 2-3 hours": 7,
      "Rarely": 5,
      "Never": 2,
    },
  },
  {
    id: 6,
    question: "Do you engage in any hobbies or activities outside work/school?",
    options: {
      "Yes, regularly": 10,
      "Occasionally": 7,
      "Rarely": 5,
      "Never": 2,
    },
  },
  {
    id: 7,
    question: "How would you rate your work-life balance?",
    options: {
      "Excellent": 10,
      "Good": 7,
      "Fair": 5,
      "Poor": 2,
    },
  },
  {
    id: 8,
    question: "How often do you feel stressed or overwhelmed?",
    options: {
      "Never": 10,
      "Occasionally": 7,
      "Frequently": 5,
      "Always": 2,
    },
  },
  {
    id: 9,
    question: "How much screen time do you have each day?",
    options: {
      "Less than 2 hours": 10,
      "2-4 hours": 7,
      "4-6 hours": 5,
      "More than 6 hours": 2,
    },
  },
  {
    id: 10,
    question: "How often do you practice mindfulness or relaxation techniques?",
    options: {
      "Every day": 10,
      "Occasionally": 7,
      "Rarely": 5,
      "Never": 2,
    },
  },
];

const Lifestyle = () => {
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
    <div className="lifestyle-container">
      <h1>Lifestyle Assessment</h1>
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

export default Lifestyle;
