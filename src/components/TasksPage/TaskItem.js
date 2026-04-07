import React from 'react';

function TaskItem({ task, onToggle, onDelete }) {
  return (
    <li className={`task-item ${task.completed ? 'completed' : ''}`}>
      <button className='task-check' onClick={() => onToggle(task.id)}>
        {task.completed ? '✓' : ''}
      </button>
      <span className='task-text'>{task.text}</span>
      <button className='task-delete' onClick={() => onDelete(task.id)}>✕</button>
    </li>
  );
}

export default TaskItem;
