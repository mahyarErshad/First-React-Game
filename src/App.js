import React from 'react';
import Head from './components/Head/Head';
import ProgressBar from './components/Progress-bar/ProgressBar';
import Result from './components/Result/Result';

function App() {
  const [score, setScore] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);

  return (
    <> 
    <Head score={score} setScore={setScore} mistakes={mistakes} setMistakes={setMistakes}/>
    <ProgressBar score={score} />
    <Result score={score} mistakes={mistakes}/>
    </>
  );
}

export default App;
