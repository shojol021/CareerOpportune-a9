import React, { useEffect, useState } from 'react';
import CategoryJobs from './CategoryJobs';

const Category = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('jobs_category.json')
            .then(res => res.json())
            .then(info => setData(info))
    }, [])
    return (
        <div className='m-9'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-gray-800'>Job Category List</h2>
                <p className='font-light'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className='flex text-start justify-between w-2/3 mx-auto my-9 pb-9'>
                    {
                        data.map((job, index) => <CategoryJobs 
                        key={index}
                        job={job}></CategoryJobs>)
                    }
                </div>
            </div>
        </div>
    );
};

export default Category;