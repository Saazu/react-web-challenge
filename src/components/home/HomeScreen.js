import * as React from "react";
import "./home.css";

function HomeScreen({ quiz }) {

  const { questionsLoading, startQuiz } = quiz;

  /**
   * @description starts the quiz
   */
  function handleBeginClick() {
    startQuiz();
  }

  return (
    <div>
      <h2 className="header">Welcome to the Triva Challenge</h2>
      <div className="description">
        <p>You will be presented with 10 True or False questions.</p>
        <p>Can you score 100&#37;</p>
      </div>

      <div className="">
        {
          questionsLoading
            ?
            <p className="begin-button">Please wait...</p>
            :
            <button className="begin-button" onClick={handleBeginClick}>BEGIN</button>
        }
      </div>

    </div>
  );
}

export default HomeScreen;