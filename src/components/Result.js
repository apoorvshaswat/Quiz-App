import React from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();
  const { quizId } = useParams();

  const {
    score = 0,
    correct = 0,
    wrong = 0,
    unattempted = 0,
    percentage = 0,
  } = location.state || {};

  const handleBackToCategories = () => {
    navigate("/");
  };

  const handleQuizSelect = () => {
    navigate(`/review/${quizId}`, {
      state: {
        score,
        correct,
        wrong,
        unattempted,
        percentage,
      },
    });
  };

  const handleLeaderboard = () => {
    navigate(`/leaderboard/${quizId}`, {
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
    <div className="bg-yellow-400 h-auto md:h-[90vh] flex flex-col justify-evenly items-center p-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl rounded-lg">
        <div className="bg-white p-5 text-center rounded-lg">
          Coin Earned: {score}
        </div>
        <div className="bg-white p-5 text-center rounded-lg">
          Your Score: {score}
        </div>
        <div className="bg-white p-5 text-center rounded-lg">
          Correct: {correct}
        </div>
        <div className="bg-white p-5 text-center rounded-lg">
          Incorrect: {wrong}
        </div>
        <div className="bg-white p-5 text-center rounded-lg">
          Percentage: {percentage}
        </div>
        <div className="bg-white p-5 text-center rounded-lg">
          Unattempted: {unattempted}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl mt-5">
        <div className="bg-gray-400 p-5 text-center rounded-lg">
          <button onClick={handleQuizSelect} className="w-full">
            Review
          </button>
        </div>
        <div className="bg-gray-400 p-5 text-center rounded-lg">
          <button onClick={handleLeaderboard} className="w-full">
            Leaderboard
          </button>
        </div>
      </div>
      <div className="mt-5">
        <button
          onClick={handleBackToCategories}
          className="bg-blue-500 text-white p-2 rounded-lg"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
