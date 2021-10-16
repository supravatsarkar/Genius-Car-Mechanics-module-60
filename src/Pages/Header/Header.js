import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
    return (
        <div >
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand className="text-primary fw-bold" href="#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link className="text-primary" href="#home">Home</Nav.Link>
                            <Nav.Link className="text-primary" href="#services-sec">Services</Nav.Link>
                            <Nav.Link className="text-primary" href="#exparts-sec">Exparts</Nav.Link>
                            <Nav.Link className="text-primary" href="#link">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;