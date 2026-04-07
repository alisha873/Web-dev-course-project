import React from 'react';

const filters = ['all', 'active', 'completed'];

function TaskFilter({ active, onChange }) {
  return (
    <div className='task-filter'>
      {filters.map(f => (
        <button
          key={f}
          className={`filter-btn ${active === f ? 'active' : ''}`}
          onClick={() => onChange(f)}
        >
          {f.charAt(0).toUpperCase() + f.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default TaskFilter;
