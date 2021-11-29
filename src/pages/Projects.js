import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Project from './Project';

const Projects = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/project.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div>
            <div className="mx-auto my-5" style={{ color: 'white', fontSize: '30px' }}>My Projects</div>
            <Container>
                <Row xs={1} lg={2} className="g-4">

                    {
                        projects.map(project => <Project key={project.id} project={project}>

                        </Project>)
                    }
                </Row>
            </Container>
        </div>
    );
};

export default Projects;