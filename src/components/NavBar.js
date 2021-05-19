import React from 'react';
import { Navbar, Nav, NavDropdown, Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function NavBar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
  return (
    <Navbar className="navigationBar" collapseOnSelect expand="lg" variant="dark" collapseOnSelect fixed='top' expand='xl' >
      <Navbar.Brand className="Title" href="/home">SECOND CHANCE THROUGH CODE</Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
            <Nav.Link href="/home"><a>HOME</a></Nav.Link>
            <Nav.Link href="/resources">RESOURCES</Nav.Link>
            <Nav.Link href="/stories">STORIES</Nav.Link>
            <Nav.Link href="/media">MEDIA</Nav.Link>
          
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}






