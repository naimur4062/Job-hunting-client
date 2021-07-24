import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Job.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Job = ({ job }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const { title, type, city, openings, skills, ctc, description, date } = job;
    return (
        <div className="col-md-4 text-center d-flex justify-content-center align-items-center mb-5 card-area">
            <div data-aos="flip-left" className="card" style={{ width: '25rem' }}>
                <div className="card-body">
                    <h5 className="card-title text-color">Post Date: {new Date(date).toLocaleString().split(',')[0]}</h5>
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
                        <Link to={`/job/${job._id}`}>
                            Apply Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Job;