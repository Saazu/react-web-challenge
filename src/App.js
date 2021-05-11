import './App.css';
import * as React from "react";
import HomeScreen from "./components/HomeScreen";
import QuizScreen from "./components/quiz/QuizScreen";
import ResultScreen from "./components/result/ResultScreen";
import useQuiz from "./hooks/useQuiz";

function App() {

  const quiz = useQuiz();


  console.log(quiz.questions);

  return (
    <div className="">
      { quiz.quizStage === "welcome-stage" ? <HomeScreen quiz={quiz} /> : null}
      { quiz.quizStage === "quiz-started" ? <QuizScreen quiz={quiz} /> : null}
      { quiz.quizStage === "quiz-completed" ? <ResultScreen quiz={quiz} /> : null}
    </div>
  );
}

export default App;
