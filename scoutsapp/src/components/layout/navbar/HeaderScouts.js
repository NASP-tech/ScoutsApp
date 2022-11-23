import { Container, Navbar, Nav } from 'react-bootstrap';
import Logo from '../../images/loginForm/navLogo.png';

import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const HeaderScouts = () => {

    const navigate = useNavigate();

    const token = localStorage.getItem('userInfo');

    const logout = async () => {
        localStorage.removeItem('userInfo');

        navigate("/login", { replace: true });
    };

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
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto">
                    <Nav.Link onClick={logout}>Logout</Nav.Link>
                </Nav>
            </Navbar.Collapse>
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