import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import toast, { Toaster } from 'react-hot-toast';

const UpdateReview = () => {
    const singleReview = useLoaderData();
    const { _id, serviceName } = singleReview;

    const { user } = useContext(AuthContext);

    const handelReviewUpdate = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unRegistered';
        const photo = form.photo.value;
        const message = form.message.value;

        const update = {
            service: _id,
            serviceName,
            client: name,
            email,
            photo,
            message
        }

        console.log(update)

        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(update)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    toast.success('Your Review Updated Successfully')
                    form.reset();
                }
                console.log(data)
            })


    }

    return (
        <div>
            <h2>Up date your review</h2>
            <div>
                <form onSubmit={handelReviewUpdate}>
                    <h4>Update Your Review on My Service</h4>
                    <h2>{serviceName}</h2>
                    <div className='review-sec'>
                        <div className='review-controlar'>
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name='name' />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="email">Your Email</label>
                            <input type="text" name='email' defaultValue={user?.email} readOnly />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="photo">Your PhotoURL</label>
                            <input type="text" name='photo' />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="message">Write details</label>
                            <textarea name="message" required id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <input className='add-review-btn' type="submit" value="Update Your Review" />
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default UpdateReview;