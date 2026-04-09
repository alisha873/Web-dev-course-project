import React, { useState, useEffect } from 'react'; //use state manages state and useEffect manages side effects 
import {Link} from 'react-router-dom'; //links avoids page reload 
import { FaBars, FaTimes } from "react-icons/fa"; //fabars is menu bar and fatimes is close icon
import './Navbar.css';
import SignupModal from './SignupModal'; //importing a child component 

//use state lets a functional component store and update data 
//side-effect is anything apart from rendering such as api calls, timers, event listeners 
//react hooks allow functional components to use features that were only available to class components pehle such as state
function Navbar(){
    const [click,setClick]=useState(false);
    const [button, setButton] = useState(true);
    const [showSignup, setShowSignup] = useState(false); //controls sign up pop up opens or close, sign up buttons shows only on large screens 

    const handleClick=()=>setClick(!click); //toggles menu 
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

  window.addEventListener('resize', handleResize);  //window listens to resize 

  return () => window.removeEventListener('resize', handleResize);
}, []); //[] - run only once on mount 
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
//props pass data from parent to child 
export default Navbar