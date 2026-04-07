import React from 'react';

function RecentActivity({ activity }) {
  return (
    <div className='activity-card'>
      <p className='section-title'>Recent Activity</p>
      {activity.length === 0
        ? <p className='activity-empty'>No activity yet. Start a session!</p>
        : (
          <ul className='activity-list'>
            {activity.map((item, i) => (
              <li className='activity-item' key={i}>
                <span className='activity-dot' />
                <span className='activity-label'>{item.label}</span>
                <span className='activity-duration'>{item.duration}</span>
              </li>
            ))}
          </ul>
        )}
    </div>
  );
}

export default RecentActivity;
