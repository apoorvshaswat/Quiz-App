import React, { useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import userData from "../data/UserData";

export default function Leaderboard() {
  const navigate = useNavigate();
  const location = useLocation();
  const { quizId } = useParams();

  const [visibleCount, setVisibleCount] = useState(10);

  const {
    score = 0,
    correct = 0,
    wrong = 0,
    unattempted = 0,
    percentage = 0,
  } = location.state || {};

  const handleLoadMore = () => {
    setVisibleCount((prevCount) => prevCount + 10);
  };

  const handleQuizSelect = () => {
    navigate(`/result/${quizId}`, {
      state: { score, correct, wrong, unattempted, percentage },
    });
  };

  return (
    <div className="flex flex-col justify-center items-center bg-yellow-400 w-full p-5">
      <div className="font-bold text-3xl md:text-4xl">Leaderboard</div>
      <div className="flex flex-col w-full max-w-4xl pt-5 gap-5 mb-5">
        {userData.slice(0, visibleCount).map((user, index) => (
          <div
            className="flex w-full border border-white rounded-lg bg-yellow-300 shadow-md"
            key={index}
          >
            <div className="border border-yellow-600 p-2 w-1/4 text-center">
              {index + 1}
            </div>
            <div className="border border-yellow-600 p-2 w-1/2 text-center">
              {user.name}
            </div>
            <div className="border border-yellow-600 p-2 w-1/4 text-center">
              {user.coins}
            </div>
          </div>
        ))}
      </div>

      {visibleCount < userData.length && (
        <button
          onClick={handleLoadMore}
          className="mt-5 mb-5 p-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-500 transition"
        >
          Load More
        </button>
      )}

      <button
        className="mt-5 h-12 w-full max-w-xs border-white bg-yellow-300 p-2 rounded-lg text-center"
        onClick={handleQuizSelect}
      >
        Back to Result
      </button>
    </div>
  );
}
