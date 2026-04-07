import React from 'react';

function Timer({ timeLeft, color }) {
  const minutes = String(Math.floor(timeLeft / 60)).padStart(2, '0');
  const seconds = String(timeLeft % 60).padStart(2, '0');

  return (
    <div className='timer-display' style={{ color }}>
      {minutes}:{seconds}
    </div>
  );
}

export default Timer;
