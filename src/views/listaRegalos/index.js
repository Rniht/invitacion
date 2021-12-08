import "./style.css";
import { Card, Container, Col, Row } from "react-bootstrap";
import img from "../../images/presents.png";
export default function ListaRegalos(){
    return (
        <Container id="listaRegalos" fluid>
            <Row className="background-regalos">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Lista de regalos</h1>
                </Col>
                <Col xs={12} md={6} >
                    <a href="https://mesaderegalos.liverpool.com.mx/milistaderegalos/50687780">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={3} md={3} >
                                        <img src={img}/>
                                    </Col>
                                    <Col xs={9} md={9} className="div-text"> 
                                        Liverpool: 50687780
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
                <Col xs={12} md={6} >
                    <a href="https://wap-mesa-regalos.sears.com.mx/evento/24502469">
                        <Card>
                            <Card.Body>
                                <Row>
                                    <Col xs={3} md={3} >
                                        <img src={img}/>
                                    </Col>
                                    <Col xs={9} md={9} className="div-text"> 
                                        Sears: 24502469
                                    </Col>
                                </Row>
                            </Card.Body>
                        </Card>
                    </a>
                </Col>
            </Row>
        </Container>
    );
}