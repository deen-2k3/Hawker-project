import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Hawkernavbar() {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="ml-auto">
            
            <Link to="/login" className="nav-link">Login</Link>
            <Link to="/register" className="nav-link">Signup</Link>
          
          </Nav>
        </Container>
      </Navbar>
      

    </>
  );
}


function AddHawker() {
  return (
    <div className='d-flex align-items-center flex-column'> {/* Applying 'd-flex', 'align-items-center', and 'flex-column' classes */}
      <div className="text-center mb-3"> {/* Encapsulating content in a div for text centering and adding margin bottom */}
        <h1>Partner With Hawker at 0% commission for the 1st month!</h1>
      </div>
      <div className="text-center"> {/* Encapsulating buttons in a div for text centering */}
      <Link to="/hawkerregister" className="btn btn-primary  d-inline-block" style={{ marginRight: '15px'}}>Register Your Shop</Link>
      <Link to="/login" className=" btn btn-primary  d-inline-block">Login to view your existing shop</Link>
      </div>
    </div>
  );
}

export { AddHawker, Hawkernavbar };