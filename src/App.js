import './App.css';
import * as React from "react";
import HomeScreen from "./components/home/HomeScreen";
import QuizScreen from "./components/quiz/QuizScreen";
import ResultScreen from "./components/result/ResultScreen";
import useQuiz from "./hooks/useQuiz";

function App() {

  const quiz = useQuiz();

  return (
    <div className="layout">
      <div className="content-container">
        {quiz.quizStage === "welcome-stage" ? <HomeScreen quiz={quiz} /> : null}
        {quiz.quizStage === "quiz-started" ? <QuizScreen quiz={quiz} /> : null}
        {quiz.quizStage === "quiz-completed" ? <ResultScreen quiz={quiz} /> : null}
      </div>

    </div>
  );
}

export default App;
