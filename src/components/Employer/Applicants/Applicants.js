import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ApplicantsDetail from '../ApplicantsDetail/ApplicantsDetail';

const Applicants = () => {
    const [applicants, setApplicants] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/applicant/${id}?id=` + id) 
            .then(res => res.json())
            .then(data => {
               setApplicants(data);
            })
    }, [id]);
    return (
        <div>
            <ApplicantsDetail applicants={applicants}/>
        </div>
    );
};

export default Applicants;