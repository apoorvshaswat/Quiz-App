import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/QuizData";

export default function Intro() {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [title, setTitle] = useState();
  const [difficulty, setDifficulty] = useState();
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const quiz = quizData
      .flatMap((category) => category.quizzes)
      .find((q) => q.id === parseInt(quizId));
    if (quiz) {
      setQuestions(quiz.questions);
      setTitle(quiz.title);
      setDifficulty(quiz.difficulty);
    } else {
      navigate("/");
    }
  }, [quizId, navigate]);

  return (
    <div className="bg-yellow-300 flex flex-col justify-center items-center h-[90vh] gap-10 p-5 border">
      <div className="text-4xl md:text-5xl text-center">{title}</div>
      <div className="text-xl md:text-2xl text-center">
        Answer these simple questions correctly and earn coins
      </div>
      <div className="text-xl md:text-2xl">Difficulty Level: {difficulty}</div>
      <div className="text-xl md:text-2xl">{questions.length} Questions</div>
      <div className="w-full md:w-1/2 flex items-center justify-center h-20 py-5">
        <button
          className="text-3xl md:text-4xl bg-blue-400 rounded-lg w-1/2 md:w-1/2 py-4"
          onClick={() => navigate(`/timer/${quizId}`)}
        >
          Play
        </button>
      </div>
    </div>
  );
}
