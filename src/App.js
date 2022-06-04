import React from 'react';
import ProgressBar from './components/Progress-bar/ProgressBar';

function App() {
  return (
    <> 
  <div className="main-ui">
  <p className="problem"></p>

  <form action="" className="our-form"/>
    <input type="text" className="our-field" autoComplete="off"/>
    <button>Submit</button>

  <p className="status">You need <span className="points-needed">10</span> more points, and are allowed to make <span className="mistakes-allowed">2</span> more mistakes.</p>
    <ProgressBar />

</div>

<div className="overlay">
  <div className="overlay-inner">
    <p className="end-message"></p>
    <button className="reset-button">Start Over</button>
  </div>
</div>
    </>
  );
}

export default App;
