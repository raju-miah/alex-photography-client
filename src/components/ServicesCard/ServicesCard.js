import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';

const ServicesCard = ({ service }) => {
    const { _id, img, title, price, details } = service;
    return (
        <div>
            <div className='service-card'>
                <img src={img} alt="" />
                <div>
                    <h2>{title}</h2>
                    <p>Price: ${price}</p>
                    <>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '... Read More'}</p>
                                :
                                <p>{details}</p>
                        }
                    </>
                </div>
                <button className='service-card-btn'>
                    <Link to={`/services/${_id}`}>Details</Link>
                </button>
            </div>
        </div>
    );
};

export default ServicesCard;