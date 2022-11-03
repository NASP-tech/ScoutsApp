import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState } from "react";
import InventoryData from './InvetoryData';
import inventario from '../images/inventory/inventario.jpg'

const Inventory = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);


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
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">FamiliaID</th>
                                <th className="col-4">Nombre</th>
                                <th className="col-4">Unidad</th>
                                <th scope="col">Existencia</th>
                                <th className="col-4">Cantidad</th>
                                <th className="col-4">Costo</th>
                                <th className="col-4">Precio</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {InventoryData.cardInventory.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.familiaId} </td>
                                        <td>{item.nombre}</td>
                                        <td>{item.unidad}</td>
                                        <td>{item.existencia}</td>
                                        <td>{item.cantidad}</td>
                                        <td>{item.costo}</td>
                                        <td>{item.precio}</td>
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

export default Inventory;