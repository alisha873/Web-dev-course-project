import React, { useState } from 'react';

function TaskInput({ onAdd }) {
  const [value, setValue] = useState('');

  const handle = () => {
    if (value.trim()) {
      onAdd(value.trim());
      setValue('');
    }
  };

  return (
    <div className='task-input-row'>
      <input
        className='task-input'
        type='text'
        placeholder='What do you need to focus on?'
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => e.key === 'Enter' && handle()}
      />
      <button className='task-add-btn' onClick={handle}>Add</button>
    </div>
  );
}

export default TaskInput;
