import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './SignUp.css';

const SignUp = () => {
    const { signupUser } = useContext(AuthContext);

    useTitle('Sign Up');

    const handelSignUp = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        signupUser(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                console.error(error)
            })
    }



    return (
        <div className='from-container'>
            <h2 className='login-text'>Sign Up</h2>
            <form onSubmit={handelSignUp} className='form'>
                <div className="form-control">
                    <label htmlFor="name">Your Name</label>
                    <input type="text" name="name" />
                </div>
                <div className="form-control">
                    <label htmlFor="email">Email</label>
                    <input type="email" name="email" required />
                </div>
                <div className="form-control">
                    <label htmlFor="password">Password</label>
                    <input type="password" name="password" required />
                </div>
                <input className='btn-login' type="submit" value="Sign Up" />
            </form>
            <p className='new-u'>Already Have an account? <Link to="/login">Please Login</Link></p>
        </div>
    );
};

export default SignUp;