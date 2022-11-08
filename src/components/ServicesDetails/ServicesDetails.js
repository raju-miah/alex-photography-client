import React from 'react';
import { useLoaderData } from 'react-router-dom';
import './ServicesDetails.css';

const ServicesDetails = () => {
    const { img, title, price, details } = useLoaderData();

    return (
        <div>
            <h2>This is services details</h2>
            <div className='servicesDetails'>
                <img src={img} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>Price: ${price}</p>
                    <p><strong>Details:</strong> {details}</p>
                </div>
            </div>
        </div>
    );
};

export default ServicesDetails;