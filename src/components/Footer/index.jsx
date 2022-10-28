import { Col, Container, Row } from 'react-bootstrap'
import './footer.css'

export default function Footer() {
    return (
        <div className='footer'>
            <Container>
                <Row>
                    <Col>
                        <p>© Copyright: Peperone | Todos los derechos reservados </p>
                    </Col>
                    <Col>
                        <h4>Seguinos en nuestras redes</h4>
                        <div>
                            <a href="https://www.facebook.com/peperone.salumeria.1 " target="blank">
                                <i className="bi bi-facebook"></i>
                            </a>
                            <a href="https://www.instagram.com/peperone.salumeria/" target="blank">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
