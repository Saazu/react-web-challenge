import * as React from "react";
import Question from "./Question";

function QuizScreen({ quiz }) {

  return (
    <div>
      <h2>{quiz.currentQuestion.category}</h2>
      <Question quiz={quiz} />
    </div>
  );
}

export default QuizScreen;