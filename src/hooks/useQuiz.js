import * as React from "react";

function useQuiz() {
  const [questionsLoading, setQuestionsLoading] = React.useState(true);
  const [questions, setQuestions] = React.useState([]);
  const [quizStage, setQuizStage] = React.useState("welcome-stage");
  const [userAnswers, setUserAnswers] = React.useState(Array(10).fill(0));
  const [currentQuestionIndex, setCurrentQuestionIdex] = React.useState(0);
  const [numberOfGamesPlayed, setNumberOfGamesPlayed] = React.useState(0)

  React.useEffect(() => {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(response => response.json())
      .then(q => setQuestions(q.results))
      .then(() => setQuestionsLoading(false))
      .catch(error => console.error(error))
  }, [numberOfGamesPlayed]);

  /**
   * 
   * @param {( 'welcome-stage' | 'quiz-started' | 'quiz-completed')} newQuizStage
   * @description changes the stage of the quiz player  is currently on 
   */
  function changeQuizStage(newQuizStage) {
    setQuizStage(newQuizStage)
  }

  const currentQuestion = questions[currentQuestionIndex];
  const numQuestions = questions.length;
  /**
   * 
   * @param {number} currentQuestionIndex 
   * @param {boolean} answerChoice
   * @description sets the ith index of the answer array to the user's answer for the ith question
   */
  function recordUserAnswer(currentQuestionIndex, answerChoice) {
    const newAnswerArray = [...userAnswers];
    newAnswerArray[currentQuestionIndex] = answerChoice
    setUserAnswers(newAnswerArray);
  }

  /**
   * @description changes the current question to the next question
   */
  function changeQuestion() {
    setCurrentQuestionIdex(currentQuestionIndex + 1)
  }

  /**
   * @description
   * @returns { number, []}
   */
  function getQuizResult() {
    const results = [];
    let numCorrectAnswers = 0;

    for (let i = 0; i < questions.length; i++) {
      if (userAnswers[i] === questions[i].incorrect_answers[0]) {
        results[i] = { question: questions[i].question, answerCorrect: false };
      } else {
        results[i] = { question: questions[i].question, answerCorrect: true };
        numCorrectAnswers += 1;
      }
    }

    return {
      results,
      numCorrectAnswers
    }
  }

  function playNewGame() {
    setNumberOfGamesPlayed(numberOfGamesPlayed + 1);
    setQuizStage("welcome-stage");
    setQuestions([]);
    setUserAnswers(Array(10).fill(0));
    setCurrentQuestionIdex(0);
  }

  return {
    questionsLoading,
    quizStage,
    userAnswers,
    currentQuestionIndex,
    currentQuestion,
    questions,
    numQuestions,
    changeQuizStage,
    recordUserAnswer,
    changeQuestion,
    getQuizResult,
    playNewGame
  }
}

export default useQuiz;