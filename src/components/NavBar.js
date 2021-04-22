import React,{Component} from 'react';
import { Navbar, Nav, Container, NavDropdown,  Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>

        <Navbar collapseOnSelect fixed='top' expand = 'sm' bg='pink' variant = 'purple'>
                {/* <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/'>HOME</Nav.Link>
                        <Nav.Link href='/'>RESOURCES</Nav.Link>
                        <Nav.Link href='/'>STORIES</Nav.Link>
                        <Nav.Link href='/'>MEDIA</Nav.Link>
                    </Nav>
                </Container> */}

                <Nav.Item>
          <Nav.Link eventKey="1" href="#/home">
            NavLink 1 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="2" title="Item">
            NavLink 2 content
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="3" disabled>
            NavLink 3 content
          </Nav.Link>
        </Nav.Item>
        <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>
            </Navbar>
      </Nav>
    )
  }