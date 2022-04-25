import React from 'react';
import { Container } from 'react-bootstrap';
import { } from 'react-router-dom';
import banner from '../images/banner.jpg'
import './Banner.css'

const Banner = () => {
    return (
        <Container className="banner">
            <div className="row ">
                <div className="col-lg-6 first-part">
                    <h2>Welcome to my Portfolio.</h2>
                    <h2>Hey , I am </h2>
                    <h2> <span className="text-info">BIPRO BARAI</span> </h2>
                    <h4>I am a junior React Developer.</h4>
                    <p>My acquired experience is web development . The web development learnning journey is completed with HTML 5,CSS3, React Bootstrap , Material UI , Javascript , ES6,DOM, React , Express JS (basic), Node JS, Mongodb(basic).

                    </p>
                    <h4>You may visit my page with my project😊. </h4>

                    <button style={{ backgroundColor: '#707a84' }} className="rounded"> <a style={{ textDecoration: 'none', color: 'white' }} href="https://www.linkedin.com/in/bipro-barai-419381179/" target="_blank" rel="noreferrer">Hire me</a></button>

                    <button style={{ backgroundColor: '#707a84' }} className="rounded  m-3"> <a style={{ textDecoration: 'none', color: 'white' }} href="https://docs.google.com/document/d/1c1g1jAS3mZz8rRUuQwzwk8dpdqOc1CmBOqfWkXqS5Yg/view" target="_blank" rel="noreferrer">Resume</a></button>

                </div>
                <div className="col-lg-6 second-part">
                    <img className="img img-fluid" src={banner} alt="" />
                </div>
            </div>
        </Container>
    );
};

export default Banner;