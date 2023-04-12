import React from 'react';
import Lottie from "lottie-react";
import hiring from '../assets/41391-we-are-hiring-get-ready-to-work-job-recruitment-isometric-hiring-process.json'

const Hero = () => {
    return (
        <div className='m-5 md:m-9'>
            <div className='flex flex-col-reverse md:flex-row justify-between items-center md:mb-9 pb-9'>
                <div className='flex flex-col justify-center md:w-1/2'>
                    <h2 className='text-3xl md:text-7xl font-bold text-gray-700 md:w-10/12'>One Step Closer To Your <span className='text-primary'>Dream Job</span></h2>
                    <p className='w-3/4 font-light my-3'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                    <button className='btn btn-primary lg:w-1/3'>Get Started</button>

                </div>
                <div className='md:w-1/2 mb-5 md:mb-0'>
                    <Lottie animationData={hiring} loop={true} />
                </div>
            </div>
            <hr className='border-solid border-gray-300 w-2/3 mx-auto' />
        </div>

    );
};

export default Hero;