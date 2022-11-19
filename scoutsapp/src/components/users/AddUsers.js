import Axios from 'axios';
import { useState } from 'react';
import { Modal, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import { useForm } from '../../hooks/useForm';
import Swal from 'sweetalert';

function AddUsers() {

    const [role, setRole] = useState(3);

    const [ formValues, handleInputChange ] = useForm({
        name: '',
        dui: '',
        email: '',
        password: '',
        hiringdate: 1
    });

    const { dui, name, email, password, confirmPassword, hiringdate } = formValues;

    const [isShow, invokeModal] = useState(false);

    const initModal = () => {
        return invokeModal(!isShow); 
    }

    const handleClick = (e) => { 
        e.preventDefault();
        const url = 'http://localhost:4000/api/auth/new';

        if(password === confirmPassword){

        const body = {
            "name": name,
            "dui": dui,
            "role": role,
            "email": email, 
            "password": password,
            "hiringdate": hiringdate
        };

        Axios.post(url, body)
            .then(response => {
                Swal("Success", "User Created!","success");
            });

        } else {
            Swal( "Oops" ,  "Passwords does not match!" ,  "error" )
        }
    }

    const handleSelect=(e)=>{
        setRole(e);
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
                            <Form.Label>DUI</Form.Label>
                            <Form.Control name="dui" onChange={ handleInputChange } type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" onChange={ handleInputChange } type='text' placeholder='Ingrese el Nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Correo</Form.Label>
                            <Form.Control name="email" onChange={ handleInputChange } type='text' placeholder='Ingrese el Nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Contraseña</Form.Label>
                            <Form.Control name="password" onChange={ handleInputChange } type='password' placeholder='Ingrese la Contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Confirmar Contraseña</Form.Label>
                            <Form.Control name="confirmPassword" onChange={ handleInputChange } type='password' placeholder='Ingrese la Contraseña'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="hiringdate" onChange={ handleInputChange } type='date' placeholder='Ingrese el Fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <td>
                                <DropdownButton 
                                    alignRight
                                    title="Rol"    
                                    onSelect={handleSelect}                                                              
                                    >                                

                                    <Dropdown.Menu >
                                        <Dropdown.Item eventKey="1" href="#/action-1">Administrador</Dropdown.Item>
                                        <Dropdown.Item eventKey="2" href="#/action-2">Contador</Dropdown.Item>
                                        <Dropdown.Item eventKey="3" href="#/action-3">Supervisor</Dropdown.Item>
                                    </Dropdown.Menu>
                                </DropdownButton>
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