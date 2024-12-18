import React, { useState, useEffect } from "react";
import AuthForm from "../components/ui/authform";
import { Link } from "react-router-dom";
const questions = [
  {
    id: 1,
    questionText: "Which Galaxy does our Solar System belong to?",
    answers: [
      { label: "A", name: "Milky Way Galaxy" },
      { label: "B", name: "Brown Eye Galaxy" },
      { label: "C", name: "Green Eye Galaxy" },
      { label: "D", name: "Yellow Eye Galaxy" },
    ],
  },
  {
    id: 2,
    questionText: "What is the largest planet in our Solar System?",
    answers: [
      { label: "A", name: "Earth" },
      { label: "B", name: "Jupiter" },
      { label: "C", name: "Saturn" },
      { label: "D", name: "Neptune" },
    ],
  },
  {
    id: 3,
    questionText: "Which planet is known as the Red Planet?",
    answers: [
      { label: "A", name: "Venus" },
      { label: "B", name: "Mars" },
      { label: "C", name: "Mercury" },
      { label: "D", name: "Jupiter" },
    ],
  },
  {
    id: 4,
    questionText: "What is the smallest planet in our Solar System?",
    answers: [
      { label: "A", name: "Earth" },
      { label: "B", name: "Mars" },
      { label: "C", name: "Mercury" },
      { label: "D", name: "Venus" },
    ],
  },
];

const Questions = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [isSubmitted, setIsSubmitted] = useState(true);

  const handleClick = (questionId, answer) => {
    setSelectedAnswers((prevAnswers) => ({
      ...prevAnswers,
      [questionId]: answer,
    }));
  };

  const handleSubmit = () => {
    console.log("Selected answers:", selectedAnswers);

    // Add logic to process or submit selected answers
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="questions-page">
      {isModalOpen && (
        <AuthForm
          headerName="Please Login First"
          closemodal={closeModal}
          cta="Login"
        />
      )}

      <div className="holder">
        {questions.map((question) => (
          <div key={question.id} className="question-container">
            <div className="question">
              <p>
                {question.id}. {question.questionText}
              </p>
            </div>
            <div className="answers">
              {question.answers.map((item) => (
                <div
                  key={item.label}
                  className={
                    selectedAnswers[question.id] === item.name
                      ? "answer selected-answer"
                      : "answer"
                  }
                  onClick={() => handleClick(question.id, item.name)}
                >
                  <div className="option-label">{item.label}</div>
                  <div className="option-name">{item.name}</div>
                </div>
              ))}
            </div>
          </div>
        ))}
        {/* work on tegrating the two without disabling the button */}
        {isSubmitted ? (
          ""
        ) : (
          <h3 style={{ color: "red" }}>please answer all the questions</h3>
        )}
        {/* work on displaying this when not all has been submitted */}
        <Link to="/submitted">
          <button
            id="submit-button"
            onClick={handleSubmit}
            disabled={Object.keys(selectedAnswers).length < questions.length}
          >
            Submit
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Questions;
