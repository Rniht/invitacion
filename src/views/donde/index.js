import "./style.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import Image from 'react-bootstrap/Image'
import salonImg from '../../images/salon.jpeg'
import iglesiaImg from '../../images/iglesia.png'
import vetimentaImg from '../../images/vestimenta.jpg'
export default function Donde(){
    return (
        <Container id="donde" fluid>
            <Row className="background-donde">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Dónde & Cuándo</h1>
                </Col>
                <Col xs={12} md={6} >
                    <Card style={{ width: '100%' }}>
                        <Card.Header>
                            <div className="titulo-card">
                                Ceremonia Religiosa
                            </div>
                        </Card.Header>
                        <Card.Img variant="top" src={iglesiaImg} />
                        <Card.Body>
                            <Card.Title>Templo del Inmaculado Corazón de María</Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col md={6} >
                                        <label className="cuando">Cuando: </label>
                                    </Col>
                                    <Col md={6} >
                                        <p>26 de Febrero a las 18 horas</p>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Row>
                                <Col xs={12} md={12} >
                                    <a href="https://goo.gl/maps/UbjE53Nm8qpNyHeg8"><Button variant="primary">Ver mapa</Button></a>
                                    
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} >
                    <Card style={{ width: '100%' }}>
                        <Card.Header>
                            <div className="titulo-card">
                                Recepción
                            </div>
                        </Card.Header>
                        <Card.Img variant="top" src={salonImg} />
                        <Card.Body>
                            <Card.Title><p>Eventos La Fragua Salón "Agave"</p></Card.Title>
                            <Card.Text>
                                <Row>
                                    <Col md={6} >
                                            <label className="cuando">Cuando: </label>
                                    </Col>
                                    <Col md={6} >
                                        <p>26 de Febrero a las 20 horas</p>
                                    </Col>
                                </Row>
                            </Card.Text>
                            <Row>
                                <Col md={6} >
                                    <a href="https://goo.gl/maps/8trbAx8FUzgAf4Ki8">
                                        <Button variant="primary">Ver mapa</Button>
                                    </a>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <Row className="background-donde">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Vestimenta</h1>
                </Col>
                <Col xs={12} md={12} >
                    <Image src={vetimentaImg} fluid />
                </Col>
            </Row>
        </Container>
    );
}