import React, { useContext } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import useTitle from '../../hooks/useTitle';
import './Login.css';

const Login = () => {
    const { loginUser, googleSignIn } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';

    useTitle('Login');

    const handelLogin = event => {
        event.preventDefault();

        const form = event.target;

        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then(result => {
                const user = result.user;
                // console.log(user)

                const currentUser = {
                    email: user.email
                }

                console.log(currentUser);

                // jwt token
                fetch('http://localhost:5000/jwt', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(currentUser)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        // set token in local storage
                        localStorage.setItem('token', data.token);
                        navigate(from, { replace: true });
                    })



            })
            .catch(error => {
                console.error(error)
            })
    }

    const handelGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.error(error))
    }

    return (
        <div className='from-container'>
            <h2 className='login-text'>User Login</h2>
            <form onSubmit={handelLogin} className='form'>
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
            <button onClick={handelGoogleSignIn} className="btn-google">SignIn With Google</button>
            <p className='new-u'>New to my photography site? <Link to="/signup">Please SignUp</Link></p>
        </div>
    );
};

export default Login;