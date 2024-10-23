import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

export default function Timer() {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [time, setTime] = useState(5);

  const handleQuizSelect = useCallback(() => {
    navigate(`/quiz/${quizId}`);
  }, [navigate, quizId]);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleQuizSelect();
    }
  }, [time, handleQuizSelect]);

  return (
    <div className="bg-yellow-300 flex flex-col justify-center items-center h-screen gap-10">
      <div className="md:text-5xl text-4xl">Quiz Starts In</div>
      <div className="md:text-3xl text-2xl">{time}</div>
    </div>
  );
}
