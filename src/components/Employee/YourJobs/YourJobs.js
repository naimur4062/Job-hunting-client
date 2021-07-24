import React, { useContext, useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { UserContext } from '../../../App';
import YourJobsDetail from '../YouJobsDetail/YourJobsDetail';

const YourJobs = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [yourJobs, setYourJobs] = useState([]);
    console.log('yourJobs', yourJobs)

    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/yourJobs?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => setYourJobs(data.reverse()))
    }, [])
    return (
        <div style={{ minHeight: '80vh' }} className="container">
            {yourJobs.length ? <>
                <div className="mb-5 text-center">
                    <h1 style={{ color: '#ccd6f6' }}>Dear, {signedInUser.displayName}</h1>
                    <h3 style={{ color: '#ccd6f6' }}>This is your applied job list</h3>
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