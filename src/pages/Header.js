import React from 'react';
import { Nav, Navbar, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css'
const Header = () => {
    const activeStyle = {
        fontWeight: "bold",
        color: "blue"
    }
    return (
        <div className="header">
            <Navbar bg="dark" variant={"dark"} expand="lg">
                <Container>
                    <Navbar.Brand href="home">BIPRO</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className=" mx-auto  my-lg-0"
                            style={{ maxHeight: '375px' }}
                            navbarScroll
                        >

                            <NavLink to="/home" activeStyle={activeStyle}>Home</NavLink>
                            <NavLink to="/about" activeStyle={activeStyle}>About</NavLink>
                            <NavLink to="/blog" activeStyle={activeStyle}>Blogs</NavLink>
                            <NavLink to="/contact" activeStyle={activeStyle}>Contact</NavLink>



                        </Nav>


                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Header;