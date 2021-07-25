import React, { useEffect } from 'react';
import { useState } from 'react';
import { Spinner } from 'react-bootstrap';
import deleteImg from '../../../images/delete.png';
import editImg from '../../../images/edit.png';
import { useHistory } from 'react-router';
import AOS from "aos";
import "aos/dist/aos.css";
import './ManageJobs.css'

const ManageJobs = () => {
    const [dependency, setDependency] = useState(false);
    let history = useHistory();
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);
    const [jobs, setJobs] = useState([]);
    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setJobs(data.reverse()))
    }, [dependency]);

    const deleteJob = (id) => {
        fetch(`http://localhost:5000/deleteJob/${id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res) {
                    setDependency(!dependency)
                    alert('Delete is Success')
                };
            });
    };

    const editJob = (id) => {
        history.push(`/edit/${id}`)
    }

    return (
        <div style={{ minHeight: '80vh' }} className="container-fluid" >
            {
                jobs.length ? <>
                    <h1 data-aos="fade-down" style={{ color: '#ccd6f6' }} className="text-center">Manage All Jobs</h1>
                    <div className="d-flex justify-content-center p-4 pr-5">
                        <div data-aos="zoom-in" className="container job shadow mb-3 bg-body p-4" style={{ borderRadius: '8px' }}>
                            <div className="row pt-3 text-center d-flex justify-content-between job-heading">
                                <p className="col-md-3">Title</p>
                                <p className="col-md-3">Post Date</p>
                                <p className="col-md-3">Edit Job</p>
                                <p className="col-md-3">Delete Job</p>
                            </div>
                            <div className="row pt-3 text-center d-flex justify-content-between">
                                <div className="col-md-3 mt-3 title">
                                    {
                                        jobs.map(job => <p key={job._id}>{job.title}</p>)
                                    }
                                </div>
                                <div className="col-md-3 mt-3 date">
                                    {
                                        jobs.map(job => <p key={job._id}>{new Date(job.date).toLocaleString().split(',')[0]}</p>)
                                    }
                                </div>
                                <div style={{ flexDirection: 'column' }} className="col-md-3 mt-3 edit d-flex">
                                    {
                                        jobs.map(job => <img key={job._id} src={editImg} alt="..." onClick={() => editJob(job._id)} />)
                                    }
                                </div>
                                <div style={{ flexDirection: 'column' }} className="col-md-3 mt-3 d-flex delete">
                                    {
                                        jobs.map(job => <img key={job._id} src={deleteImg} alt="..." onClick={() => deleteJob(job._id)} />)
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