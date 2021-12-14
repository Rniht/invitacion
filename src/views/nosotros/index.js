import "./style.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../images/image4.jpeg'
import img2 from '../../images/image3.jpeg'
import img3 from '../../images/image5.jpeg'
export default function Nosotros(){
    return (
        <Container id="nosotros" fluid>
            <Row className="background-nosotros">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Nosotros</h1>
                </Col>
            </Row>
            <Carousel>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img1}
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img2}
                    alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={img3}
                    alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </Container>
    );
}