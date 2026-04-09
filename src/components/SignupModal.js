import React, { useState } from 'react';
import PropTypes from 'prop-types'; //this is props validation, used to validate the type of props passed to a component
import ReactDOM from 'react-dom'; //used for portal rendering 
import './SignupModal.css';

function SignupModal({ isOpen, onClose }) {
  const [email, setEmail] = useState('');

  if (!isOpen) {
    return null;
  }

  //function runs of submit 
  const handleSubmit = (event) => {
    event.preventDefault(); //prevents page reload 
    if (!email.trim()) {
      return;
    }
    alert(`Thanks! We’ll send updates to ${email}.`);
    setEmail('');
    onClose();
  };

  //renders modal outside normal dom tree that is why it is a pop up 
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
  isOpen: PropTypes.bool.isRequired, //isopen should be boolean and must be passed 
  onClose: PropTypes.func.isRequired,
};

export default SignupModal;
