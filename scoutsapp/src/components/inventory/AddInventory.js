import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';
import Axios from 'axios';

function AddInventory() {

    const [isShow, invokeModal] = useState(false);

    const [formValues, handleInputChange] = useForm({
        name: '',
        unit: '',
        existence: '',
        quantity: 0,
        cost: 0,
        sale_price: 0,
        family_id: ''
    });

    const {
        name,
        unit,
        existence,
        quantity,
        cost,
        sale_price,
        family_id
    } = formValues;

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/product';

        const config = {
            headers:{
                'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg5MDU1MjIsImV4cCI6MTY2ODkxMjcyMn0.Fy8KIssxQyUpC3xeq0OVYF_MRhb7zBi-RHLeOqmOq14'
            }
        };

        const body = {
            "name": name,
            "unit": unit,
            "existence": existence,
            "quantity": quantity,
            "cost": cost,
            "sale_price": sale_price,
            "family_id": family_id
        };

        Axios.post(url, body, config)
            .then(response => {
                Swal("Success", "Inventory Created!","success");
            });
    }

    return (
        <>
            <Button variant="btn btn-outline-success" onClick={initModal}>
                Añadir Inventario
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Modificar Informacion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>                        
                        <Form.Group className='mb-3'>
                            <Form.Label>Familia ID</Form.Label>
                            <Form.Control name="family_id" onChange={ handleInputChange } type='text' placeholder='Ingrese el ID de la familia'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" onChange={ handleInputChange } type='text' placeholder='Ingrese el nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Unidad</Form.Label>
                            <Form.Control name="unit" onChange={ handleInputChange } type='text' placeholder='Ingrese la unidad'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Existencia</Form.Label>
                            <Form.Control name="existence" onChange={ handleInputChange } type='text' placeholder='Ingrese el número de cuenta'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control name="quantity" onChange={ handleInputChange } type='text' placeholder='Ingrese la cantidad'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Costo</Form.Label>
                            <Form.Control name="cost" onChange={ handleInputChange } type='text' placeholder='Ingrese el costo'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control name="sale_price" onChange={ handleInputChange } type='text' placeholder='Ingrese el precio'></Form.Control>
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

export default AddInventory;