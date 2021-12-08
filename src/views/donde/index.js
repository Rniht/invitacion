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
                        <Card.Header>Ceremonia religiosa</Card.Header>
                        <Card.Img variant="top" src={iglesiaImg} />
                        <Card.Body>
                            <Card.Title>Templo del inmaculado corazon de maria</Card.Title>
                            <Card.Text>
                                <label>Cuando</label> 26 de febrero a las 16 horas
                            </Card.Text>
                            <Row>
                                <Col xs={12} md={6} >
                                    <Button variant="primary">Ver mapa</Button>
                                </Col>
                                <Col xs={12} md={6} >
                                    <Button variant="primary">Agendar</Button>
                                </Col>
                            </Row>
                        </Card.Body>
                    </Card>
                </Col>
                <Col xs={12} md={6} >
                    <Card style={{ width: '100%' }}>
                        <Card.Header>Recepcion</Card.Header>
                        <Card.Img variant="top" src={salonImg} />
                        <Card.Body>
                            <Card.Title><p>Eventos la fragua</p></Card.Title>
                            <Card.Text>
                                <label>Cuando</label> 26 de febrero a las 20 horas
                            </Card.Text>
                            <Row>
                                <Col md={6} >
                                    <Button variant="primary">Ver mapa</Button>
                                </Col>
                                <Col md={6} >
                                    <Button variant="primary">Agendar</Button>
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