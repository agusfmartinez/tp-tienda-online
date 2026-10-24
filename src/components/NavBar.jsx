import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router';
import '../index.css';

function AppNavBar() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/"></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav as={Link} to="/" className='botonesNavBar'>Inicio</Nav>
            <Nav as={Link} to="/productos" className='botonesNavBar'>Productos</Nav>
            <Nav as={Link} to="/carrito" className='botonesNavBar'>Carrito</Nav>
            <Nav as={Link} to="/nosotros" className='botonesNavBar'>Nosotros</Nav>
            <NavDropdown title="Mi Perfil" className='botonesNavBar' id="basic-nav-dropdown">
              <NavDropdown.Item as={Link} to="/profile">Mis Datos</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/carrito">Mi Carrito</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/favorites">Favoritos</NavDropdown.Item>
              <NavDropdown.Divider />
                <NavDropdown.Item as={Link} to="/logout">Cerrar sesion</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavBar;