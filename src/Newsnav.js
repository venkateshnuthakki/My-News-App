import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { NavLink} from 'react-router-dom';
import './newsnav.css'

export default function Newsnav() {
  return (
    <div>
      <Navbar expand="lg" className="bg-secondry">
        
          <Navbar.Brand id='he' ><span id='lo'>V</span>-NEWS</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto mx-5" id='tnav'>
              <Nav.Link as={NavLink} id='ne1'  to="/">Home</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/bus">Business</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/en">Entertainment</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/gen">General</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/health">Health</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/science">Science</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/sports">Sports</Nav.Link>
              <Nav.Link as={NavLink} id='ne1'  to="/tech">Technology</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        
      </Navbar>
    </div>
  );
}
