import React, { useContext } from 'react';
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Logo from '../../../images/logo.png';
import { UserContext } from '../../../App';

const NavBar = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    console.log(signedInUser)

    return (
        <div>
            <Navbar sticky="top" expand="lg" collapseOnSelect className="d-flex justify-content-between">
                <Navbar.Brand>
                    <div className="d-flex mt-5">
                        <div className="mt-2 mr-2">
                            <img style={{ width: '80px' }} src={Logo} alt="" />
                        </div>
                        <div className="nav-header">
                            <h3 style={{ letterSpacing: '5px', color: '#ff4880' }}>JOB EXPRESS</h3>
                            <h3 style={{ color: '#3a4256' }}>Find Your Jobs</h3>
                        </div>
                    </div>
                </Navbar.Brand>
                <Navbar.Toggle id="toggle" />
                <Navbar.Collapse className="text-center">
                    <Nav className="ms-auto">
                        <Nav.Link className="nav">
                            <Link to="/"><span className="navLink">HOME</span></Link>
                        </Nav.Link>
                        <Nav.Link className="nav">
                            <Link to="/admin"><span className="navLink">EMPLOYER</span></Link>
                        </Nav.Link>
                        <Nav.Link className="nav">
                            <Link to="/jobs"><span className="navLink">EMPLOYEE</span></Link>
                        </Nav.Link>
                        <Nav.Link className="nav">
                            <h5><span className="navLink">{signedInUser.displayName}</span></h5>
                            {!signedInUser.displayName && <Link to="/login"><Button id="login-btn">LOGIN</Button></Link>}
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default NavBar;