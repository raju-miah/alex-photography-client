import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';

const Header = () => {
    const { user, logoutUser } = useContext(AuthContext);

    const handelLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className='navbar'>
            <h2 className='nav-logo'>Alex Photography</h2>
            <ul className='nav-links'>
                <Link to='/'><li>Home</li></Link>
                <Link to='/services'><li>Services</li></Link>
                <Link to='/blog'><li>Blog</li></Link>

                {
                    user?.email ?
                        <>
                            <Link to='/myreviews'><li>My Reviews</li></Link>
                            <Link to='/addservice'><li>Add Service</li></Link>
                            <button onClick={handelLogOut} className="nav-btn">Logout</button>
                        </>
                        :
                        <>
                            <Link to='/login'><button className='nav-btn'>Login</button></Link>
                            <Link to='/signup'><button className='nav-btn'>Sign Up</button></Link>
                        </>
                }



            </ul>
        </nav>
    );
};

export default Header;