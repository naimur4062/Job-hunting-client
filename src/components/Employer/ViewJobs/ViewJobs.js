import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
import './ViewJobs.scss';
import AOS from "aos";
import "aos/dist/aos.css";

const ViewJobs = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data.reverse()))
    }, []);

    let history = useHistory();

    const showApplicants = (id) => {
        history.push(`/applicant/${id}`);
    };

    return (
        <div className="container-fluid" >
            {
                jobs.length ? <>
                    <h1 data-aos="fade-down" style={{ color: '#ccd6f6' }} className="text-center">All Jobs List</h1>
                    <div className="d-flex justify-content-center p-4 pr-5">
                        <div data-aos="zoom-in" className="container job shadow mb-3 bg-body p-4" style={{ borderRadius: '8px' }}>
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

export default ViewJobs;