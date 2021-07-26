import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import './CreateUpdateJob.css';
import AOS from "aos";
import "aos/dist/aos.css";

const CreateUpdateJob = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const { id } = useParams();
    const pathname = window.location.pathname;
    const [loading, setLoading] = useState([]);

    // job create & update code
    const onSubmit = data => {
        const jobData = {
            title: data.title,
            type: data.type,
            city: data.city,
            openings: data.openings,
            skills: data.skills,
            ctc: data.ctc,
            description: data.description,
            date: new Date()
        };
        if (pathname === '/createJob') {
            const url = `https://gentle-harbor-69584.herokuapp.com/addJob`;
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(jobData)
            })
                .then(res => {
                    if (res) {
                        alert('job saved successfully to database');
                        history.push('/jobs')
                    }
                })
        } else {
            fetch(`https://gentle-harbor-69584.herokuapp.com/updateJob/${id}`, {
                method: 'PATCH',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ updateJob: jobData })
            })
            alert('job updated successfully to database');
            history.push('/jobs')
        }
    };

    // job update value
    useEffect(() => {
        if (pathname !== '/createJob') {
            fetch(`https://gentle-harbor-69584.herokuapp.com/job/${id}`)
                .then(res => res.json())
                .then(data => {
                    setLoading(data);
                    document.getElementById('title').value = data[0].title;
                    document.getElementById('type').value = data[0].type;
                    document.getElementById('city').value = data[0].city;
                    document.getElementById('openings').value = data[0].openings;
                    document.getElementById('skills').value = data[0].skills;
                    document.getElementById('ctc').value = data[0].ctc;
                    document.getElementById('description').value = data[0].description;
                })
        }
    }, [])
    return (
        <div style={{ minHeight: '80vh' }} className="mt-2 addJob">
            {
                pathname === '/createJob' | loading.length ?
                    <>
                        <h1 data-aos="fade-down" className="text-center">{pathname === '/createJob' ? <span>Post</span> : <span>Update</span>} Job</h1>
                        <div data-aos="zoom-in" className="admin-form">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="admin container shadow p-3 mb-3 mt-5">
                                    <div className="col-md-8 form-group mx-auto">
                                        <label htmlFor="form-label">Job Title</label> <br />
                                        <input id="title" name="title" defaultValue="" placeholder="Enter Job Title" type="form-control" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label">Job Type</label><br />
                                        <input id="type" name="type" defaultValue="" placeholder="Enter Job Type" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label">City</label> <br />
                                        <input id="city" name="city" defaultValue="" placeholder="Enter City Name" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label"> Number of Openings
                                        </label> <br />
                                        <input id="openings" name="openings" defaultValue="" placeholder="Add Openings number" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label">Skills Required</label> <br />
                                        <input id="skills" name="skills" defaultValue="" placeholder="Add skills" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label">CTC</label> <br />
                                        <input id="ctc" name="ctc" defaultValue="" placeholder="Add CTC" required ref={register} className="form-control" />
                                    </div>
                                    <div className="col-md-8 pt-2 form-group mx-auto">
                                        <label htmlFor="form-label">Description</label> <br />
                                        <textarea id="description" className="form-control" name="description" defaultValue="" placeholder="Job Description" required ref={register} cols="30" rows="5" required></textarea>
                                    </div>
                                    <div className="save-button col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                                        <input type="submit" className="btn btn-info" value="SAVE" required />
                                    </div>
                                </div>
                            </form>
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

export default CreateUpdateJob;