import React from 'react';
import Lottie from "lottie-react";
import hiring from '../assets/41391-we-are-hiring-get-ready-to-work-job-recruitment-isometric-hiring-process.json'

const Hero = () => {
    return (
        <div className='flex justify-center items-center h-screen'>
            <div className='flex flex-col justify-center items-center flex-1'>
                <h2 className='text-7xl font-bold text-gray-700 w-10/12'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h2>
                <p className='w-3/4 font-light my-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <div className='lg:ms-auto'>
                    <button className='btn btn-primary'>Get Started</button>
                </div>
            </div>
            <div className='flex-1'>
                <Lottie animationData={hiring} loop={true} />
            </div>
        </div>

    );
};

export default Hero;