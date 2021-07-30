import React, { useEffect, useState } from 'react';
import { Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import ApplicantsDetail from '../ApplicantsDetail/ApplicantsDetail';

const Applicants = () => {
    const [applicants, setApplicants] = useState([]);
    const [dependency, setDependency] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`https://gentle-harbor-69584.herokuapp.com/applicant/${id}?id=` + id)
            .then(res => res.json())
            .then(data => {
                setApplicants(data);
            })
    }, [id]);

    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/jobs')
            .then(res => res.json())
            .then(data => setDependency(data))
    }, []);

    return (
        <>
            {
                dependency.length ?
                    <>
                        {applicants.length ?
                            <ApplicantsDetail applicants={applicants} />
                            :
                            <h1 style={{ color: 'red' }} className="text-center mt-5">No applicants yet</h1>}
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
        </>
    );
};

export default Applicants;