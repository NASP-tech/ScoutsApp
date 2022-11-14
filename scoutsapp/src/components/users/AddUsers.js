import Axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form, Dropdown } from 'react-bootstrap';

function AddUsers() {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const url = 'http://localhost:4000/api/auth/new';
        const body = {
            "name": "Rene Cortez", 
            "dui": "486123597",
            "role": 3,
            "email": "rene12@gmail.com",
            "password": "renecortez",
            "hiringdate": 1
        };

        Axios.post(url, body)
             .then(response => {
                console.log(response);
             })
    }

    return (
        <>
            <Button variant="btn btn-outline-success" onClick={initModal}>
                Añadir Usuario
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Modificar Informacion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el ID'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>DUI</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el Nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Ingrese la Contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control type='password' placeholder='Ingrese la Contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type='date' placeholder='Ingrese el Fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <td>
                                <Dropdown className='justify-content-center'>
                                    <Dropdown.Toggle variant="success" id="dropdown-basic">
                                        Rol
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        <Dropdown.Item href="#/action-1">Administrador</Dropdown.Item>
                                        <Dropdown.Item href="#/action-2">Contador</Dropdown.Item>
                                        <Dropdown.Item href="#/action-3">Supervisor</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </td>

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

export default AddUsers;