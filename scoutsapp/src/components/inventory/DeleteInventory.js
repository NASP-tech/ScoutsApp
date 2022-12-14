import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Swal from 'sweetalert';
import Axios from 'axios';

function DeleteInventory({ idInventory }) {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleDelete = () => {

        const url = `https://scouts-app-64ig4.ondigitalocean.app/api/product/${idInventory}`;

        const inventoryInfo = JSON.parse(localStorage.getItem('userInfo'));
        const { token } = inventoryInfo;

        const config = {
            headers:{
                'x-token': token
            }
        };

        Axios.delete(url, config)
            .then(response => {
                Swal("Success", "Inventory deleted!","success").then(() => {
                    window.location.reload();
                });
            }).catch(function (error) {
                console.log(error.toJSON());
                Swal( "Oops" ,  "Something went wrong" ,  "error" );
            });

    }

    return (
        <>
            <Button variant="btn btn-danger" onClick={initModal}>
                Eliminar
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Eliminar Inventario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar el inventario?
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="danger" onClick={handleDelete}>
                        Eliminar
                    </Button>
                </Modal.Footer>

            </Modal>

        </>
    );
}

export default DeleteInventory;