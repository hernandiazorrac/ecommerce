import './NavbarComp.css'
import logo from './logo-navbar.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import { Link } from 'react-router-dom';
import { useState } from 'react';

function NavbarComp(){

    const [expanded, setExpanded] = useState(false);

    return(
    <header>
        <div>
            <Navbar bg="dark" variant="dark" expand="lg" className='navbar' expanded={expanded}>
                <Container>
                <Link to="/" onClick={() => setExpanded(false)}>
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
          
                <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbarItems">
                            <Link to="/categoria/armados" className='navLink' onClick={() => setExpanded(false)} >Armados</Link>
                            <Link to="/categoria/tablas" className='navLink' onClick={() => setExpanded(false)}>Tablas</Link>
                            <Link to="/categoria/trucks" className='navLink' onClick={() => setExpanded(false)}>Trucks</Link>
                            <Link to="/categoria/ruedas" className='navLink' onClick={() => setExpanded(false)}>Ruedas</Link>
                            <Link to="/categoria/rulemanes" className='navLink' onClick={() => setExpanded(false)}>Rulemanes</Link>
                            <Link to="/categoria/lijas" className='navLink' onClick={() => setExpanded(false)}>Lijas</Link>
                        </Nav>
                        <Link to="/cart" className='navLink' onClick={() => setExpanded(false)}>
                            <CartWidget />
                        </Link>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    </header>
    )
}

export default NavbarComp;