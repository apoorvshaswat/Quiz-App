import React from "react";

export default function Main() {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center bg-yellow-300 h-auto pt-10 pb-10 md:h-[90vh] p-5 md:justify-between">
      <div className="flex justify-center items-center w-full md:w-1/2 mb-8 md:mb-0">
        <img
          className="h-auto w-1/2 md:w-1/2"
          src="/images/360_F_532730425_EiwrFXiBgzIedTDr44MBmYsxYZ0opAnK.jpg"
          alt="Quiz Illustration"
          loading="lazy"
        />
      </div>
      <div className="flex flex-col justify-center items-center space-y-4 md:space-y-6 w-full md:w-1/2 text-center">
        <div className="text-2xl md:text-4xl font-bold text-black">
          Welcome to Quiz App
        </div>
        <div className="text-lg w-3/4 md:w-1/2 text-black">
          Where knowledge meets fun! Unleash your intellect with our captivating
          quizzes spanning various topics. Challenge yourself, compete with
          friends, and embark on a journey of discovery. Engage in brain-teasing
          trivia that entertains and educates, where every question unlocks a
          world of possibilities!
        </div>
      </div>
    </div>
  );
}
