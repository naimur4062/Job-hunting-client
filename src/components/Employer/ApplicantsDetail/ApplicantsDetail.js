import React from 'react';
import './ApplicantsDetail.css';

const ApplicantsDetail = ({ applicants }) => {
    return (
        <div className="container-fluid" >
            <h1 style={{color: '#ccd6f6'}} className="text-center">Total Applicants: {applicants.length}</h1>
            <div className="d-flex justify-content-center p-4 pr-5">
                <div className="container job shadow mb-3 bg-body p-4" style={{ borderRadius: '8px' }}>
                    <div className="row pt-3 ps-3 d-flex justify-content-between job-heading">
                        <p className="col-md-2">Candidate Name</p>
                        <p className="col-md-2">Phone</p>
                        <p className="col-md-2">Email</p>
                        <p className="col-md-2">Resume</p>
                    </div>
                    <div className="row">
                        <div className="col-md-2 mt-3 name">
                            {
                                applicants.map(applicant => <p>{applicant.name}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 phone">
                            {
                                applicants.map(applicant => <p>{applicant.phone}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 email">
                            {
                                applicants.map(applicant => <p>{applicant.email}</p>)
                            }
                        </div>
                        <div className="col-md-2 mt-3 resume">
                            {
                                applicants.map(applicant => <a href={applicant.resume} target="_blank">
                                    <p>See Resume</p>
                                </a> )
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ApplicantsDetail;