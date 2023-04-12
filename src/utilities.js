
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const addToLocalStorage = (job) => {
    let appliedJobs = [];
    const storedJobs = JSON.parse(localStorage.getItem('applied-jobs'))
    if (storedJobs) {
        const isExist = storedJobs.find(findJob => findJob.id === job.id)
        if (!isExist) {
            toast("Congratulation! You have applied for the job successfully!");
            appliedJobs.push(...storedJobs, job)
            localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
        }
        else{
            toast("Already Applied!");
        }
    }
    else {
        toast("Congratulation! You have applied for the job successfully!");
        appliedJobs.push(job)
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
    }
}

const getJobsFromLocalStorage = () => {
    const storedJobs = JSON.parse(localStorage.getItem('applied-jobs'))
    return storedJobs;
}

export { addToLocalStorage, getJobsFromLocalStorage }