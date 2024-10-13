import React from "react";
import { useNavigate } from "react-router-dom";
import quizData from "../data/QuizData";

export default function Category() {
  const navigate = useNavigate();

  const handleQuizSelect = (quizId) => {
    navigate(`/intro/${quizId}`);
  };

  return (
    <div className="flex flex-col gap-5 p-0 md:p-5 bg-yellow-200">
      {quizData.map((category, index) => (
        <div className=" p-4 " key={index}>
          <div className="text-xl font-bold">{category.category}</div>
          <div className="flex overflow-x-auto gap-4 py-2">
            {category.quizzes.map((quiz) => (
              <div
                className="flex flex-col justify-start text-center border h-auto w-52 md:w-72 border-yellow-600 flex-shrink-0"
                key={quiz.id}
              >
                <img
                  className="h-32 w-full cursor-pointer"
                  src="\images\images.png"
                  alt=""
                  onClick={() => handleQuizSelect(quiz.id)}
                />
                <button
                  className="text-lg md:p-5 flex justify-center items-center"
                  onClick={() => handleQuizSelect(quiz.id)}
                >
                  {quiz.title}
                </button>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
