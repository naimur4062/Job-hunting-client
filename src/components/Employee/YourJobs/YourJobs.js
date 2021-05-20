import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../../App';
import YourJobsDetail from '../YouJobsDetail/YourJobsDetail';

const YourJobs = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [yourJobs, setYourJobs] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/yourJobs?email=' + signedInUser.email)
            .then(res => res.json())
            .then(data => setYourJobs(data))
    }, [])
    return (
        <div className="container">
            <div className="mb-5 text-center">
                <h1 style={{ color: '#ccd6f6' }}>Dear, {signedInUser.displayName}</h1>
                <h3 style={{ color: '#ccd6f6' }}>This is your applied job list</h3>
            </div>
            <div className="row container">
                {
                    yourJobs.map(job => <YourJobsDetail key={job._id} job={job}/>)
                }
            </div>
        </div>
    );
};

export default YourJobs;