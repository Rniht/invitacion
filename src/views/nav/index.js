import NavComponent from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container  from 'react-bootstrap/Container';
export default function Nav(){
    return (
        <Navbar bg="light" expand="lg" sticky="top">
        <Container fluid>
            <Navbar.Brand href="#inicio">Inicio</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
            <NavComponent
                className="me-auto my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
            >
                <NavComponent.Link href="#donde">Donde</NavComponent.Link>
                <NavComponent.Link href="#nosotros">Nosotros</NavComponent.Link>
                <NavComponent.Link href="#listaRegalos">Lista de regalos</NavComponent.Link>
                <NavComponent.Link href="#confirmar">Confirmar asistencia</NavComponent.Link>
            </NavComponent>
            </Navbar.Collapse>
        </Container>
        </Navbar>
    );
}