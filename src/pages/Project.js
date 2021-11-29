
import React from 'react';
import { Button, Card, Container } from 'react-bootstrap';

const Project = ({ project }) => {
    const { name, img, feture, live, gitlink, server } = project;

    return (
        <div>
            <Container className="">

                <Card style={{}} h-100>
                    <Card.Img variant="top" className='img-fluid' style={{ height: '400px' }} src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <Card.Text style={{ textAlign: 'left' }}>
                            {feture}

                        </Card.Text>
                        <div className="">
                            <a href={live} target="_blank" rel="noreferrer"><Button className="mx-2" variant="success">Live site</Button></a>
                            <a href={gitlink} target="_blank" rel="noreferrer"><Button className="mx-2" variant="dark">Git link</Button></a>
                            {server &&
                                <a href={server} target="_blank" rel="noreferrer"><Button className="mx-2" variant="dark">Server link</Button></a>
                            }

                        </div>
                    </Card.Body>

                </Card>
            </Container>

        </div >
    );
};

export default Project;