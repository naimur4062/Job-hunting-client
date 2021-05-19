import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Button } from 'react-bootstrap';
import './ViewJobs.css';

const ViewJobs = () => {
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))
    }, [jobs]);
    return (
        <div className="container-fluid" >
            <div className="d-flex justify-content-center p-4 pr-5">
                <div className="container job shadow mb-3 mt-5 bg-body p-4" style={{ height: '90vh', borderRadius: '8px' }}>
                    <div className="row pt-3 ps-3 d-flex justify-content-between job-heading">
                        <p className="col-md-2">Title</p>
                        <p className="col-md-2">Type</p>
                        <p className="col-md-2">City</p>
                        <p className="col-md-2">Openings</p>
                        <p className="col-md-2">Applicants</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-3 me-5">
                            {
                                jobs.map(job => <p>{job.title}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3">
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
                                jobs.map(job => <Button className="mb-1">See Applicants</Button>)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewJobs;