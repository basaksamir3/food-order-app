import React from 'react';
import logo from '../../assets/logo.png'
import {Link} from 'react-router-dom'
import ReorderIcon from '@mui/icons-material/Reorder';
import { useState } from 'react';
import './Navbar.css'
const Navbar = () => {

    const [showLinks, setShowLinks] = useState(false);
    function toggleNavbar(){
        setShowLinks(!showLinks);
    }
    return (
        <div className = 'navbar'>
            <div className="leftSide" id={showLinks ? 'open': 'close'}>
                <img src={logo} alt="" />
                <div className="hiddenLinks">
                <Link to='/home'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
              
                </div>
            </div>
            <div className="rightSide">
                <Link to='/home'>Home</Link>
                <Link to='/menu'>Menu</Link>
                <Link to='/about'>About</Link>
                <Link to='/contact'>Contact</Link>
                <button onClick={toggleNavbar} >< ReorderIcon /></button>
                
            </div>
        </div>
    );
};

export default Navbar;