import React from 'react';
// import { Divider } from 'rsuite';
import Footer from './Footer';
import Header from './Header';
import profile from '../images/profile.jpg'
import { Col, Container, Row } from 'react-bootstrap';
import './About.css'
const About = () => {
    return (
        <div>
            <Header />
            <div>
                <img className="img-fluid mb-3" src={profile} alt=" " />
            </div>
            <div className="w-75 mx-auto">
                <p style={{ textAlign: 'left', color: 'black', fontSize: '25px', padding: '10px', backgroundColor: 'cyan', borderRadius: '10px' }}>I am expert on JavaScript developing with knowing few frameworks frontend and backend.
                    I know ReactJs, ReactNative , NodeJs,Express. As UI frameworks I know React bootstrap ,
                    Material UI.I am studying now at Chittagong university of Engineering and Technology ,department of Computer Science and Engineering.
                </p>
            </div>
            <Container>
                <div className="row my-5">
                    <div className="col-lg-6 col-sm-12 first-part" >

                        <h3 style={{ textAlign: 'center' }}><span style={{ backgroundColor: 'green', padding: '3px', borderRadius: '5px' }} >My skills</span></h3><hr />
                        <div>
                            <h3>Expertise</h3> <hr />
                            <Container className="skill " >
                                <Row>
                                    <Col><h3 >ReactJs</h3></Col>
                                    <Col><h3 >JavaScript</h3></Col>
                                    <Col><h3 >NodeJs</h3></Col>
                                </Row>
                                <Row>
                                    <Col><h3 >Express</h3></Col>
                                    <Col><h3 >ReactNative</h3></Col>
                                    <Col><h3 >MongoDB</h3></Col>
                                </Row>
                            </Container>
                            <hr /><h3>Basic and Intermediate</h3> <hr />
                            <Container className="skill">
                                <Row>
                                    <Col><h3>DataStructure</h3></Col>
                                    <Col><h3>Algorithm</h3></Col>
                                    <Col><h3>My SQL</h3></Col>
                                </Row>

                                <Row>
                                    <Col><h3>C++</h3></Col>
                                    <Col><h3>Java</h3></Col>
                                    <Col><h3>Python</h3></Col>
                                </Row>
                            </Container>
                            <hr /><h3>Tools and Software</h3> <hr />
                            <h5> Git, Github, Netlify, Firebase, VisualStudio</h5>

                        </div>
                    </div>

                    <div className="col-lg-6 col-sm-12 first-part">

                        <h3 style={{ textAlign: 'center' }}><span style={{ backgroundColor: 'green', padding: '3px', borderRadius: '5px' }} >My Academic</span></h3> <hr />
                        <div><h2>Under Graduate </h2> <hr />
                            <h4 >CUET ,CSE </h4>
                            <hr /><h3>Recent/Expected passing year</h3><hr />
                            <p> level-2, Term-2 / February in 2024</p>
                        </div>

                    </div>
                </div>
            </Container>

            <Footer />
        </div>
    );
};

export default About;