import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AppliedJob from './AppliedJob';
import Footer from './Footer';
import { ArrowDownIcon } from '@heroicons/react/24/solid';


const AppliedJobs = () => {

    const appliedJobs = useLoaderData();
    const [onSite, setOnsite] = useState(appliedJobs);

    const handleOnSite = (isTrue) => {
        if (isTrue) {
            const onSiteJobs = appliedJobs.filter(job => job.jobMode === "Onsite")
            setOnsite(onSiteJobs);
        }
        else {
            const remoteJobs = appliedJobs.filter(job => job.jobMode === "Remote")
            setOnsite(remoteJobs);
        }
    }

    return (
        <div>
            <div className='m-9'>
                <div className='flex justify-between items-center m-5'>
                    <h2 className='text-center font-bold sm:text-2xl md:text-3xl'>Applied Jobs: {appliedJobs ? onSite.length : "0"}</h2>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className="m-1 p-2">
                            <div className='flex items-center btn btn-info'>
                                <span className=''>Filter By</span>
                                <span></span><ArrowDownIcon className="h-4 w-4 text-violet-800" />
                            </div>
                        </label>
                        <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a onClick={() => handleOnSite(true)}>On Site Jobs</a></li>
                            <li><a onClick={() => handleOnSite(false)}>Remote Jobs</a></li>
                        </ul>
                    </div>
                </div>
                {
                    !appliedJobs && <div className='h-44'></div>
                }
                <div>
                    {
                        appliedJobs && onSite.map(appliedJob => <AppliedJob
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