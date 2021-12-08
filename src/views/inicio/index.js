import "./style.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function Inicio(){
    return (           
        <Container id="inicio" fluid>
            <Row className="inicio-background">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Guillermo & Karla</h1>
                    <h1 className="sub-tittle">Nuestra boda</h1>
                </Col>
            </Row>
            <Row className="frase-background">
                <Col xs={12} md={12} >
                    <h2>Una boda vive 3 veces, al soñarla, al celebrarla y al recordarla, te invitamos a que formes parte de ella</h2>
                </Col>
            </Row>
        </Container>
    );
}