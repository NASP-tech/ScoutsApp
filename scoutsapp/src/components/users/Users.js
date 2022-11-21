import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import usuarios from '../images/users/usuarios.jpg';
import '../../../src/App.css'

import ReactPaginate from 'react-paginate'

import EditUsers from './EditUsers';
import DeleteUsers from './DeleteUsers';
import AddUsers from './AddUsers';
import Axios from 'axios';

const Users = () => {

    const [usersData, setUsersData] = useState([]);
    const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffset] = useState(0);
    const itemsPerPage = 7;

    useEffect(() => {

        const endOffset = itemOffSet + itemsPerPage;
        setCurrentItems(usersData.slice(itemOffSet, endOffset));
        setPageCount(Math.ceil(usersData.length / itemsPerPage));

        const getUsers = async () => {
            const url = "http://localhost:4000/api/auth/";

            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = userInfo;

            const config = {
                headers: {
                    'x-token': token
                }
            };

            const { data } = await Axios.get(url, config);

            setUsersData(data.users);
        }
        getUsers();
    }, [itemOffSet, itemsPerPage, usersData]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % usersData.length;
        setItemOffset(newOffset);
    };

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={usuarios} width='250px' height='150px' alt="..." />
                    <AddUsers />
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
                        {currentItems.map((item, index) => {
                            return (

                                <tbody key={index}>
                                    <tr>
                                        <td> {item.dui} </td>
                                        <td>{item.name}</td>
                                        <td>{item.hiringdate}</td>
                                        <td>{item.email}</td>
                                        <td>{item.role}</td>
                                        <td>
                                            <EditUsers idUsuario={item._id} />
                                        </td>
                                        <td>
                                            <DeleteUsers idUsuario={item._id} />
                                        </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                    </Table>
                    <ReactPaginate
                        breakLabel="..."
                        nextLabel="siguiente >"
                        onPageChange={handlePageClick}
                        pageRangeDisplayed={5}
                        pageCount={pageCount}
                        previousLabel="< anterior"
                        renderOnZeroPageCount={null}
                        containerClassName="pagination"
                        pageLinkClassName="page-num"
                        previousLinkClassName="page-num"
                        nextLinkClassName="page-num"
                        activeClassName="active"
                    />
                </Row>
            </Container>


        </Container>
    );
};

export default Users;