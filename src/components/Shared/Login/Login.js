import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
import loadingImg from '../../../images/loading.png';
import { UserContext } from '../../../App';
import { Button } from '@material-ui/core';
import { Card, Form } from 'react-bootstrap';
import firebaseConfig from './firebase.config';
import firebase from "firebase/app";
import "firebase/auth";
import AOS from "aos";
import "aos/dist/aos.css";
import './Login.scss';

const Login = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    const [newUser, setNewUser] = useState(false);
    const [signedInUser, setSignedInUser] = useContext(UserContext);
    const [loading, setLoading] = useState(false);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        photo: '',
        error: '',
    });

    console.log('user', user.error)

    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }

    const handleBlur = (e) => {
        let isFormValid = true;
        if (e.target.name === 'email') {
            isFormValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if (e.target.name === 'password') {
            const isPasswordValid = e.target.value.length > 6;
            const passwordHasNumber = /\d{1}/.test(e.target.value);
            isFormValid = isPasswordValid && passwordHasNumber;
        }
        if (isFormValid) {
            const newUserInfo = { ...user };
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }

    const handleSubmit = (e) => {
        loginLoading();
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    updateUserName(user.name);
                    const { displayName, email } = userCredential.user;
                    const signedInUser = { displayName: user.name, email };
                    const newUserInfo = { ...user };
                    setUser(newUserInfo);
                    setSignedInUser(signedInUser);
                    history.replace(from);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    setLoading(false);
                });
        }

        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then((userCredential) => {
                    const { displayName, email } = userCredential.user;
                    const signedInUser = { displayName, email };
                    setSignedInUser(signedInUser);
                    history.replace(from);
                    const newUserInfo = { ...user };
                    setUser(newUserInfo);
                })
                .catch((error) => {
                    const newUserInfo = { ...user };
                    newUserInfo.error = error.message;
                    setUser(newUserInfo);
                    setLoading(false)
                });
        }
        e.preventDefault();
    }

    const updateUserName = name => {
        const user = firebase.auth().currentUser;
        user.updateProfile({
            displayName: name,
        }).then(function () {
            console.log('name updated success')
        }).catch(function (error) {
            console.log(error)
        });
    };

    const loginLoading = () => {
        setLoading(true);
    };

    return (
        <div data-aos="zoom-in" className="col-md-4 m-auto login">
            <Card className="card">
                <Card.Body>
                    {newUser && <Card.Title>Create An Account</Card.Title>}
                    {!newUser && <Card.Title>Login</Card.Title>}
                    <Form onSubmit={handleSubmit} className="mt-5">
                        {newUser && <Form.Group controlId="formBasicName">
                            <Form.Control type="name" onBlur={handleBlur} name="name" className="formControl" placeholder="Your Name" required />
                        </Form.Group>}
                        <Form.Group controlId="formBasicEmail">
                            <Form.Control type="email" onBlur={handleBlur} name="email" className="formControl" placeholder="username or email" required />
                        </Form.Group>
                        <Form.Group className="mt-2" controlId="formBasicPassword">
                            <Form.Control type="password" onBlur={handleBlur} name="password" className="formControl" placeholder="password" required />
                        </Form.Group>
                        {newUser && <Form.Group className="mt-2" controlId="formBasicPassword">
                            <Form.Control type="password" onBlur={handleBlur} name="password" className="formControl" placeholder="Conform Password" required />
                        </Form.Group>}
                        <>
                            {newUser ? <Button className="mt-5 rounded-0" type="submit">
                                {loading === true ? <img src={loadingImg} alt="" /> : <p>Create an Account</p>}
                            </Button>
                                :
                                <Button className="mt-5 rounded-0" type="submit">
                                    {loading === true ? <img src={loadingImg} alt="" /> : <p>Login</p>}
                                </Button>
                            }
                        </>
                        <Form.Text className="text-center mt-3" style={{ fontSize: '17px' }}>
                            <Form.Group>
                                <Form.Check
                                    onChange={() => setNewUser(!newUser)}
                                    label="New User Sign Up"
                                    feedback="You must agree before submitting."
                                />
                            </Form.Group>
                        </Form.Text>
                    </Form>
                </Card.Body>
            </Card>
            <div className="mt-3">
                <p style={{ color: 'red' }}>{user.error}</p>
            </div>
        </div>
    );
};

export default Login;