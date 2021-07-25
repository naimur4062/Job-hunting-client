import React, { useEffect } from 'react';
import { useForm } from "react-hook-form";
import { useHistory, useParams } from 'react-router';
import './PostEditJob.css';
import AOS from "aos";
import "aos/dist/aos.css";

const PostEditJob = () => {
    useEffect(() => {
        AOS.init({ duration: 1500 });
    }, []);

    const { register, handleSubmit } = useForm();
    let history = useHistory();
    const { id } = useParams();
    const pathname = window.location.pathname;

    // job post & edit code
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
        if (pathname === '/postJob') {
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
                        history.push('/viewJobs')
                    }
                })
        } else {
            console.log('edit job')
        }
    };

    // job edit value
    useEffect(() => {
        fetch(`https://gentle-harbor-69584.herokuapp.com/job/${id}`)
            .then(res => res.json())
            .then(data => {
                document.getElementById('title').value = data[0].title;
                document.getElementById('type').value = data[0].type;
                document.getElementById('city').value = data[0].city;
                document.getElementById('openings').value = data[0].openings;
                document.getElementById('skills').value = data[0].skills;
                document.getElementById('ctc').value = data[0].ctc;
                document.getElementById('description').value = data[0].description;
            })
    })
    return (
        <div className="mt-2 addJob">
            <h1 data-aos="fade-down" className="text-center">{pathname === '/postJob' ? <span>Post</span> : <span>Edit</span>} Job</h1>
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
        </div>
    );
};

export default PostEditJob;