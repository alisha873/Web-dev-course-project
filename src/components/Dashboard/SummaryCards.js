import React, { useEffect, useRef, useState } from 'react';

function AnimatedNumber({ value }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef(null);

  useEffect(() => {
    let start = 0;
    const step = Math.ceil(value / 40);
    ref.current = setInterval(() => {
      start += step;
      if (start >= value) {
        setDisplay(value);
        clearInterval(ref.current);
      } else {
        setDisplay(start);
      }
    }, 30);
    return () => clearInterval(ref.current);
  }, [value]);

  return <>{display}</>;
}

function formatTime(minutes) {
  const h = Math.floor(minutes / 60);
  const m = minutes % 60;
  return h > 0 ? `${h}h ${m}m` : `${m}m`;
}

function SummaryCards({ stats }) {
  const cards = [
    {
      label: 'Focus Time Today',
      value: formatTime(stats.focusTimeToday),
      raw: stats.focusTimeToday,
      sub: 'minutes focused',
      accent: '#e8856a',
    },
    {
      label: 'Sessions Completed',
      value: stats.sessionsCompleted,
      raw: stats.sessionsCompleted,
      sub: 'pomodoros done',
      accent: '#6a9ee8',
    },
    {
      label: 'Tasks Completed',
      value: stats.tasksCompleted,
      raw: stats.tasksCompleted,
      sub: 'tasks finished',
      accent: '#6acfe8',
    },
  ];

  return (
    <div className='summary-cards'>
      {cards.map((card, i) => (
        <div className='summary-card' key={i} style={{ '--card-accent': card.accent }}>
          <p className='card-label'>{card.label}</p>
          <p className='card-value' style={{ color: card.accent }}>
            {typeof card.value === 'string'
              ? card.value
              : <AnimatedNumber value={card.raw} />}
          </p>
          <p className='card-sub'>{card.sub}</p>
        </div>
      ))}
    </div>
  );
}

export default SummaryCards;
