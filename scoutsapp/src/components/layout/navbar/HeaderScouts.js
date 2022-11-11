import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/loginForm/navLogo.png';

const HeaderScouts = () => {
    return (
        <Navbar bg="light" variant='light'>
            <Container>
                <Navbar.Brand href="/login">
                    <img
                        alt=""
                        src={Logo}
                        width="130"
                        height="40"
                    />{' '}

                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <Nav.Link href="/menu">Inicio</Nav.Link>
                        <Nav.Link href="/inventory">Inventario</Nav.Link>
                        <Nav.Link href="/sales">Ventas</Nav.Link>
                        <Nav.Link href="/donations">Donaciones</Nav.Link>
                        <Nav.Link href="/users">Usuarios</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
            <Navbar.Brand href="/login">
                <img
                    alt=""
                    src={Logo}
                    width="130"
                    height="40"
                />{' '}

            </Navbar.Brand>
        </Navbar>
    );
};

export default HeaderScouts;