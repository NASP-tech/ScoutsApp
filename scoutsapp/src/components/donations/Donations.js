import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from "react";
import DonationsData from './DonationsData';
import donaciones from '../images/donations/donaciones.jpg'

const Donations = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);


    const getData =
        (
            id,
            fecha,
            donante,
            direccion,
            tipo,
            concepto,
            total,
        ) => {
            let tempData = [
                id,
                fecha,
                donante,
                direccion,
                tipo,
                concepto,
                total,
            ];
            setTempData(item => [1, ...tempData]);
            return setModel(true);
        }

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={donaciones} width='250px' height='150px' alt="..." />
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th className="col">Fecha</th>
                                <th className="col-3">Donante</th>
                                <th className="col-4">Dirección del Donante</th>
                                <th className="col-3">Tipo de Donación</th>
                                <th className="col-4">Concepto</th>
                                <th className="col">Total</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {DonationsData.cardDonations.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td>{item.fecha}</td>
                                        <td>{item.donante}</td>
                                        <td>{item.direccion}</td>
                                        <td>{item.tipo}</td>
                                        <td>{item.concepto}</td>
                                        <td>{item.total}</td>
                                        <td>
                                            <Button className='btn btn-warning'>
                                                Modificar
                                            </Button>
                                        </td>
                                        <td>
                                            <Button className='btn btn-danger'>
                                                Eliminar
                                            </Button>
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                    </Table>
                </Row>
            </Container>


        </Container>
    );
};

export default Donations;