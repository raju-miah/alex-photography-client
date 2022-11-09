import React from 'react';
import { Link } from 'react-router-dom';
import './MyReviewsCard.css';

const MyReviewsCard = ({ myreview, handelDeleteReview }) => {
    const { _id, message, serviceName, photo, client } = myreview;

    return (
        <div>
            <div className='my-review-card'>
                <p>{message}</p>
                <img className='my-review-card-img' src={photo} alt="" />
                <h3>{client}</h3>
                <p>{serviceName}</p>
                <div>
                    <button onClick={() => handelDeleteReview(_id)} className='delete-btn'>Delete</button>
                    <Link to={`/reviews/${_id}`}><button className='update-btn'>Update</button></Link>
                </div>
            </div>
        </div>
    );
};

export default MyReviewsCard;