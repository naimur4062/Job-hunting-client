import React, { useEffect } from 'react';
import './YourJobsDetail.css';
import AOS from "aos";
import "aos/dist/aos.css";

const YourJobsDetail = ({ job }) => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const { title, type, city, openings, skills, ctc, description, date } = job.job;

    return (
        <div style={{ padding: '0 5px' }} className="col-md-4">
            <div data-aos="flip-left" className="cardDiv shadow p-3 mb-5">
                <div className="card-title">
                    <h4 className="text-secondary text-center">Applied Date: {new Date(date).toLocaleString().split(',')[0]}</h4>
                    <h2 className="text-secondary text-center">{title}</h2>
                    <h4 className="text-secondary text-center">Type: {type}</h4>
                    <h4 className="text-secondary text-center">CTC: $ {ctc}</h4>
                </div>
                <div className="card-details">
                    <h5 className="text-secondary text-center">Skills: {skills}</h5>
                    <p className="text-secondary text-center">
                        <small>{description}</small>
                    </p>
                </div>
                <div className="d-flex justify-content-between">
                    <h4 className="text-secondary text-center">City: {city}</h4>
                    <h4 className="text-secondary text-center">Openings: {openings}</h4>
                </div>
            </div>
        </div>
    );
};

export default YourJobsDetail;