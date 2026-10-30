
import { Container, Row, Col } from "react-bootstrap";
import Logo from "./Logo";

function Footer() {
    return (<footer>
            <Container>
                <Row>
                    <Col md={6}>
                        <Logo height={100}/>
                        <p>&copy; 2026 El Doggy Style. Todos los derechos reservados.</p>
                    </Col>
                    <Col md={6}>
                        <h5>Contáctanos</h5>
                        <p>Email: info@eldoggestyle.com</p>
                        <p>Teléfono: 123-456-7890</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;