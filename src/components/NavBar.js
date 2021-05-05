import React from 'react';
import { Navbar, Nav, NavDropdown,  Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';

export default function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect} >
        
        <Navbar className="navigationBar" variant="light" collapseOnSelect fixed='top' expand='xl' >
                 <h4>SECOND CHANCE THROUGH CODE</h4>
                        <Nav.Link href="/home" className='one'>HOME</Nav.Link>
                        <Nav.Link href='/resources' className='two'>RESOURCES</Nav.Link>
                        <Nav.Link href='/stories' className='three'>STORIES</Nav.Link>
                        <Nav.Link href='/media' className='four'>MEDIA</Nav.Link>

  
            
        {/* <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown>  */}
        <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" bg='light'/>
      <Button variant="outline-light">Search</Button>
    </Form>
            </Navbar>
        
      </Nav>
    )
  }


