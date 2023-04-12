import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BriefcaseIcon, CurrencyDollarIcon, PhoneIcon, EnvelopeIcon, MapPinIcon } from '@heroicons/react/24/solid';
import { addToLocalStorage } from '../utilities';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from './Footer';

const JobDetails = () => {
    const nevigate = useNavigate();
    const handleBackBtn = () => {
        nevigate(-1);
    }

    const params = useParams()
    const [jobDetails, setJobDetails] = useState([])
    useEffect(() => {
        fetch('/featured_jobs.json')
            .then(res => res.json())
            .then(details => setJobDetails(details))
    }, [])

    const findJob = jobDetails.find(job => job.id == params.id);
    if (findJob) {

        const { jobDescription, jobResponsibility, experience, educationalRequirement, address, phone, salaryRange, jobType, email } = findJob;
        return (
            <div className=''>
                <div className='m-9'>
                <h2 className='text-center font-bold text-3xl m-5'>Job Details</h2>
                <div className='grid md:grid-cols-3 my-5'>
                    <div className='md:col-span-2'>
                        <h3 className='mb-3 lg:mr-5'><span className='font-bold'>Job Description:</span> {jobDescription}</h3>
                        <h3 className='mb-3 lg:mr-5'><span className='font-bold'>Job Responsibility:</span> {jobResponsibility}</h3>
                        <h3 className='mb-3 lg:mr-5 font-bold'>Educational Requirements: </h3>
                        <h3 className='mb-3 lg:mr-5'>{educationalRequirement}</h3>
                        <h3 className='mb-3 lg:mr-5 font-bold'>Experience:</h3>
                        <h3 className='mb-3 lg:mr-5'> {experience}</h3>
                    </div>
                    <div>
                        <div className='bg-gradient-to-br from-sky-200  to-purple-200 rounded-lg border border-solid border-sky-400 p-5'>
                            <h2 className='font-bold border-b border-gray-400 mb-4'>Job Details</h2>
                            <div className='flex'>
                                <CurrencyDollarIcon className="h-6 w-6 text-violet-400 me-3" />
                                <p className='text-gray-600 mb-2'><span className='font-bold'>Salary:</span> ${salaryRange}</p>
                            </div>
                            <div className='flex'>
                                <BriefcaseIcon className="h-6 w-6 text-violet-400 me-3" />
                                <p className='text-gray-600 mb-2'><span className='font-bold'>Job Style:</span> {jobType}</p>
                            </div>
                            <h2 className='font-bold border-b border-gray-400 my-4'>Contact Information</h2>
                            <div className='flex'>
                                <PhoneIcon className="h-6 w-6 text-violet-400 me-3" />
                                <p className='text-gray-600 mb-2'><span className='font-bold'>Phone:</span> {phone}</p>
                            </div>
                            <div className='flex'>
                                <EnvelopeIcon className="h-6 w-6 text-violet-400 me-3" />
                                <p className='text-gray-600 mb-2'><span className='font-bold'>Email:</span> {email}</p>
                            </div>
                            <div className='flex'>
                                <MapPinIcon className="h-6 w-6 text-violet-400 me-3" />
                                <p className='text-gray-600 mb-2'><span className='font-bold'>Address:</span> {address}</p>
                            </div>
                        </div>
                        <div className='text-center mt-5'>
                            <button onClick={() => addToLocalStorage(findJob)} className='btn btn-primary w-full'>Apply Now</button>
                        </div>
                    </div>
                </div>

                <div className='text-center md:m-9'>
                    <button onClick={handleBackBtn} className='btn btn-secondary w-36'>Back</button>
                </div>
                </div>
                <ToastContainer />
                <Footer></Footer>
            </div>
        );
    }


};

export default JobDetails;