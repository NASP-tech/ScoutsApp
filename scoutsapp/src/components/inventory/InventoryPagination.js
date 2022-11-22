import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import inventario from '../images/inventory/inventario.jpg'
import '../../App.css'

import ReactPaginate from 'react-paginate'

import AddInventory from './AddInventory';
import EditInventory from './EditInventory';
import DeleteInventory from './DeleteInventory';

export default function InventoryPagination(props) {

    const {data} = props;
    const [currentInventory, setCurrentInventory] = useState([]);
    const [pageCount, setPageCount] = useState(0);
    const [itemOffSet, setItemOffset] = useState(0);
    const itemsPerPage = 7;

    useEffect(() => {

        const endOffset = itemOffSet + itemsPerPage;
        setCurrentInventory(data.slice(itemOffSet, endOffset));
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
                    <img src={inventario} width='250px' height='150px' alt="..." />
                    <AddInventory />
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
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
                            {currentInventory.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <td> {item.family_id} </td>
                                        <td>{item.name}</td>
                                        <td>{item.quantity}</td>
                                        <td>{item.existence}</td>
                                        <td>{item.unit}</td>
                                        <td>{item.cost}</td>
                                        <td>{item.sale_price}</td>
                                        <td>
                                            <EditInventory idInventory={item._id} />
                                        </td>
                                        <td>
                                            <DeleteInventory idInventory={item._id} />
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
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