import React from 'react';
import './YourJobsDetail.css';

const YourJobsDetail = ({job}) => {
    const { title, type, city, openings, skills, ctc, description } = job.job;

    return (
        <div style={{padding: '0 5px'}} className="col-md-4">
        <div className="cardDiv shadow p-3 mb-5 bg-body">
            <div className="card-title">
                <h2>{title}</h2>
                <h4>Type: {type}</h4>
                <h4>CTC: $ {ctc}</h4>
            </div>
            <div className="card-details">
                <h5>Skills: {skills}</h5>
                <h6 style={{ color: 'gray' }}>
                    <small>{description}</small>
                </h6>
            </div>
            <div className="d-flex justify-content-between">
                <h4>City: {city}</h4>
                <h4>Openings: {openings}</h4>
            </div>
        </div>
    </div>
    );
};

export default YourJobsDetail;