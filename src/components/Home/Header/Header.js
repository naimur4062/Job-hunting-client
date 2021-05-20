import React from 'react';
import Button from '@material-ui/core/Button';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center available-jobs">
                <Link to="/jobs">
                    <Button variant="contained" color="primary">
                        Available Jobs
                </Button>
                </Link>
                <Link to="/yourJobs">
                    <Button variant="contained" color="primary">
                        Your Applied Jobs
                </Button>
                </Link>
            </div>
        </div>
    );
};

export default Header;