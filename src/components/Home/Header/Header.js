import React, { useEffect } from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import { Link } from 'react-router-dom';
import AOS from "aos";
import "aos/dist/aos.css";

const Header = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center available-jobs">
                <Link to="/jobs">
                    <Button data-aos="zoom-in" variant="contained" color="primary">
                        Available Jobs
                    </Button>
                </Link>
                <Link to="/yourJobs">
                    <Button data-aos="zoom-in" variant="contained" color="primary">
                        Your Applied Jobs
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;