import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import { NavLink, Link } from 'react-router-dom';

const NavBar = () => {
  const imgHeader = "https://gaming-cdn.com/img/products/7072/pcover/1920x620/7072.jpg?v=1683557192"
  return (
    <>
      <header>
        {/* <h1 className='titulo'>
          <a href="#home">GameStore</a>
        </h1> */}
        <Link to={"/"}>
          <h1 className='logo'>GAMEOVER</h1>
        </Link>
        <div>
        <Navbar className='nav-list' expand="lg">
          <Container>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className='nav-list'>
                {/* <Button className='navList' variant="outline-light">Playstation</Button>{' '}
                <Button className='navList' variant="outline-light">PC</Button>{' '}
                <Button className='navList' variant="outline-light">Xbox</Button> */}
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

export default NavBar