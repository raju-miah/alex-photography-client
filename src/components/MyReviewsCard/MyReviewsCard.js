import React from 'react';
import './MyReviewsCard.css';

const MyReviewsCard = ({ myreview }) => {
    const { message, serviceName, photo, client } = myreview;
    return (
        <div>
            <div className='my-review-card'>
                <p>{message}</p>
                <img className='my-review-card-img' src={photo} alt="" />
                <h3>{client}</h3>
                <p>{serviceName}</p>
                <div>
                    <button className='delete-btn'>Delete</button>
                    <button className='update-btn'>Update</button>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;