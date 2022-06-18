import logo from './logo-navbar.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget.js';
import './NavbarComp.css'

function NavbarComp(){
    return(
    <header>
        <div>
            <Navbar bg="dark" variant="dark" expand="lg">
                <Container>
                <Navbar.Brand href="#home">
            <img
              alt=""
              src={logo}
              width="70"
              height="70"
              className="d-inline-block align-top"
            />{' '}
          </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto navbarItems">
                            <Nav.Link href="#armados" className='navLink'>Armados</Nav.Link>
                            <Nav.Link href="#tablas" className='navLink'>Tablas</Nav.Link>
                            <Nav.Link href="#trucks" className='navLink'>Trucks</Nav.Link>
                            <Nav.Link href="#ruedas" className='navLink'>Ruedas</Nav.Link>
                            <Nav.Link href="#rulemanes" className='navLink'>Rulemanes</Nav.Link>
                            <Nav.Link href="#lijas" className='navLink'>Lijas</Nav.Link>
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