import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "Bring structure to every study session with focus, tasks, and progress tracking."
    };
  }

  render() {
    return (
      <footer className='home-footer'>
        <div className='home-footer__brand'>
          <h2>Study Focus</h2>
          <p>{this.state.message}</p>
        </div>
        <div className='home-footer__links'>
          <a href='/'>Home</a>
          <a href='/focus'>Focus</a>
          <a href='/tasks'>Tasks</a>
          <a href='/dashboard'>Dashboard</a>
        </div>
      </footer>
    );
  }
}

export default Footer;