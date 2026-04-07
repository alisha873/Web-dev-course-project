import React from 'react';

const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function WeeklyChart({ weekly }) {
  const max = Math.max(...weekly, 1);

  return (
    <div className='chart-card'>
      <p className='section-title'>Weekly Focus (minutes)</p>
      <div className='chart-bars'>
        {weekly.map((val, i) => (
          <div className='chart-col' key={i}>
            <p className='bar-value'>{val > 0 ? val : ''}</p>
            <div className='bar-track'>
              <div
                className='bar-fill'
                style={{ height: `${(val / max) * 100}%` }}
              />
            </div>
            <p className='bar-day'>{DAYS[i]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WeeklyChart;
