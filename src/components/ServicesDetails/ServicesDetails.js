import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../Contexts/AuthProvider/AuthProvider';
import './ServicesDetails.css';
import toast, { Toaster } from 'react-hot-toast';

const ServicesDetails = () => {
    const { _id, img, title, price, details } = useLoaderData();
    const { user } = useContext(AuthContext);

    const handelReview = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = user?.email || 'unRegistered';
        const photo = form.photo.value;
        const message = form.message.value;


        const review = {
            service: _id,
            serviceName: title,
            client: name,
            email,
            photo,
            message
        }

        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(review)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.acknowledged) {
                    toast.success('Review Added Successfully !')
                    form.reset();
                }
            })
            .catch(error => console.error(error));

    }

    return (
        <>
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

            <div>
                <h2>Add Your Review</h2>

                <form onSubmit={handelReview}>
                    <h4>Review My Service</h4>
                    <h2>{title}</h2>
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
                            <textarea name="message" id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <input className='add-review-btn' type="submit" value="Add Your Review" />
                </form>
                <Toaster />
            </div>

        </>
    );
};

export default ServicesDetails;