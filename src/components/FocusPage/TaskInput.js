import React, { useState } from 'react';

function TaskInput({ task, setTask }) {
  const [input, setInput] = useState('');

  const handleSet = () => {
    if (input.trim()) {
      setTask(input.trim());
      setInput('');
    }
  };

  return (
    <div className='task-section'>
      <p className='task-label'>
        {task ? <>Focusing on: <span>{task}</span></> : 'What are you focusing on?'}
      </p>
      <div className='task-input-row'>
        <input
          className='task-input'
          type='text'
          placeholder='Enter your task...'
          value={input}
          onChange={e => setInput(e.target.value)}
          onKeyDown={e => e.key === 'Enter' && handleSet()}
        />
        <button className='btn btn-set' onClick={handleSet}>Set Task</button>
      </div>
    </div>
  );
}

export default TaskInput;

//update value with every change and if pressed key is enter run function 