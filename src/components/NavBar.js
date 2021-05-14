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
                 <a href ='#' class = "toggle-button">
                    <span class ="bar"></span>
                    <span class ="bar"></span>
                    <span class ="bar"></span>
                  </a>
                 <div class="navbar-link">
                   <ul>
                     <li><a href ="#">HOMES</a></li>
                     <li><a href ="#">RESOURCES</a></li>
                     <li><a href ="#">STORIES</a></li>
                     <li><a href ="#">MEDIA</a></li>
                  </ul>
                 </div>
                 
                        {/* <Nav.Link href="/home">HOME</Nav.Link>
                        <Nav.Link href='/resources'>RESOURCES</Nav.Link>
                        <Nav.Link href='/stories'>STORIES</Nav.Link>
                        <Nav.Link href='/media'>MEDIA</Nav.Link> */}


  
            
        {/* <NavDropdown title="Dropdown" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">Another action</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Something else here</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Separated link</NavDropdown.Item>
        </NavDropdown> */}

        
                     <Form inline>
                      <FormControl type="text" placeholder="Search" className="mr-sm-2" bg='light'/>
                      <Button variant="outline-light">Search</Button>
                    </Form>
            </Navbar>
        
      </Nav>
    )
  }

  const toggleButton = document.getElementsByClassName('toggle-button')[0]
  const navbarLinks = document.getElementsByClassName('navbar-link')[0]

  toggleButton.addEventListener('click', ()=> {
    navbarLinks.classList.toggle('active')
  })
  