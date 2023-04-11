import React from 'react';
import { CurrencyDollarIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { useNavigate } from 'react-router-dom';

const AppliedJob = ({ appliedJob }) => {
    const { logoUrl, jobType, companyName, jobMode, workingHours, location, salaryRange, id } = appliedJob;
    const navigate = useNavigate();
    const handleViewDetails = () => {
        navigate(`../job-details/${id}`)
    }
    return (
        <div className='m-3 border-solid border border-sky-300 hover:border-purple-400 rounded-lg bg-gradient-to-br from-sky-200  to-purple-200 p-3'>
            <div className='flex justify-between items-center'>
                <div className='flex items-center'>
                    <div className=' w-32 h-32 border border-solid border-sky-300 rounded-md flex justify-center items-center bg-white'>
                        <img className='w-24 mb-3 rounded-md' src={logoUrl} alt="" />
                    </div>
                    <div className='ms-9'>
                        <h3 className='text-2xl font-bold'>{jobType}</h3>
                        <p className='text-gray-500 mb-3'>{companyName}</p>
                        <p className='text-sky-700 inline border-solid border-2 border-sky-300 rounded px-1 bg-sky-300 me-2'>{jobMode}</p>
                        <p className='text-sky-700 inline border-solid border-2 border-sky-300 rounded px-1 bg-sky-300'>{workingHours}</p>
                        <div className='flex my-3'>
                            <MapPinIcon className="h-6 w-6 text-gray-400 me-3" />
                            <p className='me-5 text-gray-500'>{location}</p>
                            <CurrencyDollarIcon className="h-6 w-6 text-gray-400 me-3" />
                            <p className='text-gray-500'>Salary: {salaryRange}</p>
                        </div>
                    </div>
                </div>
                <div className='me-5'>
                    <button onClick={handleViewDetails} className='btn btn-secondary'>View Details</button>
                </div>
            </div>
        </div>
    );
};

export default AppliedJob;