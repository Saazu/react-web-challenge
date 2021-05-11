import * as React from "react";

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
      <p>{currentQuestion.question}</p>
      <p>{currentQuestionIndex + 1}/{numQuestions}</p>
      <button value="True" onClick={handleAnswerSelection}>True</button>
      <button value="False" onClick={handleAnswerSelection}>False</button>
    </div>
  )

}

export default Question;