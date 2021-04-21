import React,{Component} from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

export default class NavBar extends Component{
    render(){
        return (
        <div>
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
        </div>
    )
    }
    
};


