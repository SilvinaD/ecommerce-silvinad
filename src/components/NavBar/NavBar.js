import './NavBar.css';
import { Navbar, Container, Nav } from 'react-bootstrap';

import { NavLink, Link } from 'react-router-dom';
import { UseCartContext } from '../../context/CartContext';
import CartWidget from '../CartWidget/CartWidget';


function NavBar() {
  const { IconCart, CartList } = UseCartContext()

  return (
    <Navbar bg="light" expand="lg">
    <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Home</NavLink>
              <NavLink className= 'link'
                    to="/category/Skate">Skates</NavLink>
              <NavLink to="/category/Longboard">Longboards</NavLink>
            </Nav>
            <Link to= '/cart'> 
             <CartWidget/>
            </Link>
            {CartList.lenght < 1 ? '' : <p> Item amount {IconCart()} </p>}
          </Navbar.Collapse>
      </Container>
  </Navbar>
  )
}

export default NavBar