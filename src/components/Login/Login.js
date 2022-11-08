import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
    return (
        <div className='from-container'>
            <h2 className='login-text'>Login</h2>
            <form className='form'>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-login' type="submit" value="Login" />
            </form>
            <p className='new-u'>New to my photography site? <Link to="/signup">Please SignUp</Link></p>
        </div>
    );
};

export default Login;