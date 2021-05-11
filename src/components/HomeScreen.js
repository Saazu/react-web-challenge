import * as React from "react"

function HomeScreen({ quiz }) {

  function handleBeginClick() {
    quiz.changeQuizStage("quiz-started")
  }

  return (
    <div>
      <h2>Welcome to the triva challenge</h2>
      <p>You will be presented with 10 True or False questions.</p>
      <p>Can you score 100&#37;</p>
      <button onClick={handleBeginClick}>BEGIN</button>
    </div>
  )
}

export default HomeScreen;