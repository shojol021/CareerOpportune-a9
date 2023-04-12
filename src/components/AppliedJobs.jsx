import React from 'react';
import { getJobsFromLocalStorage } from '../utilities';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import Footer from './Footer';

const AppliedJobs = () => {
    const appliedJobs = useLoaderData();
    console.log(appliedJobs)
    return (
        <div>
            <div className='m-9'>
                <h2 className='text-center font-bold text-3xl m-5'>Applied Jobs: {appliedJobs? appliedJobs.length : "0"}</h2>
                {
                    !appliedJobs && <div className='h-44'></div> 
                }
                <div>
                    {
                        appliedJobs && appliedJobs.map(appliedJob => <AppliedJob
                            key={appliedJob.id}
                            appliedJob={appliedJob}
                        ></AppliedJob>)
                    }
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;