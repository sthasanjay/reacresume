import React from 'react'
import {NavLink} from 'react-router-dom';
import sanjay from '../img/sanjay.jpg';
const NavBar = () => {
    
    return (
      
        <div className = "NavBar">
        <nav className = "nav">
            <div className = "profile">
                <img src = {sanjay} alt = ""/>
            </div>
            <ul className = "nav-items">
                <li className = "nav-item"><NavLink to = "/" exact activeClassName = "active" >Home</NavLink></li>
                <li className = "nav-item"><NavLink to = '/about'>About</NavLink></li>
                <li className = "nav-item"><NavLink to = '/blog'>Blog</NavLink></li>
                <li className = "nav-item"><NavLink to = '/portfolio'>Portfolio</NavLink></li>
                <li className = "nav-item"><NavLink to = '/contact'>Contact</NavLink></li>


            </ul>
            <footer className = "footer">
                <p>@2021</p>
            </footer>
        </nav>
            
        </div>
    )
}

export default NavBar
