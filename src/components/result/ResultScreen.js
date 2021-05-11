import * as React from "react";
import ResultListItem from "./ResultListItem";

function ResultScreen({ quiz }) {
  const { getQuizResult, numQuestions, playNewGame } = quiz;
  const { results, numCorrectAnswers } = getQuizResult();
  console.log(results, numCorrectAnswers);

  function resultList() {
    return results.map(result => <ResultListItem result={result} />)
  }

  return (
    <div>
      <h2>You scored {numCorrectAnswers}/{numQuestions}</h2>
      <div>
        {resultList()}
      </div>
      <button onClick={playNewGame}>Play Again</button>
    </div>
  )
}

export default ResultScreen;