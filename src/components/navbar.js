import logo from './logo-navbar.svg';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';

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
                        <Nav.Link href="#home" className='navLink'>Home</Nav.Link>
                        <Nav.Link href="#tienda" className='navLink'>Tienda</Nav.Link>
                        <Nav.Link href="#nosotros" className='navLink'>Nosotros</Nav.Link>
                        <Nav.Link href="#contacto" className='navLink'>Contacto</Nav.Link>
                    </Nav>
                    </Navbar.Collapse>
                    <CartWidget />
                </Container>
            </Navbar>
        </div>
    </header>
    )
}

export default NavbarComp;