import { Button, Col, Container, Row, Table, Dropdown } from 'react-bootstrap';
import React, { useState } from "react";
import UsersData from './UsersData';
import usuarios from '../images/users/usuarios.jpg';
import EditUsers from './EditUsers';
import DeleteUsers from './DeleteUsers';
import AddUsers from './AddUsers';

const Users = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);


    const getData =
        (
            id,
            dui,
            nombre,
            fecha,
            rol,
        ) => {
            let tempData = [
                id,
                dui,
                nombre,
                fecha,
                rol,
            ];
            setTempData(item => [1, ...tempData]);
            return setModel(true);
        }

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={usuarios} width='250px' height='150px' alt="..." />
                    <AddUsers/>
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope='col'>ID</th>
                                <th className="col-2">DUI</th>
                                <th className="col-4">Nombre</th>
                                <th className="col-2">Fecha</th>
                                <th className="col-2">Rol</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {UsersData.cardUsers.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.id}</td>
                                        <td> {item.dui} </td>
                                        <td>{item.nombre}</td>
                                        <td>{item.fecha}</td>
                                        <td>
                                            <Dropdown>
                                                <Dropdown.Toggle variant="success" id="dropdown-basic">
                                                    {item.rol}
                                                </Dropdown.Toggle>

                                                <Dropdown.Menu>
                                                    <Dropdown.Item href="#/action-1">Administrador</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-2">Contador</Dropdown.Item>
                                                    <Dropdown.Item href="#/action-3">Supervisor</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </td>

                                        <td>
                                            <EditUsers />
                                        </td>
                                        <td>
                                            <DeleteUsers />
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

export default Users;