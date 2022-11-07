import React from 'react';
import './Home.css';

const Home = () => {
    return (
        <div className='home'>
            <div className='home-text'>
                <h1 className='my-name'>Alex Smith</h1>
                <p>______ a Freelance Photographer</p>
                <p>I'm photographer based in New Work, and I'm <br />
                    very dedicated to my work</p>
                <p className='my-solo'>"Photography in not to create a moment, <br />Photography is capture the moment"</p>
            </div>
            <div className='home-img'>
                <img src="https://i.ibb.co/LPcFzX8/home-img.png" alt="" />
            </div>
        </div>
    );
};

export default Home;