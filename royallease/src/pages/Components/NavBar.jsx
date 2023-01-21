import logo from'../assets/images/LOGO.png'
import logo2 from '../assets/images/LOGOYELLOW.png'
import moondark from'../assets/images/moon-dark.png'
import { Link } from 'react-router-dom';
import { useState, useEffect } from "react";
function NavBar() {

    const test= ()=>{
        alert('dssdf')
    }
    return <div className='nav-bar'>
        <img className='logo' src={logo} alt="" />
        <img className='logo2'  src={logo2} alt="" />
        <ul className='navlinks'>
            <li class="1">HOME</li>
            <li>SERVICES</li>
            <li>PORTFOLIO</li>
            <li>STORE</li>
            <li>CONTACT</li>
            <li>ABOUT</li>
        </ul>
        <Link className='login-button'>Login</Link>
        <Link className='sign-button'>Sign Up</Link>
        <img className='moon' src={moondark} alt="" />
<h1>hello</h1>
    </div>;
}

export default NavBar;