
import React, { useEffect, useState } from 'react';
import { Card, Container, Button } from 'react-bootstrap';
import { useParams } from 'react-router';
import Footer from './Footer';
import Header from './Header';
import '../App.css'

const ProjectDetails = () => {
    const { projectId } = useParams();
    const [details, setDetails] = useState([]);
    const [projectDetails, setProjectDetails] = useState({});
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setDetails(data));
    }, [])
    useEffect(() => {
        const foundProject = details.find(
            serv => serv.id === projectId
        );
        setProjectDetails(foundProject);
    }, [details, projectId])
    console.log(projectDetails);
    return (
        <div>
            <Header></Header>
            <div className="mx-md-5 mx-lg-5">
                <Container className="mx-auto w-75" >



                    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
                        <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img style={{ height: '400px' }} src={projectDetails?.img} className="d-block w-100 " alt=" " />
                            </div>
                            <div className="carousel-item">
                                <img style={{ height: '400px' }} src={projectDetails?.img1} className="d-block w-100" alt=" " />
                            </div>
                            <div className="carousel-item">
                                <img style={{ height: '400px' }} src={projectDetails?.img2} className="d-block w-100" alt=" " />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                </Container>
                {/*   <div classNameName="swiper">

                                <div classNameName="swiper-wrapper d-flex w-100">

                                    <div classNameName="swiper-slide"><Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img} /> </div>
                                    <div classNameName="swiper-slide"><Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img1} /></div>
                                    <div classNameName="swiper-slide"><Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img2} /></div>

                                </div>

                                <div classNameName="swiper-button-prev"></div>
                                <div classNameName="swiper-button-next"></div>


                                <div className="swiper-scrollbar"></div>
                            </div> */}
                {/*  <Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img} />
                            <Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img} />
                            <Card.Img variant="top" classNameName='img-fluid' style={{ height: '400px' }} src={projectDetails?.img} /> */}
                <Container>
                    <Card style={{}}  >
                        <Card.Body>
                            <Card.Title>{projectDetails?.name}</Card.Title>
                            <Card.Text style={{ textAlign: 'left' }}>
                                {projectDetails?.more} <br />

                            </Card.Text>
                            <div className="my-2">
                                <a href={projectDetails?.live} target="_blank" rel="noreferrer"><Button className="mx-2" variant="success">Live site</Button></a>
                                <a href={projectDetails?.gitlink} target="_blank" rel="noreferrer"><Button className="mx-2" variant="dark">Git link</Button></a>
                                {projectDetails?.server &&
                                    <a href={projectDetails?.server} target="_blank" rel="noreferrer"><Button className="mx-2" variant="dark">Server link</Button></a>
                                }

                            </div>
                        </Card.Body>

                    </Card>
                </Container>

            </div>

            <Footer></Footer>
        </div>
    );
};

export default ProjectDetails;