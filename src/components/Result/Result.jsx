import React from 'react'

function Result({mistakes , score}) {
  return (
      <>
    <div className={"overlay" + (score === 10 || mistakes === 3 ? " overlay--visible" : "")}>
  <div className="overlay-inner">
    <p className="end-message">{score === 10 ? "Well done. You won!" : "Sorry you lost the game!"}</p>
    <button className="reset-button">Start Over</button>
  </div>
</div>
    </>
  )
}

export default Result