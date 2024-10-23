import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import quizData from "../data/QuizData";

export default function Quiz() {
  const navigate = useNavigate();
  const { quizId } = useParams();

  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [time, setTime] = useState(60);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [unattempted, setUnattempted] = useState(0);

  useEffect(() => {
    const quiz = quizData
      .flatMap((category) => category.quizzes)
      .find((q) => q.id === parseInt(quizId));
    if (quiz) {
      setQuestions(quiz.questions);
      setScore(0);
    } else {
      navigate("/");
    }
  }, [quizId, navigate]);

  const handleNextQuestion = useCallback(() => {
    setSelectedOption(null);
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setTime(60);
    }
  }, [currentQuestionIndex, questions.length]);

  useEffect(() => {
    if (time > 0) {
      const timer = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else {
      if (currentQuestionIndex === questions.length - 1) {
        setUnattempted(questions.length - (correct + wrong));
        setTimeout(() => {
          navigate(`/result/${quizId}`, {
            state: {
              score,
              correct,
              wrong,
              unattempted,
              percentage: ((score / (questions.length * 4)) * 100).toFixed(2),
              questions,
            },
          });
        }, 1000);
      } else {
        handleNextQuestion();
      }
    }
  }, [
    time,
    currentQuestionIndex,
    questions.length,
    correct,
    wrong,
    score,
    navigate,
    quizId,
    handleNextQuestion,
    questions,
    unattempted,
  ]);

  const handleAnswer = (selectedOption) => {
    setSelectedOption(selectedOption);
    const answer = questions[currentQuestionIndex].answer;

    if (selectedOption === answer) {
      setScore((prev) => prev + 4);
      setCorrect((prev) => prev + 1);
    } else {
      setWrong((prev) => prev + 1);
    }

    if (currentQuestionIndex === questions.length - 1) {
      setUnattempted(questions.length - (correct + wrong + 1));
      setTimeout(() => {
        navigate(`/result/${quizId}`, {
          state: {
            score: score + (selectedOption === answer ? 4 : 0),
            correct: correct + (selectedOption === answer ? 1 : 0),
            wrong: wrong + (selectedOption === answer ? 0 : 1),
            unattempted,
            percentage: (
              ((score + (selectedOption === answer ? 4 : 0)) /
                (questions.length * 4)) *
              100
            ).toFixed(2),
            questions,
          },
        });
      }, 1000);
    } else {
      setTimeout(handleNextQuestion, 1000);
    }
  };

  return (
    <>
      <div className="flex flex-row absolute top-0 mt-2 md:mt-5 mb-10 right-0 p-2 text-xl md:text-2xl gap-5 bg-yellow-600 rounded-2xl mr-5">
        <img
          className=" md:mt-1 md:mb-1 ml-1 justify-center items-center h-auto w-7 md:w-6 "
          src="\images\coin-icon-3826.jpg"
          alt=""
        />
        <div className="text-center justify-center items-center mr-1">
          {score}
        </div>
      </div>
      <div className="bg-yellow-300 min-h-screen max-h-auto flex flex-col justify-center items-center p-4 pt-16 md:p-10">
        {currentQuestionIndex < questions.length ? (
          <div className="flex flex-col justify-center items-center gap-5 border-8 border-white-500 rounded-lg p-5 bg-yellow-400 w-full md:w-2/3 lg:w-1/2">
            <div className="pt-2 text-lg md:text-xl">
              <div>Time Remaining</div>
              <div className="text-center pt-2 pb-2 w-1/2 border-black  border-2 rounded-full justify-center items-center ml-10 mt-5 ">
                {time}
              </div>
            </div>
            <div className="pt-2 text-lg md:text-xl">
              <p>{`Question ${currentQuestionIndex + 1} of ${
                questions.length
              }`}</p>
            </div>
            <div className="text-2xl md:text-4xl text-center">
              {questions[currentQuestionIndex].question}
            </div>
            <div className="flex flex-col items-center justify-center gap-5 text-xl md:text-2xl p-2 w-full rounded-lg">
              {questions[currentQuestionIndex].options.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleAnswer(option)}
                  className={`w-full p-2 rounded-lg text-black ${
                    selectedOption
                      ? selectedOption === option
                        ? option === questions[currentQuestionIndex].answer
                          ? "bg-green-500"
                          : "bg-red-500"
                        : option === questions[currentQuestionIndex].answer
                        ? "bg-green-500"
                        : "bg-white"
                      : "bg-white"
                  }`}
                >
                  {`${index + 1}. ${option}`}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <h3>Quiz Completed</h3>
        )}
      </div>
    </>
  );
}
