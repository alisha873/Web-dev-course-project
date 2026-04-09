import React from 'react';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';

function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-1.mp4' autoPlay loop muted />
      <div className='hero-content'>
        <h1>FOCUS UP</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button
            buttonStyle='btn--outline'
            buttonSize='btn--large'
            to='/focus'
          >
            GET STARTED
          </Button>
        </div>
      </div>
    </div>
  );
}

//created a reusable Button component and used props to control its style, size, and navigation behavior.
export default HeroSection;