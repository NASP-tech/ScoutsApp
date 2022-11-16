import { Col, Container, Row, Table, Dropdown } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import usuarios from '../images/users/usuarios.jpg';

import EditUsers from './EditUsers';
import DeleteUsers from './DeleteUsers';
import AddUsers from './AddUsers';
import Axios from 'axios';

const Users = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {
        const getUsers = async () => {
            const url = "http://localhost:4000/api/auth/";

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg2MzUzNTgsImV4cCI6MTY2ODY0MjU1OH0.DPKHZ2q7NaAmcMVJ6Az_BwjCFGjAT10jthtwDdKRWhk'
                }
            };

            const {data} = await Axios.get(url, config);

            console.log(data);

            setUsersData(data.users);
        }
        getUsers();
    }, []);

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
                                <th className="col-2">DUI</th>
                                <th className="col-4">Nombre</th>
                                <th className="col-2">Fecha</th>
                                <th className='col-2'>Email</th>
                                <th className="col-2">Rol</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {usersData.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.dui} </td>
                                        <td>{item.name}</td>
                                        <td>{item.hiringdate}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
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