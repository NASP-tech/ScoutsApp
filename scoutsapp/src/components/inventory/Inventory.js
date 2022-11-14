import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from "react";
import inventario from '../images/inventory/inventario.jpg'

import AddInventory from './AddInventory';
import EditInventory from './EditInventory';
import DeleteInventory from './DeleteInventory';
import Axios from 'axios';

const Inventory = () => {

    const [model, setModel] = useState(false);
    const [inventoryData, setInventoryData] = useState([]);


    const getData =
        (
            id,
            familiaId,
            nombre,
            unidad,
            existencia,
            cantidad,
            costo,
            precio
        ) => {
            let tempData = [
                id,
                familiaId,
                nombre,
                unidad,
                existencia,
                cantidad,
                costo,
                precio
            ];
            setTempData(item => [1, ...tempData]);
            return setModel(true);
        }

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
                        {InventoryData.cardInventory.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td> {item.familiaId} </td>
                                        <td>{item.nombre}</td>
                                        <td>{item.unidad}</td>
                                        <td>{item.existencia}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.costo}</td>
                                        <td>{item.precio}</td>
                                        <td>
                                            <EditInventory/>
                                        </td>
                                        <td>
                                            <DeleteInventory/>
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

export default Inventory;