import React from 'react';
import { Navbar, Nav, NavDropdown,  Form, Button, FormControl } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './NavBar.css';
import './buttonToggle.js';

export default function NavBar() {
    const handleSelect = (eventKey) => alert(`selected ${eventKey}`);
    return (
      <Nav variant="pills" activeKey="1" onSelect={handleSelect} >
        
        <Navbar className="navigationBar" variant="light" collapseOnSelect fixed='top' expand='xl' >
        <script type = "buttonToggle.js"></script>
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
            </Navbar>
        
      </Nav>
    )
  }




