import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Swal from 'sweetalert';
import Axios from 'axios';

function DeleteSales({ idSales }) {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleDelete = () => {

        const url = `http://localhost:4000/api/billing/${idSales}`;

        const salesInfo = JSON.parse(localStorage.getItem('userInfo'));
        const { token } = salesInfo;

        const config = {
            headers:{
                'x-token': token
            }
        };

        Axios.delete(url, config)
            .then(response => {
                Swal("Success", "Sale deleted!","success").then(() => {
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
                    <Modal.Title>Eliminar Venta</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar la venta?
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

export default DeleteSales;