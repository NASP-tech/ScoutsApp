import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import sales from '../images/sales/ventas.jpg';

import '../../App.css'

import ReactPaginate from 'react-paginate'

import AddSales from './AddSales';
import DeleteSales from './DeleteSales';
import EditSales from './EditSales';
import Axios from 'axios';

export default function SalesPagination(props) {

    const {data} = props;
    const [currentSale, setCurrentSale] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffset] = useState(0);
    const itemsPerPage = 5;

    useEffect(() => {

        const endOffset = itemOffSet + itemsPerPage;
        setCurrentSale(data.slice(itemOffSet, endOffset));
        setPageCount(Math.ceil(data.length / itemsPerPage));
    }, [itemOffSet, itemsPerPage, data]);

    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % data.length;
        setItemOffset(newOffset);
    };
    

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
                                <th className="col-5">Dirección</th>
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
                        {currentSale.map((item, index) => {
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