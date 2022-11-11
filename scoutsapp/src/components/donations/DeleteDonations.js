import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteDonations() {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    return (
        <>
            <Button variant="btn btn-danger" onClick={initModal}>
                Eliminar
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Eliminar Donación</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar el donación?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={initModal}>
                        Eliminar
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    );
}

export default DeleteDonations;