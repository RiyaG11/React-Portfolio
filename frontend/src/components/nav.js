import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome,FaEnvelopeOpen,FaUser,FaBriefcase } from 'react-icons/fa';
const Navbar=()=>{
    return(
        <div className='navbar'>
            <div className='tokyo'><Link to="/">PORTFOLIO</Link></div>
            <ul>
                <li><Link to="/"><FaHome className='icon'/> Home</Link></li>
                <li><Link to="/about"><FaUser className='icon'/> About</Link></li>
                <li><Link to="/portfolio"><FaBriefcase className='icon'/> Portfolio</Link></li>
                <li><Link to="/contact"><FaEnvelopeOpen className='icon'/> Contact</Link></li>
            </ul>
            <div className='copyright'>
                <h5>@ 2023 Tokyo</h5>
                <h5>created by RIYA GUPTA</h5>
            </div>
            
        </div>
    );
}
export default Navbar;