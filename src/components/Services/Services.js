import React, { useEffect, useState } from 'react';
import useTitle from '../../hooks/useTitle';
import ServicesCard from '../ServicesCard/ServicesCard';
import './Services.css';

const Services = () => {

    const [services, setServices] = useState([]);

    useTitle('Services');

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1>My All Services</h1>
            <div className='services-card-P'>
                {
                    services.length === 0 ?
                        <>
                            <div className='spinner'></div>
                        </>
                        :
                        <>
                            {
                                services.map(service => <ServicesCard
                                    key={service._id}
                                    service={service}
                                ></ServicesCard>)
                            }
                        </>
                }
            </div>
        </div>
    );
};

export default Services;