import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import YourJobsDetail from '../YouJobsDetail/YourJobsDetail';

const YourJobs = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [yourJobs, setYourJobs] = useState([]);
    const [loading, setLoading] = useState([]);
    console.log('yourJobs', yourJobs)

    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setLoading(data))
    }, [])

    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/yourJobs?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => setYourJobs(data.reverse()))
    }, [])
    return (
        <div className="container">
            {loading.length ? <>
                <div className="mb-5 text-center">
                    <h1 style={{ color: '#ccd6f6' }}>Dear, {signedInUser.displayName}</h1>
                    {
                        yourJobs.length ? <h3 style={{ color: '#ccd6f6' }}>This is your applied job list</h3>
                            : <h3 style={{ color: '#ccd6f6' }}>Still you have not applied in any job</h3>
                    }
                </div>
                <div className="row container">
                    {
                        yourJobs.map(job => <YourJobsDetail key={job._id} job={job} />)
                    }
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

export default YourJobs;