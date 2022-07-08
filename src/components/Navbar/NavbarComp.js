import './NavbarComp.css'
import logo from './logo-navbar.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';

function NavbarComp(){
    return(
    <header>
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Link to="/ecommerce">
                <Navbar.Brand>
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
          </Link>
          
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbarItems">
                            <Link to="/categoria/armados" className='navLink'>Armados</Link>
                            <Link to="/categoria/tablas" className='navLink'>Tablas</Link>
                            <Link to="/categoria/trucks" className='navLink'>Trucks</Link>
                            <Link to="/categoria/ruedas" className='navLink'>Ruedas</Link>
                            <Link to="/categoria/rulemanes" className='navLink'>Rulemanes</Link>
                            <Link to="/categoria/lijas" className='navLink'>Lijas</Link>
                        </Nav>
                        <CartWidget />
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </header>
    )
}

export default NavbarComp;