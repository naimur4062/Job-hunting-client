import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router';
import { useForm } from "react-hook-form";


const Apply = () => {
    const { register, handleSubmit } = useForm();
    const [apply, setApply] = useState([]);
    // const [signedInUser, setSignedInUser] = useContext(UserContext);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/job/${id}`)
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
            job: apply,
            resume: data.resume
        };
        const url = `http://localhost:5000/addApplicant`;
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(applicantData)
        })
            .then(res => {
                if(res){
                    alert('Your application has been completed.');
                }
            })
    }
    return (
        <div>
            <div className="container applied">
                <div className="admin-form mt-3">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="admin container shadow p-3 mb-3 mt-5 bg-body">
                            <h3 className="text-center">{apply.title}</h3>
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
                                <input name="resume" type="file" required ref={register} className="form-control" />
                            </div>
                            <div className="save-button col-md-8 pt-2 form-group mx-auto text-center sendMessage">
                                <input type="submit" className="btn btn-info" value="APPLY" required />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Apply;