import {NavLink, Link} from 'react-router-dom'
import {Navbar, Container, Nav} from 'react-bootstrap'

import {UseCartContext} from '../../context/CartContext'
import CartWidget from '../CartWidget/CartWidget'
import './NavBar.css'

function NavBar() {
  const {IconCart, CartList} = UseCartContext()

  return (
    <Navbar bg="light" expand="lg">
        <div>
            <Link to="/">
             {" "}
             <img className="logo" src= '/assets/images/logoSkate.png ' alt="logo1" />
            </Link>
        </div>
      <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink to="/">Catalogue</NavLink>
              <NavLink className= 'link' to="/category/Skates">Skateboards</NavLink>
              <NavLink className= 'link' to="/category/Longboards">Longboards</NavLink>
            </Nav>
            <Link to= '/cart'> 
             <CartWidget/>
            </Link>

            {CartList.lenght < 1 ? '' : <p> {IconCart()} </p>}
          
          </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar