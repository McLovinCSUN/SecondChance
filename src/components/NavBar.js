import React from 'react';
import { Navbar, Nav} from 'react-bootstrap';
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
          </Navbar>
       </Nav>
    )
  }


