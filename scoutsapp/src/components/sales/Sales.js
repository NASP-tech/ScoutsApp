import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import sales from '../images/sales/ventas.jpg';

import AddSales from './AddSales';
import DeleteSales from './DeleteSales';
import EditSales from './EditSales';
import Axios from 'axios';

const Sales = () => {

    const [salesData, setSalesData] = useState([]);

    useEffect(() => {
        const getSales = async () => {
            const url = "http://localhost:4000/api/billing/";

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg0NjI4MDksImV4cCI6MTY2ODQ3MDAwOX0.lDDjv3gxVfUUX53X7aHrssQn-2Ot15ay5rYXW2TI4sA'
                }
            };

            const {data} = await Axios.get(url, config);

            console.log(data);

            setSalesData(data.billings);
        }
        getSales();
    }, []);
    

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={sales} width='250px' height='150px' alt="..." />
                    <AddSales/>
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
                        {salesData.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td> {item.client} </td>
                                        <td>{item.address}</td>
                                        <td>{item.date}</td>
                                        <td>{item.account_name}</td>
                                        <td>{item.dui_nit}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.description}</td>
                                        <td>{item.total_cost}</td>
                                        <td>
                                            <EditSales/>
                                        </td>
                                        <td>
                                            <DeleteSales/>
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