import React, { useEffect } from 'react';
import Header from '../Header/Header';
import './Home.css';
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
    }, []);
    return (
        <div data-aos="fade-up" style={{ height: '75vh' }} className="container">
            <Header />
            <footer className="footer text-center">
                <p>Copyright &copy; <em id="date"></em> {new Date().getUTCFullYear()} By JOB EXPRESS <br /> Developed By <a href="https://www.facebook.com/naimurrahman.abeer" target="_blank">Naimur Rahman</a></p>
            </footer>
        </div>
    );
};

export default Home;