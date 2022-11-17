import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import inventario from '../images/inventory/inventario.jpg'

import AddInventory from './AddInventory';
import EditInventory from './EditInventory';
import DeleteInventory from './DeleteInventory';
import Axios from 'axios';

const Inventory = () => {

    const [inventoryData, setInventoryData] = useState([]);


    useEffect(() => {
        const getInventory = async () => {
            const url = "http://localhost:4000/api/product/";

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg3MTYxODEsImV4cCI6MTY2ODcyMzM4MX0.wFlNSxyorsl5XIClnDWT9IzNjKDgJPpZE-KuA-Ye9W4'
                }
            };

            const {data} = await Axios.get(url, config);

            console.log(data);

            setInventoryData(data.products);
        }
        getInventory();
    }, []);

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={inventario} width='250px' height='150px' alt="..." />
                    <AddInventory/>
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope='col'>ID</th>
                                <th className="col">FamiliaID</th>
                                <th className="col-4">Nombre</th>
                                <th className="col-2">Unidad</th>
                                <th className="col-2">Existencia</th>
                                <th className="col-2">Cantidad</th>
                                <th className="col-2">Costo</th>
                                <th className="col-3">Precio</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        <tbody>
                        {inventoryData.map((item, index) => {

                            return (

                                
                                    <tr key={index}>
                                        <td>{item._id}</td>
                                        <td> {item.family_id} </td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.existence}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.sale_price}</td>
                                        <td>
                                            <EditInventory/>
                                        </td>
                                        <td>
                                            <DeleteInventory/>
                                        </td>
                                    </tr>
                                
                            )
                        })}
                        </tbody>
                    </Table>
                </Row>
            </Container>            
        </Container>
    );
};

export default Inventory;