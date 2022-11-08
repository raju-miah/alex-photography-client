import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className='navbar'>
            <h2 className='nav-logo'>Alex Photography</h2>
            <ul className='nav-links'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/blog'><li>Blog</li></Link>
                <Link to='/login'><li>Login</li></Link>
                <Link to='/signup'><li>SignUp</li></Link>
            </ul>
        </nav>
    );
};

export default Header;