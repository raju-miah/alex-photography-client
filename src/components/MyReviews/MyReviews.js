import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import MyReviewsCard from '../MyReviewsCard/MyReviewsCard';
import './MyReviews.css';
import toast, { Toaster } from 'react-hot-toast';

const MyReviews = () => {
    const { user } = useContext(AuthContext);
    const [myreviews, setMyreviews] = useState([]);



    useEffect(() => {
        fetch(`http://localhost:5000/reviews?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyreviews(data))
    }, [user?.email])


    const handelDeleteReview = id => {

        fetch(`http://localhost:5000/reviews/${id}`, {
            method: 'DELETE',

        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.deletedCount > 0) {
                    toast.success('Deleted Successfully');
                    const remaining = myreviews.filter(review => review._id !== id);
                    setMyreviews(remaining);
                }
            })

    }


    return (
        <div>
            <h2>You have review: {myreviews.length}</h2>
            <div className='my-reviews'>
                {
                    myreviews.map(myreview => <MyReviewsCard
                        key={myreview._id}
                        myreview={myreview}
                        handelDeleteReview={handelDeleteReview}
                    ></MyReviewsCard>)
                }
            </div>

            <Toaster />
        </div>
    );
};

export default MyReviews;