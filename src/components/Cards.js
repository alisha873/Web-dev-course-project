import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Explore Features</h1>

      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>

            <CardItem
              src='images/img1.png' 
              text='Start focused study sessions using Pomodoro technique'
              label='Focus'
              path='/focus'
            />

            <CardItem
              src='images/img2.avif'
              text='Track your productivity and view your stats'
              label='Dashboard'
              path='/dashboard'
            />

          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;