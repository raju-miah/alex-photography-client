import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesCard.css';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

const ServicesCard = ({ service }) => {
    const { _id, img, title, price, details } = service;
    return (
        <div>
            <div className='service-card'>

                {/* react photo viewer */}
                <PhotoProvider>
                    <PhotoView src={img}>
                        <img src={img} alt="" />
                    </PhotoView>
                </PhotoProvider>

                <div>
                    <h2>{title}</h2>
                    <p>Price: ${price}</p>
                    <>
                        {
                            details.length > 100 ?
                                <p>{details.slice(0, 100) + '...Read More'}</p>
                                :
                                <p>{details}</p>
                        }
                    </>
                </div>
                <Link to={`/services/${_id}`}>

                    <button className='service-card-btn'>Details</button>
                </Link>

            </div>
        </div>
    );
};

export default ServicesCard;