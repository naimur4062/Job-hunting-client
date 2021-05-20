import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router';
import './PostJobs.css';
import AOS from "aos";
import "aos/dist/aos.css";

const PostJobs = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const { register, handleSubmit } = useForm();
    let history = useHistory();

    const onSubmit = data => {
        const jobData = {
            title: data.title,
            type: data.type,
            city: data.city,
            openings: data.openings,
            skills: data.skills,
            ctc: data.ctc,
            description: data.description
        };
        const url = `http://localhost:5000/addJob`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(jobData)
        })
            .then(res => {
                if(res){
                    alert('job saved successfully to database');
                    history.push('/viewJobs')
                }
            })
    }
    return (
        <div className="mt-2 addJob">
            <h1 data-aos="fade-down" className="text-center">Post Jobs</h1>
            <div data-aos="zoom-in" className="admin-form mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="admin container shadow p-3 mb-3 mt-5 bg-body">
                        <div className="col-md-8 form-group mx-auto">
                            <label htmlFor="form-label">Job Title</label> <br />
                            <input name="title" defaultValue="" placeholder="Enter Job Title" type="form-control" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Job Type</label><br />
                            <input name="type" defaultValue="" placeholder="Enter Job Type" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">City</label> <br />
                            <input name="city" defaultValue="" placeholder="Enter City Name" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label"> Number of Openings
                                </label> <br />
                            <input name="openings" defaultValue="" placeholder="Add Openings number" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Skills Required</label> <br />
                            <input name="skills" defaultValue="" placeholder="Add skills" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">CTC</label> <br />
                            <input name="ctc" defaultValue="" placeholder="Add CTC" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Description</label> <br />
                            <textarea className="form-control" name="description" defaultValue="" placeholder="Job Description" required ref={register} cols="30" rows="5" required></textarea>
                        </div>
                        <div className="save-button col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                            <input type="submit" className="btn btn-info" value="SAVE" required />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default PostJobs;