import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import '../styles/navbar.css';

function Homenavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            <Link to="/addhawkerhome" className="nav-link">Add Hawker</Link>
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Signup</Link>
            <Link to ="/cart" className="nav-link" ><i className="fa-regular fa-cart-shopping cart-icon">cart</i></Link>
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}

export default Homenavbar;