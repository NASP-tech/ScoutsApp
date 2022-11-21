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

            const salesInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = salesInfo;

            const config = {
                headers:{
                    'x-token': token
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
                                <th className="col-3">Cliente</th>
                                <th className="col-3">Dirección</th>
                                <th className="col">Fecha</th>
                                <th className="col">Nombre Cuenta</th>
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
                                        <td> {item.client} </td>
                                        <td>{item.address}</td>
                                        <td>{item.date}</td>
                                        <td>{item.account_name}</td>
                                        <td>{item.dui_nit}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.description}</td>
                                        <td>{item.total_cost}</td>
                                        <td>
                                            <EditSales idSales={item._id} />
                                        </td>
                                        <td>
                                            <DeleteSales idSales={item._id} />
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