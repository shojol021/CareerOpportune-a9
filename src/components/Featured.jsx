import React, { useEffect, useState } from 'react';
import FeaturedJobs from './FeaturedJobs';

const Featured = () => {
    const [featured, setFeatured] = useState([]);
    useEffect(() => {
        fetch('featured_jobs.json')
            .then(res => res.json())
            .then(jobs => setFeatured(jobs))
    }, [])

    const [showAll, setShowAll] = useState(false)

    const handleShowAllBtn = () => {
        setShowAll(!showAll);
    }

    return (

        <div id="featured" className='md:m-9 p-9'>
            <h2 className='text-3xl font-bold  text-gray-800 text-center'>Featured Jobs</h2>
            <p className='text-gray-500 text-center'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            <div className='grid lg:grid-cols-2 gap-5 md:m-9 py-5'>
                {
                    featured.slice(0, showAll ? 8 : 4).map(job => <FeaturedJobs
                        key={job.id}
                        job={job}
                        ></FeaturedJobs>)
                }
            </div>
            <div className='text-center'>
                <button onClick={handleShowAllBtn} className='btn btn-primary'>{showAll? `Show Less` : `Show All`}</button>
            </div>
        </div>
    );
};

export default Featured;