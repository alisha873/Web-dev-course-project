import React from 'react';

function Controls({ isRunning, onStart, onPause, onReset, color }) {
  return (
    <div className='controls'>
      {!isRunning ? (
        <button className='btn btn-primary' style={{ '--btn-color': color }} onClick={onStart}>
          Start
        </button>
      ) : (
        <button className='btn btn-primary' style={{ '--btn-color': color }} onClick={onPause}>
          Pause
        </button>
      )}
      <button className='btn btn-secondary' onClick={onReset}>
        Reset
      </button>
    </div>
  );
}

export default Controls;
