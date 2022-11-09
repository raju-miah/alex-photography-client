import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';
import ExtraSectionOne from '../HomeExtraSection/ExtraSectionOne/ExtraSectionOne';
import ExtraSectionTwo from '../HomeExtraSection/ExtraSectionTwo/ExtraSectionTwo';
import './Home.css';

const Home = () => {
    const [servicesHome, setServicesHome] = useState([]);

    useTitle('Home');

    useEffect(() => {
        fetch('http://localhost:5000/serviceshome')
            .then(res => res.json())
            .then(data => setServicesHome(data))
    }, [])


    return (
        <>
            <div className='home'>
                <div className='home-text'>
                    <h1 className='my-name'>Alex Smith</h1>
                    <p>______ a Freelance Photographer</p>
                    <p>I'm photographer based in New Work, and I'm <br />
                        very dedicated to my work</p>
                    <p className='my-solo'>"Photography in not to create a moment, <br />Photography is capture the moment"</p>
                </div>
                <div>
                    <img className='home-img' src="https://i.ibb.co/LPcFzX8/home-img.png" alt="" />
                </div>
            </div>
            <div>
                <h2>My Services</h2>
                <div className="services-home">
                    {
                        servicesHome.map(servicehome => <div
                            key={servicehome._id}

                        >
                            <div className='services-home-card'>
                                <img src={servicehome.img} alt="" />
                                <div>
                                    <h2>{servicehome.title}</h2>
                                    <p>Price: ${servicehome.price}</p>
                                    <>
                                        {
                                            servicehome.details.length > 100 ?
                                                <p>{servicehome.details.slice(0, 100) + '...Read More'}</p>
                                                :
                                                <p>{servicehome.details}</p>
                                        }
                                    </>
                                </div>
                                <Link to={`/services/${servicehome._id}`}>

                                    <button className='service-card-home-btn'>Details</button>
                                </Link>
                            </div>

                        </div>)
                    }
                </div>
                <Link to="/services">
                    <button className='home-see-all-btn'>See All</button>
                </Link>
            </div>

            <ExtraSectionOne></ExtraSectionOne>
            <ExtraSectionTwo></ExtraSectionTwo>
        </>
    );
};

export default Home;