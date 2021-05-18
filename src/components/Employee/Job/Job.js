import React from 'react';
import { Link } from 'react-router-dom';
import './Job.css';

const Job = ({ job }) => {
    const { title, type, city, openings, skills, ctc, description } = job;
    return (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center mb-5 card-area">
            <div className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h3 className="card-title text-color">{title}</h3>
                    <h5 className="mt-3 text-secondary">Skills: {skills}</h5>
                    <p className="card-text text-secondary">{description}</p>
                    <div className="d-flex justify-content-around text-color">
                        <h5>Type: {type}</h5>
                        <h5>CTC: $ {ctc}</h5>
                    </div>
                    <div className="d-flex justify-content-around text-color">
                        <h5>City: {city}</h5>
                        <h5>Openings: {openings}</h5>
                    </div>
                    <div className="mt-2">
                    <Link to="/jobs">
                            Apply Now
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;