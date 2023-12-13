import React, { useState } from "react";
import Question from "./Question";
import Quizresult from "./Quizresult";
import questionList from "./Question";

const Quizscreen = () => {
  console.log(questionList);
  const [currentQuestionIndex, setcurrentQuestionIndex] = useState(0);
  const [makedAnswers, setmakedAnswers] = useState(
    new Array(questionList.length)
  );
  const isQuestionEnd = currentQuestionIndex === questionList.length;

  function calculateResult() {
    let correct = 0;
    questionList.forEach((question, index) => {
      if (question.correctAnswerIndex === makedAnswers[index]) {
        correct++;
      }
    });
    return {
      total: questionList.length,
      correct: correct,
      percentage: `${((correct / questionList.length) * 100).toFixed()}%`,
    };
  }

  function retry() {
    // Define the retry logic here
    setcurrentQuestionIndex(0);
    setmakedAnswers(new Array(questionList.length));
  }

  return (
    <div>
      {isQuestionEnd ? (
        <Quizresult result={calculateResult()} retry={retry} />
      ) : (
        <Question
          question={questionList[currentQuestionIndex]}
          totalQuestions={questionList.length}
          currentQuestion={currentQuestionIndex + 1}
          setAnswer={(index) => {
            setmakedAnswers((arr) => {
              let newArr = [...arr];
              newArr[currentQuestionIndex] = index;
              return newArr;
            });
            setcurrentQuestionIndex(currentQuestionIndex + 1);
          }}
        />
      )}
    </div>
  );
};

export default Quizscreen;
