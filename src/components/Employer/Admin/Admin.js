import React from 'react';
import Sidebar from '../../Shared/Sidebar/Sidebar';
import PostJobs from '../PostJobs/PostJobs';

const Admin = () => {
    return (
        <div className="container-fluid row" >
            <div className="col-md-3 d-flex justify-content-center">
                <Sidebar />
            </div>
            <div className="col-md-9 d-flex justify-content-center p-4 pr-5">
                <PostJobs />
            </div>
        </div>
    );
};

export default Admin;