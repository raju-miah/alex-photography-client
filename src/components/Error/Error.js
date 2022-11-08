import React from 'react';
import './Error.css';

const Error = () => {
    return (
        <div className='error-page'>
            <div>
                <h2>404: page not found</h2>
            </div>

            <img src="https://i.ibb.co/hD2mV4n/error-img.png" alt="" />

            <div>
                <p>wrong path: 404</p>
                <p>or</p>
                <p>check your internet</p>
            </div>
        </div>
    );
};

export default Error;