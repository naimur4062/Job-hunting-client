import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Job from '../Job/Job';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
        .then(res => res.json())
        .then(data => setJobs(data))
    }, [jobs])

    return (
        <div className="row container-fluid">
            <h1 className="text-center mt-2 mb-5 text-secondary">Available Jobs</h1>
            {
                jobs.map(job => <Job key={job._id} job={job} />)
            }
        </div>
    );
};

export default Jobs;