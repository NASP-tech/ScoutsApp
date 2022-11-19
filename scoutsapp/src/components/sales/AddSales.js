import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';
import Axios from 'axios';

function AddSales() {

    const [isShow, invokeModal] = useState(false);

    const [formValues, handleInputChange] = useForm({
        exempt_sales: 0,
        unitPrice: 0,
        client: '',
        address: '',
        date: 1,
        account_name: '',
        dui_nit: '',
        quantity: 0,
        description: '',
        recorded_sale: 0,
        total_cost: 0,
        reciever_name: '',
        foreign_passport_residency: '',
        foreign_name: '',
        reciever_dui: '',
    });

    const {
        unitPrice,
        client,
        address,
        date,
        account_name,
        dui_nit,
        quantity,
        description,
        reciever_name,
        reciever_dui
    } = formValues;

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/billing';

        const config = {
            headers:{
                'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg4MzI1NzQsImV4cCI6MTY2ODgzOTc3NH0.t6kjMLCbH3v6dsalPs3XQtZ53nEIAQt5TrLlgRwCFe8'
            }
        };

        const body = {
            "exempt_sales": 0,
            "unitPrice": unitPrice,
            "client": client,
            "address": address,
            "date": date,
            "account_name": account_name,
            "dui_nit": dui_nit,
            "quantity": quantity,
            "description": description,
            "recorded_sales": 0,
            "total_cost": quantity*unitPrice,
            "reciever_name": reciever_name,
            "reciever_dui": reciever_dui
        };

        Axios.post(url, body, config)
            .then(response => {
                Swal("Success", "Sale Created!","success");
            });
    }

    return (
        <>
            <Button variant="btn btn-outline-success" onClick={initModal}>
                Añadir Venta
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Modificar Informacion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control name="client" onChange={ handleInputChange } type='text' placeholder='Ingrese el cliente'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control name="address" onChange={ handleInputChange } type='text' placeholder='Ingrese el dirección'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="date" onChange={ handleInputChange } type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cuenta</Form.Label>
                            <Form.Control name="account_name" onChange={ handleInputChange } type='text' placeholder='Ingrese el nombre de cuenta'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>DUI</Form.Label>
                            <Form.Control name="dui_nit" onChange={ handleInputChange } type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control name="quantity" onChange={ handleInputChange } type='text' placeholder='Ingrese la cantidad de productos'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Precio Unitario</Form.Label>
                            <Form.Control name="unitPrice" onChange={ handleInputChange } type='text' placeholder='Ingrese el precio unitario'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control name="description" onChange={ handleInputChange } type='text' placeholder='Ingrese la descripción'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Receptor</Form.Label>
                            <Form.Control name="reciever_name" onChange={ handleInputChange } type='text' placeholder='Ingrese el nombre del receptor'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control name="total_cost" onChange={ handleInputChange } type='text' placeholder='Ingrese el total'></Form.Control>
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

export default AddSales;