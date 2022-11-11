import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

function AddDonations() {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
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
                            <Form.Label>ID</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el ID'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Donante</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese la dirección del donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el tipo de donación'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Concepto</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el concepto'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Costo</Form.Label>
                            <Form.Control type='text' placeholder='Ingrese el costo'></Form.Control>
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

export default AddDonations;