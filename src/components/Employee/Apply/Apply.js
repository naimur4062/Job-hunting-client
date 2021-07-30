import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { useForm } from "react-hook-form";
import axios from 'axios';


const Apply = () => {
    const { register, handleSubmit } = useForm();
    const [apply, setApply] = useState([]);
    const [resumeURL, setResumeURL] = useState(null);
    const { id } = useParams();
    let history = useHistory();

    useEffect(() => {
        fetch(`https://gentle-harbor-69584.herokuapp.com/job/${id}`)
            .then(res => res.json())
            .then(data => {
                setApply(data[0])
            })
    }, [id]);

    const onSubmit = data => {
        const applicantData = {
            name: data.name,
            email: data.email,
            phone: data.phone,
            jobId: apply._id,
            job: apply,
            resume: resumeURL,
            date: new Date()
        };
        const url = `https://gentle-harbor-69584.herokuapp.com/addApplicant`;
        fetch(url, {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify(applicantData)
        })
            .then(res => {
                if (res) {
                    alert('Your application has been completed.');
                    history.push('/yourJobs')
                }
            })
    }

    const handleResumeUpload = (event) => {
        const resumeData = new FormData();
        resumeData.set('key', '3fbd18749a02465de2e5cad61c40c47a');
        resumeData.append('image', event.target.files[0]);

        axios.post('https://api.imgbb.com/1/upload',
            resumeData)
            .then(function (response) {
                setResumeURL(response.data.data.display_url);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="container applied mb-5">
            <div data-aos="zoom-in" className="admin-form mt-3">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="admin container shadow rounded p-3 mb-3 mt-5 bg-body">
                        <h3 className="text-center text-secondary">{apply.title}</h3>
                        <div className="col-md-8 form-group mx-auto">
                            <label htmlFor="form-label">Name</label> <br />
                            <input name="name" placeholder="Enter Your Name" type="form-control" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Email</label><br />
                            <input name="email" placeholder="Enter Your Email" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Phone</label> <br />
                            <input name="phone" placeholder="Enter Your Phone Number" required ref={register} className="form-control" />
                        </div>
                        <div className="col-md-8 pt-2 form-group mx-auto">
                            <label htmlFor="form-label">Upload Your Resume</label> <br />
                            <input onChange={handleResumeUpload} name="exampleRequired" type="file" required className="form-control" />
                        </div>
                        <div className="save-button col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                            {
                                resumeURL ? <input type="submit" className="btn btn-danger" value="APPLY" required /> : <input type="submit" className="btn btn-primary" value="APPLY" disabled />
                            }
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Apply;