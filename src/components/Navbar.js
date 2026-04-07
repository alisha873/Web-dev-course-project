import React, { useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import { FaBars, FaTimes } from "react-icons/fa"; //fabars is menu bar and fatimes is close icon
import './Navbar.css';
import SignupModal from './SignupModal';

function Navbar(){
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);
    const [showSignup, setShowSignup] = useState(false);

    const handleClick=()=>setClick(!click);
    const closeMobileMenu=()=>setClick(false);

    useEffect(() => {
  const handleResize = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  handleResize(); // run once initially

  window.addEventListener('resize', handleResize);

  return () => window.removeEventListener('resize', handleResize);
}, []);
    return (
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to="/" className='navbar-logo' onClick={closeMobileMenu}>
                Study Focus 
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    {click ? <FaTimes /> : <FaBars />}
                </div>
                <ul className={click ? 'nav-menu active':'nav-menu'}>
                    <li className='nav-item'>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/tasks' className='nav-links' onClick={closeMobileMenu}>Tasks</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/dashboard' className='nav-links' onClick={closeMobileMenu}>DashBoard</Link>
                    </li>
                </ul>
                {button && (
                  <button className='signup-btn' onClick={() => setShowSignup(true)}>
                    SIGN UP
                  </button>
                )}
            </div>
            <SignupModal isOpen={showSignup} onClose={() => setShowSignup(false)} />
        </nav>

    )
}

export default Navbar