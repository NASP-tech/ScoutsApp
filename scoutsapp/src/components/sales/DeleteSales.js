import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

function DeleteSales() {

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
                    <Modal.Title>Eliminar Venta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar la venta?
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

export default DeleteSales;