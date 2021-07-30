import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import Job from '../Job/Job';
import '../../Style/TextColor.scss';

const Jobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data.reverse()))
    }, [jobs])

    return (
        <div className="row container-fluid">
            {jobs.length ? <>
                <h1 style={{ color: '#ccd6f6' }} className="text-center mt-2 mb-5">Available Jobs</h1>
                {
                    jobs.map(job => <Job key={job._id} job={job} />)
                }
            </>
                :
                <div className="text-center mt-5">
                    <Spinner animation="grow" variant="primary" />
                    <Spinner animation="grow" variant="success" />
                    <Spinner animation="grow" variant="danger" />
                    <Spinner animation="grow" variant="warning" />
                    <Spinner animation="grow" variant="info" />
                    <Spinner animation="grow" variant="light" />
                </div>
            }
        </div>
    );
};

export default Jobs;