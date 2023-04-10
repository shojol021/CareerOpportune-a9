import React from 'react';

const FeaturedJobs = ({job}) => {
    const {logoUrl, jobType, companyName, jobMode, workingHours, location, salaryRange} = job;
    return (
        <div>
            <img className='w-24 mb-3' src={logoUrl} alt="" />
            <h3 className='font-bold'>{jobType}</h3>
            <p className='text-gray-500'>{companyName}</p>
            <p>{jobMode}</p>
            <p>{workingHours}</p>
            <p>{location}</p>
            <p>{salaryRange}</p>
            <button className='btn btn-primary'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;