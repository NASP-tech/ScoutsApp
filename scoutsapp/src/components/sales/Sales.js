import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from "react";
import SalesData from './SalesData';
import sales from '../images/sales/ventas.jpg';

const Sales = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);


    const getData =
        (
            id,
            cliente,
            direccion,
            fecha,
            cuenta,
            dui,
            cantidad,
            descripcion,
            total
        ) => {
            let tempData = [
                id,
                cliente,
                direccion,
                fecha,
                cuenta,
                dui,
                cantidad,
                descripcion,
                total
            ];
            setTempData(item => [1, ...tempData]);
            return setModel(true);
        }

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={sales} width='250px' height='150px' alt="..." />
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope='col'>ID</th>
                                <th className="col-3">Cliente</th>
                                <th className="col-3">Dirección</th>
                                <th className="col">Fecha</th>
                                <th className="col">Cuenta</th>
                                <th className="col-3">DUI</th>
                                <th className="col">Cantidad</th>
                                <th className="col-4">Descripción</th>
                                <th className='col-2'>Total</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {SalesData.cardSales.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td> {item.cliente} </td>
                                        <td>{item.direccion}</td>
                                        <td>{item.fecha}</td>
                                        <td>{item.cuenta}</td>
                                        <td>{item.dui}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.descripcion}</td>
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

export default Sales;