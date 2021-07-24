import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Admin = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div style={{ height: '70vh' }}>
            <div className="container d-flex justify-content-center align-items-center available-jobs">
                {/* <Link to="/postJobs">
                    <Button data-aos="fade-down" variant="contained" color="primary">
                        Post Job
                    </Button>
                </Link>
                <Link to="/viewJobs">
                    <Button data-aos="zoom-in" variant="contained" color="primary">
                        View Job List
                    </Button>
                </Link>
                <Link to="/makeAdmin">
                    <Button data-aos="fade-up" variant="contained" color="primary">
                        Make Admin
                    </Button>
                </Link> */}
            </div>
        </div>
    );
};

export default Admin;