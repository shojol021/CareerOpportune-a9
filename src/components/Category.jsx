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
        <div className='m-5 md:m-9 md:pt-9'>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-gray-800'>Job Category List</h2>
                <p className='font-light'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                <div className=' grid sm:grid-cols-2 md:grid-cols-4 md:w-2/3 mx-auto my-5 md:my-9 md:pb-9'>
                    {
                        data.map((job, index) => <CategoryJobs 
                        key={index}
                        job={job}></CategoryJobs>)
                    }
                </div>
            </div>
            <hr className='border-solid border-gray-300 w-2/3 mx-auto'/>
        </div>
    );
};

export default Category;