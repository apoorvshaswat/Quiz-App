import React from "react";

export default function Main() {
  return (
    <div className="flex flex-row justify-center items-center bg-yellow-300 h-[90vh]">
      <div className="flex flex-col justify-center items-center w-1/2">
        <img
          className="h-auto w-1/2"
          src="/images/360_F_532730425_EiwrFXiBgzIedTDr44MBmYsxYZ0opAnK.jpg"
          alt=""
        />
      </div>

      <div className="  flex flex-col justify-center items-center space-y-8 w-1/2">
        <div className=" text-4xl text-center text-black">Play Quiz</div>

        <div className=" text-xl w-1/2 text-black ">
          Welcome to Quizard, where knowledge meets fun! Unleash your intellect
          with our captivating quizzes spanning various topics. Challenge
          yourself, compete with friends, and embark on a journey of discovery.
          Engage in brain-teasing trivia that entertains and educates. Quizard -
          Where every question unlocks a world of possibilities!
        </div>
      </div>
    </div>
  );
}
