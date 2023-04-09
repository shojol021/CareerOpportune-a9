import React, { useEffect, useState } from 'react';

const Category = () => {
    const [data, setData] = useState;
    useEffect(() => {
        fetch('jobs_category.json')
        .then(res => res.json())
        .then(info => setData(info))
    }, [])
    return (
        <div>
            <div className='text-center'>
                <h2 className='text-3xl font-bold text-gray-800'>Job Category List</h2>
                <p className='font-light'>Explore thousands of job opportunities with all the information you need. Its your future</p>
                {
                    data.map(a => <p>hi</p>)
                }
            </div>
        </div>
    );
};

export default Category;