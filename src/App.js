import React from 'react';
import Head from './components/Head/Head';
import ProgressBar from './components/Progress-bar/ProgressBar';
import Result from './components/Result/Result';

function App() {
  const [score, setScore] = React.useState(0);

  return (
    <> 
    <Head score={score} setScore={setScore}/>
    <ProgressBar score={score} />
    <Result/>
    </>
  );
}

export default App;
