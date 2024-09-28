import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Result() {
  const location = useLocation();
  const navigate = useNavigate();

  const { score, total } = location.state || { score: 0, total: 0 };

  const handleBackToCategories = () => {
    navigate("/");
  };

  return (
    <div className="bg-yellow-400 flex flex-col justify-center items-center h-screen gap-10 text-3xl">
      <div
        className="div bg-white w-1/2 text-center p-5"
        style={{
          backgroundColor: `#FFFFE0`,
        }}
      >
        <h2>Quiz Results</h2>
      </div>
      <div
        className="div bg-white w-1/2 text-center p-5"
        style={{
          backgroundColor: `#FFFFE0`,
        }}
      >
        Score: {score}
      </div>
      <div
        className="div bg-white w-1/2 text-center p-5"
        style={{
          backgroundColor: `#FFFFE0`,
        }}
      >
        Total Points: {score * 4}
      </div>
      <div
        className="div bg-white w-1/2 text-center p-5"
        style={{
          backgroundColor: `#FFFFE0`,
        }}
      >
        <button onClick={handleBackToCategories}>Back to Categories</button>
      </div>
    </div>
  );
}
