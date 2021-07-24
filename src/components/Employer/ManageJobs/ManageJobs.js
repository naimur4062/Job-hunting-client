import React, { useEffect } from 'react';
import { useState } from 'react';
import { Button, Spinner } from 'react-bootstrap';
import { useHistory } from 'react-router';
// import './ViewJobs.css';
import AOS from "aos";
import "aos/dist/aos.css";

const ManageJobs = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data.reverse()))
    }, [jobs]);

    let history = useHistory();

    const showApplicants = (id) => {
        history.push(`/applicant/${id}`);
    };
    return (
        <div style={{ minHeight: '80vh' }} className="container-fluid" >
            {
                jobs.length ? <>
                    <h1 data-aos="fade-down" style={{ color: '#ccd6f6' }} className="text-center">Manage All Jobs</h1>
                    <div className="d-flex justify-content-center p-4 pr-5">
                        <div data-aos="zoom-in" className="container job shadow mb-3 bg-body p-4" style={{ borderRadius: '8px' }}>
                            <div className="row pt-3 ps-3 d-flex justify-content-between job-heading">
                                <p className="col-md-3">Title</p>
                                <p className="col-md-3">Post Date</p>
                                <p className="col-md-3">Edit Job</p>
                                <p className="col-md-3">Delete Job</p>
                            </div>
                            <div className="row pt-3 ps-3 d-flex justify-content-between">
                                <div className="col-md-3 mt-3 title">
                                    {
                                        jobs.map(job => <p>{job.title}</p>)
                                    }
                                </div>
                                <div className="col-md-3 mt-3 type">
                                    {
                                        jobs.map(job => <p>{new Date(job.date).toLocaleString().split(',')[0]}</p>)
                                    }
                                </div>
                                <div className="col-md-3 mt-3 city">
                                    {
                                        jobs.map(job => <Button onClick={() => showApplicants(job._id)} className="mb-1">Edit</Button>)
                                    }
                                </div>
                                <div className="col-md-3 mt-3 applicants">
                                    {
                                        jobs.map(job => <Button onClick={() => showApplicants(job._id)} className="mb-1">Delete</Button>)
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

export default ManageJobs;