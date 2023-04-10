import React from 'react';

const CategoryJobs = ({job}) => {
    const {logoUrl, jobType, vacancies} = job;
    return (
        <div>
            <img className='w-16 h-16 border border-sky-300 hover:border-purple-500 rounded-md' src={logoUrl} alt="" />
            <h3 className='font-bold text-sky-600'>{jobType}</h3>
            <p className='font-light'>{vacancies} Jobs Available</p>
        </div>
    );
};

export default CategoryJobs;