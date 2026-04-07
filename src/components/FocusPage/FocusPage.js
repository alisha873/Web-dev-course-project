import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import SessionTabs from './SessionTabs';
import Timer from './Timer';
import Controls from './Controls';
import TaskInput from './TaskInput';
import './FocusPage.css';

const SESSIONS = {
  focus: { label: 'Focus', duration: 25 * 60, color: '#e8856a' },
  short: { label: 'Short Break', duration: 5 * 60, color: '#6a9ee8' },
  long: { label: 'Long Break', duration: 15 * 60, color: '#6acfe8' },
};

function FocusPage() {
  const navigate = useNavigate();
  const [sessionType, setSessionType] = useState('focus');
  const [timeLeft, setTimeLeft] = useState(SESSIONS.focus.duration);
  const [isRunning, setIsRunning] = useState(false);
  const [task, setTask] = useState('');

  const session = SESSIONS[sessionType];

  useEffect(() => {
    if (!isRunning) return;
    const interval = setInterval(() => {
      setTimeLeft(prev => {
        if (prev <= 1) {
          clearInterval(interval);
          setIsRunning(false);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, [isRunning]);

  const handleSessionChange = useCallback((type) => {
    setSessionType(type);
    setTimeLeft(SESSIONS[type].duration);
    setIsRunning(false);
  }, []);

  const handleReset = useCallback(() => {
    setTimeLeft(session.duration);
    setIsRunning(false);
  }, [session.duration]);

  return (
    <div className='focus-page'>
      <button className='focus-back-btn' onClick={() => navigate(-1)}>
        ← Back
      </button>
      <SessionTabs active={sessionType} onChange={handleSessionChange} sessions={SESSIONS} />

      <div className='focus-card' style={{ '--accent': session.color }}>
        <p className='session-label' style={{ color: session.color }}>{session.label}</p>
        <Timer timeLeft={timeLeft} color={session.color} />
        <Controls
          isRunning={isRunning}
          onStart={() => setIsRunning(true)}
          onPause={() => setIsRunning(false)}
          onReset={handleReset}
          color={session.color}
        />
      </div>

      <TaskInput task={task} setTask={setTask} />
    </div>
  );
}

export default FocusPage;
