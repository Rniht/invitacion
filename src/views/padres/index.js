import "./style.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
export default function Padres(){
    return (
        <Container id="padres" fluid>
            
            <Row className="background">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Papás ​​de la novia</h1>
                </Col>
                <Col xs={12} md={12} >
                    <h2>Gerardo Mercado Uribe</h2>
                </Col>
                <Col xs={12} md={12} >
                    <h2>Lucinda Perla Morfin Nieto</h2>
                </Col>
            </Row>
            <Row className="background">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Papás ​​del novio</h1>
                </Col>
                <Col xs={12} md={12} >
                    <h2>Guillermo Velasco Delgado ✝</h2>
                </Col>
                <Col xs={12} md={12} >
                    <h2>María de Lourdes Ulaje González</h2>
                </Col>
            </Row>
            <Row className="background">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Padrinos</h1>
                </Col>
                <Col xs={12} md={12} >
                    <h2>Hugo Jimenez Islas</h2>
                </Col>
                <Col xs={12} md={12} >
                    <h2>Beatriz Azminda Gonzalez Nieto</h2>
                </Col>
            </Row>
        </Container>
    );
}