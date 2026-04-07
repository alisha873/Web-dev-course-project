import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import TaskFilter from './TaskFilter';
import './TasksPage.css';

function TasksPage() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem('studyfocus-tasks');
    return saved ? JSON.parse(saved) : [];
  });
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    localStorage.setItem('studyfocus-tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    setTasks(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };

  const toggleTask = (id) => {
    setTasks(prev => prev.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const filtered = tasks.filter(t => {
    if (filter === 'active') return !t.completed;
    if (filter === 'completed') return t.completed;
    return true;
  });

  const remaining = tasks.filter(t => !t.completed).length;

  return (
    <div className='tasks-page'>
      <button className='page-back-btn' onClick={() => navigate(-1)}>
        ← Back
      </button>
      <div className='tasks-header'>
        <h1>Tasks</h1>
        <p className='tasks-subtitle'>
          {remaining === 0 ? 'All caught up 🎉' : `${remaining} task${remaining !== 1 ? 's' : ''} remaining`}
        </p>
      </div>

      <div className='tasks-card'>
        <TaskInput onAdd={addTask} />
        <TaskFilter active={filter} onChange={setFilter} />
        <TaskList tasks={filtered} onToggle={toggleTask} onDelete={deleteTask} />
      </div>
    </div>
  );
}

export default TasksPage;
