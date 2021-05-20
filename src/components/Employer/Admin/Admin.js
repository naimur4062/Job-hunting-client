import React from 'react';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const Admin = () => {
    return (
        <div>
            <div className="container d-flex justify-content-center align-items-center available-jobs">
                <Link to="/postJobs">
                    <Button variant="contained" color="primary">
                        Post Job
                    </Button>
                </Link>
                <Link to="/viewJobs">
                    <Button variant="contained" color="primary">
                        View Job List
                    </Button>
                </Link>
            </div>
        </div>
    );
};

export default Admin;