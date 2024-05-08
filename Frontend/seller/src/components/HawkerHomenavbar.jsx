import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom'; // Import NavLink instead of Link
import Hawkercard from './Hawkercard';

export default function HawkerHomenavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            {/* Convert Link to NavLink */}
            <Link to ="/additems"className="nav-link">Add Items</Link>
            {/* If the logout action is not handled by React Router, you can keep it as Nav.Link */}
            <Nav.Link href="#logout">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Hawkercard/>
    </>
  );
}
