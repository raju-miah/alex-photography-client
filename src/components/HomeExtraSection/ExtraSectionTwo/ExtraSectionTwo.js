import React from 'react';
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter } from "react-icons/fa";
import './ExtraSectionTwo.css';

const ExtraSectionTwo = () => {
    return (
        <div className='extra-two'>
            <div className='extra-two-left'>
                <h2>GREETINGS !</h2>
                <p>Interested in learning more? I would love to learn more about your Wedding, birthday, Events and how we can collaborate. For more info about booking and availability, just email me info@alexphotography.com or use the services i provide.</p>
            </div>
            <div className='extra-two-right'>
                <h2>FOLLOW ALONG</h2>
                <FaFacebook className='fb' />
                <FaInstagram className='insta' />
                <FaPinterest className='pin' />
                <FaTwitter className='tw' />
            </div>
        </div>
    );
};

export default ExtraSectionTwo;