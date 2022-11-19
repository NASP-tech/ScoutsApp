import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import donaciones from '../images/donations/donaciones.jpg'

import AddDonations from './AddDonations';
import EditDonations from './EditDonations';
import DeleteDonations from './DeleteDonations';
import Axios from 'axios';

const Donations = () => {
    
    const [donationsData, setDonationsData] = useState([]);

    useEffect(() => {

        const getDonations = async () =>{
            const url = "http://localhost:4000/api/donation/";

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg4NDU4NTcsImV4cCI6MTY2ODg1MzA1N30.X-1t0qupNL3_5aXwxntCU7izqrtjCn4egscISaqei5Q'
                }
            };

            const {data} = await Axios.get(url, config);

            setDonationsData(data.donations); 
        }
        getDonations();
    }, []);

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
                        {donationsData.map((item, index) => {

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
                </Row>
            </Container>


        </Container>
    );
};

export default Donations;