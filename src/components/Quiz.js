import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";

import quizData from "./QuizData";

export default function Quiz() {
  const navigate = useNavigate();
  const { quizId } = useParams();
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correctAnswer, setCorrectAnswer] = useState(null);

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

  const handleNextQuestion = useCallback(() => {
    setSelectedOption(null);
    setCorrectAnswer(null);

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setTime(60);
    } else {
      navigate("/result", { state: { score } });
    }
  }, [currentQuestionIndex, questions.length, navigate, score]);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      handleNextQuestion();
    }
  }, [time, handleNextQuestion]);

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const answer = questions[currentQuestionIndex].answer;

    setCorrectAnswer(answer);

    if (selectedOption === questions[currentQuestionIndex].answer) {
      setScore((prevScore) => prevScore + 4);
    }

    setTimeout(handleNextQuestion, 1000);
  };

  return (
    <div className="bg-yellow-300 h-screen flex justify-center items-center ">
      {currentQuestionIndex < questions.length ? (
        <div className="flex flex-col justify-center items-center gap-5 border-8 border-red-500 rounded-lg p-5 bg-blue-500">
          <div className=" text-4xl">
            {questions[currentQuestionIndex].question}
          </div>
          <div className="flex flex-col items-center justify-center gap-10 text-2xl p-2 h-auto w-full bg-white">
            <div className="bg-white flex flex-col gap-10  items-center justify-center w-full">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className="w-full p-2 rounded-lg"
                  style={{
                    backgroundColor:
                      selectedOption === option
                        ? option === correctAnswer
                          ? "green"
                          : "red"
                        : option === correctAnswer
                        ? "green"
                        : "white",
                  }}
                >
                  {`${index + 1}.  ${option}`}
                </button>
              ))}
            </div>
            <div className="pt-10 ">
              <p>Time Remaining: {time}</p>
            </div>
          </div>
        </div>
      ) : (
        <h3>Quiz Completed</h3>
      )}
    </div>
  );
}
