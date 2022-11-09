import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './Header.css';
import { FaBars } from 'react-icons/fa';
import { ImCross } from 'react-icons/im';

const Header = () => {
    const [menu, setMenu] = useState(false);
    const { user, logoutUser } = useContext(AuthContext);

    const handelLogOut = () => {
        logoutUser()
            .then(() => { })
            .catch(error => console.error(error))
    }


    return (
        <nav className='navbar'>
            <h2 className='nav-logo'>Alex Photography</h2>
            <ul className={menu ? "nav-links-mobile" : "nav-links"} onClick={() => setMenu(false)}>
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
            <button onClick={() => setMenu(!menu)} className='mobile-menu'>
                {
                    menu ?
                        <ImCross></ImCross>
                        : <FaBars></FaBars>
                }
            </button>
        </nav>
    );
};

export default Header;