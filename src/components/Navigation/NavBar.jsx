import React from 'react'
import "./navbar.css"
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export default function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container className='navBar'>
        <img className='logo' src="/images/logo.png" alt="" />
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          
          <Nav className="me-auto">
            <Nav.Link navBarText href="#features">Home</Nav.Link>
            <Nav.Link navBarText href="#pricing">Exam Calender</Nav.Link>
            <Nav.Link navBarText href="#pricing">About Us</Nav.Link>
          </Nav>
          
          <Nav>
            <Button variant="secondary">Secondary</Button>{' '}
            <Button variant="secondary">Secondary</Button>{' '}
          </Nav>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
