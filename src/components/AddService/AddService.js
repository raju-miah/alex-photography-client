import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import useTitle from '../../hooks/useTitle';

const AddService = () => {

    useTitle('Add Service');

    const handelAddService = event => {
        event.preventDefault();

        const form = event.target;

        const serviceId = form.serviceId.value;
        const serviceName = form.serviceName.value;
        const photo = form.photo.value;
        const price = form.price.value;
        const details = form.details.value;

        const addService = {
            service_id: serviceId,
            title: serviceName,
            img: photo,
            price,
            details
        }

        console.log(addService)

        fetch('http://localhost:5000/serviceshome', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(addService)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success('Service Added Successfully')
                    form.reset();
                }
                console.log(data)
            })
            .catch(error => console.error(error));

    }

    return (
        <div>
            <h1>Add Your Service</h1>
            <div>
                <form onSubmit={handelAddService} className="review-post-form">
                    <div className='review-sec'>
                        <div className='review-controlar'>
                            <label htmlFor="serviceId">Service Id</label>
                            <input type="text" name='serviceId' required />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="serviceName">Service Name</label>
                            <input type="text" name='serviceName' required />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="photo">Service PhotoURL</label>
                            <input type="text" name='photo' required />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="price">Service Price</label>
                            <input type="text" name='price' required />
                        </div>
                        <div className='review-controlar'>
                            <label htmlFor="details">Write About Service details</label>
                            <textarea name="details" required id="" cols="30" rows="10"></textarea>
                        </div>
                    </div>
                    <input className='add-review-btn' type="submit" value="Add Your Service" />
                </form>
            </div>
            <Toaster />
        </div>
    );
};

export default AddService;