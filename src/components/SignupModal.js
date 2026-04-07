import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import './SignupModal.css';

function SignupModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');

  if (!isOpen) {
    return null;
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!email.trim()) {
      return;
    }
    alert(`Thanks! We’ll send updates to ${email}.`);
    setEmail('');
    onClose();
  };

  return ReactDOM.createPortal(
    <div className='signup-modal-overlay' onClick={onClose}>
      <div className='signup-modal' onClick={(e) => e.stopPropagation()}>
        <button className='signup-modal-close' onClick={onClose} aria-label='Close signup form'>
          ×
        </button>
        <h2>Join Study Focus</h2>
        <p>Enter your email to get updates, early access, and productivity tips.</p>
        <form className='signup-form' onSubmit={handleSubmit}>
          <label htmlFor='signup-email'>Email address</label>
          <input
            id='signup-email'
            type='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder='you@example.com'
            required
          />
          <button type='submit' className='signup-modal-submit'>Send me updates</button>
        </form>
      </div>
    </div>,
    document.body
  );
}

SignupModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
