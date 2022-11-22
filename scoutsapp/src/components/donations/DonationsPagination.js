import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import donaciones from '../images/donations/donaciones.jpg'
import '../../App.css'

import ReactPaginate from 'react-paginate'

import AddDonations from './AddDonations';
import EditDonations from './EditDonations';
import DeleteDonations from './DeleteDonations';

export default function DonationsPagination(props) {
    
    const {data} = props;
    const [currentDonation, setCurrentDonation] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffset] = useState(0);
    const itemsPerPage = 7;

    useEffect(() => {

        const endOffset = itemOffSet + itemsPerPage;
        setCurrentDonation(data.slice(itemOffSet, endOffset));
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
                    <img src={donaciones} width='250px' height='150px' alt="..." />
                    <AddDonations/>
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th className="col">Fecha</th>
                                <th className="col-3">Donante</th>
                                <th className="col-3">NIT</th>
                                <th className="col-4">Dirección del Donante</th>
                                <th className="col-3">Tipo de Donación</th>
                                <th className="col">Total</th>
                                <th className='col-4'>Modificar</th>
                                <th className='col-4'>Eliminar</th>
                            </tr>
                        </thead>
                        {currentDonation.map((item, index) => {

                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td>{item.donationDate}</td>
                                        <td>{item.donor}</td>
                                        <td>{item.nit}</td>
                                        <td>{item.address}</td>
                                        <td>{item.donationType}</td>
                                        <td>{item.moneyQuantity}</td>
                                        <td>
                                            <EditDonations idDonation={item._id}/>
                                        </td>
                                        <td>
                                            <DeleteDonations idDonation={item._id}/>
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