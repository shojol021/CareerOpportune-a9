

const addToLocalStorage = (job) => {
    let appliedJobs = [];
    const storedJobs = JSON.parse(localStorage.getItem('applied-jobs'))
    if (storedJobs) {
        const isExist = storedJobs.find(findJob => findJob.id === job.id)
        if (!isExist) {
            appliedJobs.push(...storedJobs, job)
            localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
        }
    }
    else {
        appliedJobs.push(job)
        localStorage.setItem('applied-jobs', JSON.stringify(appliedJobs))
    }
}

export { addToLocalStorage }