import React, { useEffect } from 'react';
import './YourJobsDetail.css';
import AOS from "aos";
import "aos/dist/aos.css";

const YourJobsDetail = ({job}) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const { title, type, city, openings, skills, ctc, description } = job.job;

    return (
        <div style={{padding: '0 5px'}} className="col-md-4">
        <div data-aos="flip-left" className="cardDiv shadow p-3 mb-5">
            <div className="card-title">
                <h2>{title}</h2>
                <h4>Type: {type}</h4>
                <h4>CTC: $ {ctc}</h4>
            </div>
            <div className="card-details">
                <h5>Skills: {skills}</h5>
                <p>
                    <small>{description}</small>
                </p>
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