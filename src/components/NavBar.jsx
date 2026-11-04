import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link, NavLink } from 'react-router';
import Logo from './Logo';
import Badge from 'react-bootstrap/Badge';

function AppNavBar({ cantidadTotal }) {
  return (
    <Navbar expand="lg" className="navbar-estilos gap-2">
      <Container className='nav-smartphone'>
        <Navbar.Brand as={Link} to="/">
          <Logo height={'100px'}/>
        </Navbar.Brand>

        <div className='d-flex align-items-center py-2 gap-3 order-lg-last'>
          <Nav.Link as={NavLink} to="/carrito" className='d-flex align-items-center py-2 gap-2'>
            <span class="material-symbols-outlined">
            shopping_cart
            </span>
            {" "}
            {cantidadTotal > 0 && (
              <Badge pill className='badge-carrito'>{cantidadTotal}</Badge>
            )}
          </Nav.Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        </div>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>Inicio</Nav.Link>
            <Nav.Link as={NavLink} to="/productos">Productos</Nav.Link>
            <Nav.Link as={NavLink} to="/nosotros">Nosotros</Nav.Link>
            <Nav.Link as={NavLink} to="/contacto">Contacto</Nav.Link>
          </Nav>
        </Navbar.Collapse>
        
        
        
        
      </Container>
    </Navbar>
  );
}

export default AppNavBar;
