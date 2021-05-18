import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faBorderAll, faPlus } from '@fortawesome/free-solid-svg-icons';
import Logo from '../../../images/logo.png';
import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div>
        <div className="d-flex mt-5">
            <div className="mt-2 mr-2">
                <img style={{ width: '50px' }} src={Logo} alt="" />
            </div>
            <div className="nav-header">
                <h4 style={{ letterSpacing: '2px', color: '#ff4880' }}>JOB EXPRESS</h4>
                <h6 style={{ color: '#3a4256' }}>Find Your Jobs</h6>
            </div>
        </div>
        <div className="sidebar d-flex flex-column justify-content-between py-5 px-4">
            <ul className="list-unstyled">
                <div>
                    <li>
                        <Link to="/course/:id" style={{ color: "gray" }}>
                            <FontAwesomeIcon className="icon" icon={faPlus} /> <span>Add Jobs</span>
                        </Link>
                    </li>
                    <li>
                        <Link to="/userBookingList" style={{ color: "gray" }}>
                            <FontAwesomeIcon className="icon" icon={faBorderAll} /> <span>View Jobs</span>
                        </Link>
                    </li>
                </div>
            </ul>
            <div>
                <ul className="list-unstyled">
                    <li>
                        <Link to="/home" style={{ color: "gray" }}><FontAwesomeIcon className="icon" icon={faSignOutAlt} /> <span>Go to Home</span></Link>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    );
};

export default Sidebar;