import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const JobDetails = () => {
    const params = useParams()
    console.log(params.id)
    const [jobDetails, setJobDetails] = useState([])
    useEffect(() => {
        fetch('/featured_jobs.json')
            .then(res => res.json())
            .then(details => setJobDetails(details))
    }, [])

    const findJob = jobDetails.find(job => job.id == params.id);
    console.log(findJob);
    if (findJob) {

        const { jobDescription, jobResponsibility, experience, educationalRequirement, address, phone, salaryRange, jobType, email } = findJob;
        return (
            <div className='m-9'>
                <h2 className='text-center font-bold text-3xl m-5'>Job Details</h2>
                <div className='grid grid-cols-3'>
                    <div className='col-span-2'>
                        <h3 className='mb-3 lg:mr-5'><span className='font-bold'>Job Description:</span> {jobDescription}</h3>
                        <h3 className='mb-3 lg:mr-5'><span className='font-bold'>Job Responsibility:</span> {jobResponsibility}</h3>
                        <h3 className='mb-3 lg:mr-5'><span className='font-bold'>Educational Requirements:</span> {educationalRequirement}</h3>
                    </div>
                    <div className='bg-gradient-to-br from-sky-200  to-purple-200 rounded-lg border border-solid border-sky-400 p-5'>
                        <h2 className='font-bold border-b border-gray-400 mb-4'>Job Details</h2>
                        <p className='text-gray-600'>Salary: ${salaryRange}</p>
                        <p className='text-gray-600'>Job Title: {jobType}</p>
                        <h2 className='font-bold border-b border-gray-400 my-4'>Contact Information</h2>
                        <p className='text-gray-600'>Phone: {phone}</p>
                        <p className='text-gray-600'>Email: {email}</p>
                        <p className='text-gray-600'>Address: {address}</p>
                    </div>
                </div>
            </div>
        );
    }


};

export default JobDetails;