import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ViewJobs.css';

const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [jobs]);

    let history = useHistory();

    const showApplicants = (id) => {
        history.push(`/applicant/${id}`);
    };

    return (
        <div className="container-fluid" >
            <h1 className="text-center text-secondary">All Jobs List</h1>
            <div className="d-flex justify-content-center p-4 pr-5">
                <div className="container job shadow mb-3 bg-body p-4" style={{ borderRadius: '8px' }}>
                    <div className="row pt-3 ps-3 d-flex justify-content-between job-heading">
                        <p className="col-md-2">Title</p>
                        <p className="col-md-2">Type</p>
                        <p className="col-md-2">City</p>
                        <p className="col-md-2">Openings</p>
                        <p className="col-md-2">Applicants</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-3 title">
                            {
                                jobs.map(job => <p>{job.title}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 type">
                            {
                                jobs.map(job => <p>{job.type}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 city">
                            {
                                jobs.map(job => <p>{job.city}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 openings">
                            {
                                jobs.map(job => <p>{job.openings}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 applicants">
                            {
                                jobs.map(job => <Button onClick={() => showApplicants(job._id)} className="mb-1">See Applicants</Button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewJobs;