import React from "react";
import quizData from "./QuizData";

import { useNavigate } from "react-router-dom";

export default function Category() {
  const navigate = useNavigate();

  const handleQuizSelect = (quizId) => {
    navigate(`/quiz/${quizId}`);
  };
  return (
    <div className="flex flex-col h-auto gap-5 pl-5 pt-5 pb-5 bg-yellow-200">
      {quizData.map((category, index) => (
        <div className="border p-4" key={index}>
          <div className="text-xl font-bold">{category.category}</div>
          <div className="flex flex-row gap-5">
            {category.quizzes.map((quiz) => (
              <div
                className="flex flex-col justify-center text-center gap-5 border p-4 h-52 w-72"
                key={quiz.id}
              >
                <div className="div">
                  <img
                    className=" h-32 w-full "
                    src="\images\images.png"
                    alt=""
                    onClick={() => handleQuizSelect(quiz.id)}
                  />
                </div>
                <div className="">
                  <button
                    className=""
                    onClick={() => handleQuizSelect(quiz.id)}
                  >
                    {quiz.title}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
