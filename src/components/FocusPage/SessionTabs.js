import React from 'react';

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
