import React from 'react';

const FeaturedJobs = ({ job }) => {
    const { logoUrl, jobType, companyName, jobMode, workingHours, location, salaryRange } = job;
    return (
        <div className='m-3 border-solid border border-sky-300 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
            <img className='w-24 mb-3 rounded-md' src={logoUrl} alt="" />
            <h3 className='text-2xl font-bold'>{jobType}</h3>
            <p className='text-gray-500 mb-1'>{companyName}</p>
            <p className='text-sky-700 inline border-solid border-2 border-sky-300 rounded px-1 bg-sky-300 me-2'>{jobMode}</p>
            <p className='text-sky-700 inline border-solid border-2 border-sky-300 rounded px-1 bg-sky-300'>{workingHours}</p>
            <div className='flex my-2'>
                <p className='me-5 text-gray-500'>{location}</p>
                <p className='text-gray-500'>Salary: ${salaryRange}</p>
            </div>
            <button className='btn btn-secondary'>View Details</button>
        </div>
    );
};

export default FeaturedJobs;