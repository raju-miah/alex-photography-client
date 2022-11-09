import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';
import './MyReviews.css';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])



    return (
        <div>
            <h2>You have review: {myreviews.length}</h2>
            <div className='my-reviews'>
                {
                    myreviews.map(myreview => <MyReviewsCard
                        key={myreview._id}
                        myreview={myreview}
                    ></MyReviewsCard>)
                }
            </div>
        </div>
    );
};

export default MyReviews;