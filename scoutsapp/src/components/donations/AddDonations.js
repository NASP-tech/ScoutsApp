import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';
import Axios from 'axios';

function AddDonations() {

    const [isShow, invokeModal] = useState(false);

    // Estado Inicial
    const [formValues, handleInputChange] = useForm({
        donationDate: 1,
        donor: '',
        address: '',
        nit: '',
        donationType: '',
        moneyQuantity: 0
    });

    // Destructuring 
    const {
        donationDate,
        donor,
        address,
        nit,
        donationType,
        moneyQuantity
    } = formValues; 


    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/donation';

        const config = {
            headers:{
                'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg3MTYxODEsImV4cCI6MTY2ODcyMzM4MX0.wFlNSxyorsl5XIClnDWT9IzNjKDgJPpZE-KuA-Ye9W4'
            }
        };

        const body = {
            "donationDate": donationDate,
            "donor": donor,
            "address": address,
            "nit": nit,
            "donationType": donationType,
            "moneyQuantity": moneyQuantity
        };

        if(nit.length == 14){
            Axios.post(url, body, config)
                .then(response => {
                    Swal("Success", "Donation Created!", "success");
                });
        } else {
            Swal( "Oops" ,  "NIT lenght should be 14!" ,  "error" );
        }
    }

    return (
        <>
            <Button variant="btn btn-outline-success" onClick={initModal}>
                Añadir Donación
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Modificar Informacion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="donationDate" onChange={ handleInputChange } type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Donante</Form.Label>
                            <Form.Control name="donor" onChange={ handleInputChange } type='text' placeholder='Ingrese el donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control name="address" onChange={ handleInputChange } type='text' placeholder='Ingrese la dirección del donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nit - Dui</Form.Label>
                            <Form.Control name="nit" onChange={ handleInputChange } type='text' placeholder='Ingrese el tipo de donación'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control name="donationType" onChange={ handleInputChange } type='text' placeholder='Ingrese el tipo de donación'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control name="moneyQuantity" onChange={ handleInputChange } type='text' placeholder='Ingrese el total'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="dark" onClick={(e) => handleClick(e)}>
                        Crear
                    </Button>

                    <Button variant="danger" onClick={initModal}>
                        Cancelar
                    </Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

export default AddDonations;