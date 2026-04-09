import React from 'react';

//creates three buttons at the top and highlights joh bhi active hai 
function SessionTabs({ active, onChange, sessions }) {
  return (
    <div className='session-tabs'>
      {Object.entries(sessions).map(([key, val]) => (
        <button
          key={key}
          className={`tab-btn ${active === key ? 'active' : ''}`}
          style={active === key ? { '--tab-color': val.color } : {}}
          onClick={() => onChange(key)}
        >
          {val.label}
        </button>
      ))}
    </div>
  );
}

export default SessionTabs;

//iterate through the the focus modes and render buttons using key-value and highlight active button
//on click change to some other session 