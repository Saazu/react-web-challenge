import * as React from "react";
import "./quiz.css"

function Question({ quiz }) {

  const {
    currentQuestion,
    currentQuestionIndex,
    handleAnswerSelection,
    numQuestions,
  }
    = quiz;

  /**
   * 
   * @param {*} event
   * @listens buttonClick
   * @description records user answer choice and loads next question. Ends the quiz if no more questions left
   */
  function handleUserAnswerSelection(event) {
    const userAnswer = event.currentTarget.value;
    handleAnswerSelection(userAnswer);
  }

  return (
    <div>
      <p className="question-container">{currentQuestion.question}</p>
      <p className="question-count">{currentQuestionIndex + 1} of {numQuestions}</p>
      <button className="answer-button" value="True" onClick={handleUserAnswerSelection}>True</button>
      <button className="answer-button" value="False" onClick={handleUserAnswerSelection}>False</button>
    </div>
  );
}

export default Question;