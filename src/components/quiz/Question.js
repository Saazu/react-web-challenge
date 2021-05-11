import * as React from "react";
import "./quiz.css"

function Question({ quiz }) {

  const {
    currentQuestion,
    currentQuestionIndex,
    changeQuestion,
    recordUserAnswer,
    numQuestions,
    changeQuizStage
  }
    = quiz;

  /**
   * 
   * @param {*} event
   * @listens buttonClick
   * @description records user answer choice and loads next question. Ends the quiz if no more questions left
   */
  function handleAnswerSelection(event) {
    const userAnswer = event.currentTarget.value;
    recordUserAnswer(currentQuestionIndex, userAnswer);
    changeQuestion();
    if (currentQuestionIndex + 1 === numQuestions) {
      changeQuizStage("quiz-completed");
    }
  }

  return (
    <div>
      <p className="question-container">{currentQuestion.question}</p>
      <p className="question-count">{currentQuestionIndex + 1} of {numQuestions}</p>
      <button className="answer-button" value="True" onClick={handleAnswerSelection}>True</button>
      <button className="answer-button" value="False" onClick={handleAnswerSelection}>False</button>

    </div>
  )

}

export default Question;