import React from 'react';
import {Navbar,Container,NavDropdown,Form,FormControl,Button,Nav} from 'react-bootstrap'
import { useState } from 'react';
function Header({filter}) {
  return <div>

      <Navbar style={{backgroundColor:'orange'}} expand="lg">
  <Container style={{margin:'0 10%'}}  fluid>
    <Navbar.Brand href="#">Hooks</Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
        <Nav.Link href="#action1">State</Nav.Link>
        <Nav.Link href="#action2">setState</Nav.Link>
        <NavDropdown title="Link" id="navbarScrollingDropdown">
          <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
          <NavDropdown.Item href="#action4">Another action</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action5">
            Something else here
          </NavDropdown.Item>
        </NavDropdown>
       
      </Nav>
      <Form className="d-flex">
        <FormControl 
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"  onChange={(e)=>filter(e.target.value)}
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
  </div>;
}


export default Header;
