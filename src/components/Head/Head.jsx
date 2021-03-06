import React from 'react'

function Head({score , setScore, mistakes, setMistakes}) {
  const [currentProblem , setCurrentProblem] = React.useState(generateProblem());
  const [userAnswer , setUserAnswer] = React.useState('');
  const [showError , setShowError] = React.useState(false);
  const answerField = React.useRef(null);
  const resetButton = React.useRef(null);

  React.useEffect(()=>{
    if (score === 10 || mistakes === 3){
      setTimeout(()=> {
        resetButton.current.focus();
      }, 1000)
    }
  } , [score , mistakes]);

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }
  
  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ['+', '-', 'x' , '÷'][generateNumber(2)]
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    answerField.current.focus();
    let correctAnswer
    if (userAnswer === "") return;
    else{
    switch(currentProblem.operator){
      case '+': correctAnswer = currentProblem.numberOne + currentProblem.numberTwo; break;
      case '-': correctAnswer = currentProblem.numberOne - currentProblem.numberTwo; break;
      case 'x': correctAnswer = currentProblem.numberOne * currentProblem.numberTwo; break;
      case '÷': correctAnswer = currentProblem.numberOne / currentProblem.numberTwo; break;
      default: break;
    }
    }
    if (correctAnswer === parseInt(userAnswer)){
      setScore(score + 1);
      setCurrentProblem(generateProblem());
      setUserAnswer('');
    } else{
      setMistakes(mistakes + 1);
      setUserAnswer('');
      setShowError(true);
      setTimeout(() => setShowError(false), 500);
    }
  }
  function resetGame (){
    setScore(0);
    setMistakes(0);
    setCurrentProblem(generateProblem());
    setUserAnswer('');
    answerField.current.focus();
  }
  

  return (
    <>
    <div className={"main-ui" + (mistakes === 3 || score === 10 ? " blurred" : "")}>
    <p className={"problem" + (showError === true ? " animate-wrong" : "")}>{currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}</p>
    <form onSubmit={handleSubmit} action="" className="our-form">
      <input ref={answerField} value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" className="our-field" autoComplete="off"/>
      <button type='submit'>Submit</button>
      </form>
    <p className="status">You need {10 - score} more points, and are allowed to make {2 - mistakes} more mistakes.</p>
    </div>
    <div className={"overlay" + (score === 10 || mistakes === 3 ? " overlay--visible" : "")}>
  <div className="overlay-inner">
    <p className="end-message">{score === 10 ? "Well done. You won!" : "Sorry you lost the game!"}</p>
    <button ref={resetButton} onClick={resetGame} className="reset-button">Start Over</button>
  </div>
</div>
    </>
  )
}

export default Head