import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

const SignUp = () => {
    return (
        <div className='from-container'>
            <h2 className='login-text'>Sign Up</h2>
            <form className='form'>
                <div className="form-control">
                    <label htmlFor="email">Your Name</label>
                    <input type="text" name="name" required />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Your PhotoURL</label>
                    <input type="text" name="photoURL" required />
                </div>
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
            <p className='new-u'>Already Have an account? <Link to="/login">Please Login</Link></p>
        </div>
    );
};

export default SignUp;