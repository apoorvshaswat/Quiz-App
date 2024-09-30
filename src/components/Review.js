import React, { useState, useEffect } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import quizData from "../data/QuizData";

export default function Review() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizId } = useParams();

  const [questions, setQuestions] = useState([]);

  const {
    score = 0,
    correct = 0,
    wrong = 0,
    unattempted = 0,
    percentage = 0,
  } = location.state || {};

  useEffect(() => {
    const quiz = quizData
      .flatMap((category) => category.quizzes)
      .find((q) => q.id === parseInt(quizId));

    if (quiz) {
      setQuestions(quiz.questions);
    } else {
      navigate("/");
    }
  }, [quizId, navigate]);

  const handleQuizSelect = () => {
    navigate(`/result/${quizId}`, {
      state: {
        score,
        correct,
        wrong,
        unattempted,
        percentage,
      },
    });
  };

  return (
    <div className="h-auto bg-yellow-400 flex flex-col justify-center items-center gap-10 p-5">
      <h2 className="font-bold text-2xl md:text-4xl">Review Questions</h2>
      <div className="space-y-5 w-full max-w-xl">
        {questions.map((question, index) => (
          <div key={index} className="bg-yellow-300 p-4 rounded-lg shadow-md">
            <div>
              <strong>{`Question ${index + 1}: ${question.question}`}</strong>
            </div>
            <div className="list-disc list-inside">
              {question.options.map((option, idx) => (
                <div key={idx}>{`${idx + 1}. ${option}`}</div>
              ))}
            </div>
            <div>
              <strong>Answer: {question.answer}</strong>
            </div>
          </div>
        ))}
        <button
          className="mt-5 h-12 w-full max-w-xs border border-white bg-yellow-300 p-2 rounded-lg text-center hover:bg-yellow-400 transition"
          onClick={handleQuizSelect}
        >
          Back to Result
        </button>
      </div>
    </div>
  );
}
