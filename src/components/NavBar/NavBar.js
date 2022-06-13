import './NavBar.css'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap'
import CartWidget from '../CartWidget/CartWidget'
import { Link, NavLink } from 'react-router-dom'


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
    <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link to="/">Home</Nav.Link>
              <NavLink className= 'link'
                    to="/category/Skate">Skates</NavLink>
              <NavLink to="/category/Longboard">Longboards</NavLink>
            </Nav>
            <CartWidget/>
          </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar