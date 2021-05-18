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
                <Button variant="contained" color="primary">
                    Your Jobs
                </Button>
            </div>
        </div>
    );
};

export default Header;