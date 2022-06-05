import React from 'react'

function Head({score , setScore, mistakes, setMistakes}) {
  const [currentProblem , setCurrentProblem] = React.useState(generateProblem());
  const [userAnswer , setUserAnswer] = React.useState('');

  function generateNumber(max) {
    return Math.floor(Math.random() * (max + 1))
  }
  
  function generateProblem() {
    return {
      numberOne: generateNumber(10),
      numberTwo: generateNumber(10),
      operator: ['+', '-', 'x'][generateNumber(2)]
    }
  }
  function handleSubmit(e){
    e.preventDefault();
    let correctAnswer
    switch(currentProblem.operator){
      case '+': correctAnswer = currentProblem.numberOne + currentProblem.numberTwo; break;
      case '-': correctAnswer = currentProblem.numberOne - currentProblem.numberTwo; break;
      case 'x': correctAnswer = currentProblem.numberOne * currentProblem.numberTwo; break;
      default: break;
    }
    if (correctAnswer === parseInt(userAnswer)){
      setScore(score + 1);
      setCurrentProblem(generateProblem());
      setUserAnswer('');
    } else{
      setMistakes(mistakes + 1);
      setUserAnswer('');
    }
  }
  

  return (
    <>
    <div className="main-ui">
    <p className="problem">{currentProblem.numberOne} {currentProblem.operator} {currentProblem.numberTwo}</p>
    <form onSubmit={handleSubmit} action="" className="our-form">
      <input value={userAnswer} onChange={(e) => setUserAnswer(e.target.value)} type="text" className="our-field" autoComplete="off"/>
      <button type='submit'>Submit</button>
      </form>
    <p className="status">You need {10 - score} more points, and are allowed to make {2 - mistakes} more mistakes.</p>
    </div>
    </>
  )
}

export default Head