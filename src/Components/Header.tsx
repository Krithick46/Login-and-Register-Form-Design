import React from 'react';
import {  NavLink } from 'react-router-dom';
import './Header.css'


function Header() {
    return(
        // <body >
        <header>
        <h2 className='register'>MK</h2>
        <nav className='navigation'>
        <NavLink className='navigation' to="/">Home</NavLink>
        <NavLink className='navigation' to="/">About</NavLink>
        <NavLink className='navigation' to="/">Contact</NavLink>
        {/* <button className='btnLogin-popup'>Login</button> */}
        </nav>   
        </header>
       
        //  </body>
        );
    }
export default Header;