import React,{Component} from 'react';
import { Navbar, Nav, Container, NavDropdown,  Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
        <Navbar bg="dark" variant="dark" expand="lg">
                <Navbar.Brand href="https://www.knowledgefactory.net/">
                                       Knowledgefactory</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="https://www.knowledgefactory.net/">Home
                                                        </Nav.Link>
                        <Nav.Link href="https://www.knowledgefactory.net
                           /p/knowledefactory-topics.html">SpringBoot</Nav.Link>
                        <NavDropdown title="Web Development" id="basic-nav-dropdown">
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/reactjs-tutorial.html">ReactJS</NavDropdown.Item>
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                             /p/react-native.html">React Native</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="https://www.knowledgefactory.net
                              /p/node-js.html">NodeJS</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className=
                                                        "mr-sm-2" />
                        <Button variant="outline-primary">Search</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>

        <Navbar collapseOnSelect fixed='top' expand = 'sm' bg='pink' variant = 'purple'>
                <Container>
                    <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
                    <Navbar.Collapse id='responsive-navbar-nav'/>
                    <Nav>
                        <Nav.Link href='/'>HOME</Nav.Link>
                        <Nav.Link href='/'>RESOURCES</Nav.Link>
                        <Nav.Link href='/'>STORIES</Nav.Link>
                        <Nav.Link href='/'>MEDIA</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
      </Nav>
    )
  }