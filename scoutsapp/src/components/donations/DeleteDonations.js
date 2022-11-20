import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';

import Swal from 'sweetalert';
import Axios from 'axios';

function DeleteDonations({ idDonation }) {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleDelete = () => {

        const url = `http://localhost:4000/api/donation/${idDonation}`;

        const config = {
            headers:{
                'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg5MDU1MjIsImV4cCI6MTY2ODkxMjcyMn0.Fy8KIssxQyUpC3xeq0OVYF_MRhb7zBi-RHLeOqmOq14'
            }
        };

        Axios.delete(url, config)
            .then(response => {
                Swal("Success", "Donations deleted!","success");
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
                    <Modal.Title>Eliminar Donación</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar el donación?
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

export default DeleteDonations;