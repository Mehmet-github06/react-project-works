import React, { useState } from "react";
import { questions } from "../helper/data";

const Cards = () => {
  const [showFinalResult, setShowFinalResult] = useState(false);
  const [score, setScore] = useState(0);
  const [currentQuestion, setCurrentQestion] = useState(0);

  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }
    if (currentQuestion + 1 < questions.length) {
      setCurrentQestion(currentQuestion + 1);
    } else {
      setShowFinalResult(true);
    }
  };

  const restart = ()=>{
    setScore(0)
    setCurrentQestion(0)
    setShowFinalResult(false)
  }


  return (
    <div className="container">
      <h1>Self Reliance App</h1>
      <h2>Current score : {score}</h2>

      {showFinalResult ? (
        <div className="result">
          <h1 className="result-title">Result</h1>

          <h2 className="result-p">
            {score} out of {questions.length} you are (
            {((score / questions.length)* 100).toFixed(2)} % ) self confident
          </h2>
          <button onClick={()=>restart()}>Restart Test</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question {currentQuestion + 1} out of {questions.length}
          </h2>

          <h3>{questions[currentQuestion].text}</h3>
          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Cards;
