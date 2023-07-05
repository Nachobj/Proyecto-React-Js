import './NavBar.css';
import CartWidget from '../CartWidget/CartWidget';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <>
      <header>
        <Link className='logo' to={"/"}>
          <h1>GAMEOVER</h1>
        </Link>
        <div>
        <Navbar className='nav-list' expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='nav-list'>
                <NavLink className='navList' variant="outline-light" to={"/categoria/1"}>Playstation</NavLink>
                <NavLink className='navList' variant="outline-light" to={"/categoria/2"}>PC</NavLink>
                <NavLink className='navList' variant="outline-light" to={"/categoria/3"}>Xbox One</NavLink>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        </div>
        <CartWidget />
      </header>
    </>
  )
}

export default NavBar;