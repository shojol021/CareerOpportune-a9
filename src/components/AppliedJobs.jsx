import React from 'react';
import { getJobsFromLocalStorage } from '../utilities';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div className='m-9'>
            <h2 className='text-center font-bold text-3xl m-5'>Applied Jobs: {appliedJobs.length}</h2>
            <div>
                {
                    appliedJobs.map(appliedJob => <AppliedJob
                    key={appliedJob.id}
                    appliedJob={appliedJob}
                    ></AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;