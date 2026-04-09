import React from 'react';

function Streak({ streak }) {
  const messages = [
    'Keep going!',
    'You\'re building momentum!',
    'On fire! Don\'t stop now',
    'Incredible consistency!',
  ];
  const msg = messages[Math.min(streak - 1, messages.length - 1)] || 'Start your streak today!';

  return (
    <div className='streak-card'>
      <div>
        <p className='streak-count'>{streak} day streak</p>
        <p className='streak-msg'>{msg}</p>
      </div>
    </div>
  );
}

export default Streak;
