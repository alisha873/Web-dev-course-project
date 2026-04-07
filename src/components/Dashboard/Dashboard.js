import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import SummaryCards from './SummaryCards';
import WeeklyChart from './WeeklyChart';
import RecentActivity from './RecentActivity';
import Streak from './Streak';
import './Dashboard.css';

function Dashboard() {
  const navigate = useNavigate();
  const [stats, setStats] = useState(() => {
    const saved = localStorage.getItem('studyfocus-stats');
    return saved ? JSON.parse(saved) : {
      focusTimeToday: 135,
      sessionsCompleted: 5,
      tasksCompleted: 3,
      streak: 3,
      weekly: [40, 90, 60, 120, 75, 135, 0],
      activity: [
        { label: 'Completed "Study OS"', duration: '25 min' },
        { label: 'Completed "DSA Practice"', duration: '25 min' },
        { label: 'Completed "React Review"', duration: '25 min' },
      ]
    };
  });

  useEffect(() => {
    localStorage.setItem('studyfocus-stats', JSON.stringify(stats));
  }, [stats]);

  return (
    <div className='dashboard-page'>
      <button className='page-back-btn' onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className='dashboard-header'>
        <h1>Dashboard</h1>
        <p className='dashboard-subtitle'>Your focus summary</p>
      </div>

      <Streak streak={stats.streak} />
      <SummaryCards stats={stats} />
      <WeeklyChart weekly={stats.weekly} />
      <RecentActivity activity={stats.activity} />
    </div>
  );
}

export default Dashboard;
