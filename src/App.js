import React from 'react';
import Head from './components/Head/Head';
import ProgressBar from './components/Progress-bar/ProgressBar';

function App() {
  const [score, setScore] = React.useState(0);
  const [mistakes, setMistakes] = React.useState(0);

  return (
    <> 
    <Head score={score} setScore={setScore} mistakes={mistakes} setMistakes={setMistakes}/>
    <ProgressBar score={score} />
    </>
  );
}

export default App;
