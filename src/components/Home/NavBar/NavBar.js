import React, { useContext, useEffect, useState } from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import './NavBar.css';
import Logo from '../../../images/logo.png';
import { UserContext } from '../../../App';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [isAdmin, setIsAdmin] = useState(false);
    console.log('isAdmin', isAdmin)

    useEffect(() => {
        fetch('https://gentle-harbor-69584.herokuapp.com/isAdmin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({ email: signedInUser.email })
        })
            .then(res => res.json())
            .then(data => setIsAdmin(data))
    }, [signedInUser])
    return (
        <div>
            <Navbar sticky="top" expand="lg" collapseOnSelect className="d-flex justify-content-between">
                <Container>
                    <Navbar.Brand>
                        <div className="d-flex mt-5">
                            <div className="mr-2">
                                <img style={{ width: '80px' }} src={Logo} alt="" />
                            </div>
                            <div className="nav-header">
                                <h3 style={{ letterSpacing: '5px', color: '#ff4880' }}>JOB EXPRESS</h3>
                                <h3 style={{ color: '#ccd6f6' }}>Find Your Jobs</h3>
                            </div>
                        </div>
                    </Navbar.Brand>
                    <Navbar.Toggle id="toggle" />
                    <Navbar.Collapse className="text-center">
                        <Nav className="ms-auto">
                            <Link to="/home">
                                <span className="navLink">HOME</span>
                            </Link>
                            {isAdmin === true && <NavDropdown title="ADMIN" id="basic-nav-dropdown">
                                <div className="dropMenu">
                                    <NavDropdown.Item>
                                        <Link to="/createJob"><span className="nav">Post Job</span></Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/viewJobs"><span className="nav">View Jobs</span></Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/manageJobs"><span className="nav">Manage Jobs</span></Link>
                                    </NavDropdown.Item>
                                    <NavDropdown.Item>
                                        <Link to="/makeAdmin"><span className="nav">Make Admin</span></Link>
                                    </NavDropdown.Item>
                                </div>
                            </NavDropdown>}
                            {!signedInUser.displayName ? <Nav.Link href="/login" className="nav">
                                <Button id="login-btn">LOGIN</Button>
                            </Nav.Link>
                                :
                                <div className="user-name">
                                    <h5><span className="navLink">{signedInUser.displayName}</span></h5>
                                </div>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default NavBar;