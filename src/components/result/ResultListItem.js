import * as React from "react";
import "./result.css";
import plusSign from "../../img/result/plus.svg";
import minusSign from "../../img/result/minus.svg";

function ResultListItem({ result }) {

  const resultIcon = result.answerCorrect
    ?
    <img className="result-icon" alt="plus sign" src={plusSign} />
    :
    <img className="result-icon" alt="minus sign" src={minusSign} />;

  return (
    <tr>
      <td>{resultIcon}</td>
      <td>{result.question}</td>
    </tr>
  );
}

export default ResultListItem;