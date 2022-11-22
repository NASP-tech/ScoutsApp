import React, { useEffect } from "react";
import { Button, Col, Container, Row, Carousel } from 'react-bootstrap';
import donaciones from '../images/donations/donaciones.jpg';
import inventario from '../images/inventory/inventario.jpg';
import ventas from '../images/sales/ventas.jpg';
import usuarios from '../images/users/usuarios.jpg';
import scouts from '../images/menu/scouts.jpeg';
import scouts1 from '../images/menu/scouts.jpg';
import scouts2 from '../images/menu/scouts2.jpg';
import scouts3 from '../images/menu/scouts3.jpg';
import scouts4 from '../images/menu/scouts4.jpeg';
import scouts5 from '../images/menu/scouts4.jpg';
import { useNavigate } from 'react-router-dom';

const Menu = () => {

    const navigate = useNavigate();

    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if(!userInfo)
            navigate('/login');

    }, [navigate]);

    return (
        <Container fluid='lg'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block rounded"
                        src={scouts1}
                        width='1400px'
                        height='700px'
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block rounded"
                        src={scouts3}                        
                        width='1400px'
                        height='700px'
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block rounded"
                        src={scouts2}                        
                        width='1400px'
                        height='700px'
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block rounded"
                        src={scouts}
                        width='1400px'
                        height='700px'
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block rounded"
                        src={scouts4}
                        width='1400px'
                        height='700px'
                        alt="Fourth slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block rounded"
                        src={scouts5}
                        width='1400px'
                        height='700px'
                        alt="Fifth slide"
                    />
                </Carousel.Item>
            </Carousel>

            <p className='text-center fs-2 pb-4 pt-0 pr-4 pl-4'>
                Menu Principal
            </p>

            <Container fluid='lg'>
                <Row className="justify-content-center">
                    <Col md={2} className="text-center text-md">
                        <img src={inventario} alt="inventario" width='200px' height='150px' className='rounded'/>
                        <Button 
                            variant="outline-success"
                            href='/inventory'>
                            Inventario
                        </Button>
                    </Col>
                    <Col md={2} className="text-center text-md">
                        <img src={ventas} alt="ventas" width='200px' height='150px' className='rounded'/>
                        <Button                             
                            variant="outline-success"
                            href='/sales'> 
                            Ventas
                        </Button>
                    </Col>
                    <Col md={2} className="text-center text-md">
                        <img src={donaciones} alt="donaciones" width='200px' height='150px' className='rounded'/>
                        <Button 
                            variant="outline-success"
                            href='/donations'>
                            Donaciones
                        </Button>
                    </Col>
                    <Col md={2} className="text-center text-md">
                        <img src={usuarios} alt="usuario" width='200px' height='150px' className='rounded'/>
                        <Button 
                            variant="outline-success"
                            href='/users'>
                            Usuarios
                        </Button>
                    </Col>
                </Row>
            </Container>

            
        </Container>
        
    );
};

export default Menu;