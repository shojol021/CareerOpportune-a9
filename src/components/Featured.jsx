import React, { useEffect, useState } from 'react';
import FeaturedJobs from './FeaturedJobs';

const Featured = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('featured_jobs.json')
        .then(res => res.json())
        .then(jobs => setFeatured(jobs))
    }, [])
    return (
        <div className=''>
            <h2 className='text-3xl font-bold  text-gray-800 text-center'>Featured Jobs</h2>
            <p className='font-light text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-2 m-9'>
                {
                    featured.map(job => <FeaturedJobs
                    key={job.id}
                    job={job}></FeaturedJobs>)
                }
            </div>
        </div>
    );
};

export default Featured;