import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';

function AddSales() {

    const [isShow, invokeModal] = useState(false);

    const [ formValues, handleInputChange] = useForm({
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
        exempt_sales, 
        unitPrice, 
        client, 
        address, 
        date, 
        account_name, 
        dui_nit, 
        quantity,
        description,
        recorded_sale, 
        total_cost, 
        reciever_name,
        foreign_passport_residency,
        foreign_name,
        reciever_dui
    } = formValues;

    const initModal = () => {
        return invokeModal(!isShow);
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
                            <Form.Control type='text' placeholder='Ingrese el cliente'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el dirección'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cuenta</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el número de cuenta'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>DUI</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese la cantidad de productos'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese la descripción'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el total'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="dark" onClick={initModal}>
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