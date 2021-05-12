import * as React from "react";
import "./result.css";
import ResultListItem from "./ResultListItem";

function ResultScreen({ quiz }) {
  const { getQuizResult, numQuestions, playNewGame, userAnswers } = quiz;
  const { results, numCorrectAnswers } = getQuizResult(userAnswers);
  /**
   * @description returns a list of ResultListItem components
   * @returns []
   */
  function resultList() {
    return results.map(result => <ResultListItem key={result.id} result={result} />)
  }

  return (
    <div>
      <h2 className="result-header">You scored {numCorrectAnswers}/{numQuestions}</h2>
      <table className="result-display">
        <tbody>
          {resultList()}
        </tbody>
      </table>
      <button className="play-again-button" onClick={playNewGame}>PLAY AGAIN?</button>
    </div>
  )
}

export default ResultScreen;