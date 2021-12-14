import "./style.css";
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import wsIcon from '../../whasapp-icon.svg'
export default function ConfirmarAsistencia(){
    return (
        <Container id="confirmar" fluid>
            <Row className="background">
                <Col xs={12} md={12} >
                    <h1 className="tittle">Confirmar asistencia</h1>
                </Col>
                <Col xs={12} md={12} >
                    <a href="https://api.whatsapp.com/send?phone=5214611160486&text=Confirmo asistencia a la ceremonia">
                        <Button className="button-wap"> <img src={wsIcon} alt="imagen"/>Confirmar asistencia</Button>
                    </a>
                </Col>
            </Row>
            <Row>
                <div className="footer">
                    <Col xs={12} md={12}  className="tittle">
                        <h2>Guillermo & Karla</h2>
                    </Col>
                    <Col xs={12} md={12} className="subttitle">
                        <h2>Te esperamos</h2>
                    </Col>
                </div>
            </Row>
        </Container>
    );
}