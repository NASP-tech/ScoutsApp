import { useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Swal from 'sweetalert';
import Axios from 'axios';

function DeleteUsers({ idUsuario }) {

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleDelete = () => {

        const url = `http://localhost:4000/api/auth/deleteUser/${idUsuario}`;

        const config = {
            headers:{
                'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg4MzI1NzQsImV4cCI6MTY2ODgzOTc3NH0.t6kjMLCbH3v6dsalPs3XQtZ53nEIAQt5TrLlgRwCFe8'
            }
        };

        Axios.delete(url, config)
            .then(response => {
                Swal("Success", "User deleted!","success");
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
                    <Modal.Title>Eliminar Usuario</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    ¿Realmente desea eliminar al usuario?
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

export default DeleteUsers;