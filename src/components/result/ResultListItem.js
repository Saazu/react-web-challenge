import * as React from "react";

function ResultListItem({ result }) {

  const resultIcon = result.answerCorrect ? <span>Y</span> : <span>X</span>

  return (
    <div>
      <p>{resultIcon} <span>{result.question}</span></p>
    </div>
  )
}

export default ResultListItem;