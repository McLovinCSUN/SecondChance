import React from 'react';
import { Navbar, Nav, NavDropdown,  Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect} >

        <Navbar className="navigationBar" variant="light" collapseOnSelect fixed='top' expand='sm' >
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
          <Nav.Link eventKey="1" href="#/home" >
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
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" bg='light'/>
      <Button variant="outline-dark">Search</Button>
    </Form>
            </Navbar>
      </Nav>
    )
  }


