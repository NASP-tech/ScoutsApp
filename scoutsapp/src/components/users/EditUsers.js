import { useState } from 'react';
import { Modal, Button, Form, Dropdown, DropdownButton } from 'react-bootstrap';
import moment from 'moment';
import Swal from 'sweetalert';
import Axios from 'axios';

function EditUsers({ idUsuario }) {

    const userInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = userInfo;

    const [isShow, invokeModal] = useState(false);
    const [role, setRole] = useState(3);
    const [name, setName] = useState('');
    const [dui, setDui] = useState('');
    const [hiringdate, setHiringDate] = useState(1);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = () => {
        
        if(dui.length === 9){

            const url = `http://localhost:4000/api/auth/${idUsuario}`;

            const config = {
                headers:{
                    'x-token': token
                }
            };

            const body = {
                "name": name,
                "dui": dui,
                "hiringdate": hiringdate,
                "role": role
            };

            Axios.put(url, body, config)
                .then(response => {
                    Swal("Success", "User Updated!","success").then(() => {
                        window.location.reload();
                    });
                }).catch(function (error) {
                    console.log(error.toJSON());
                    Swal( "Oops" ,  "Something went wrong" ,  "error" );
                });

        } else {
            Swal( "Oops" ,  "Dui should be length 9!" ,  "error" )
        }        
    }

    const handleSelect=(e)=>{
        setRole(e);
    }

    const handleName=(e)=>{
        setName(e.target.value);
    }

    const handleDui=(e)=>{
        setDui(e.target.value);
    }

    const handleHiringDate=(e)=>{
        setHiringDate(e.target.value);
    }

    const handleUpdateClick = async() => {
            const url = `http://localhost:4000/api/auth/getUser/${idUsuario}`;

            const config = {
                headers:{
                    'x-token': token
                }
            };

            const {data} = await Axios.get(url, config);

            const format2 = "YYYY-MM-DD";
            var dateE = new Date(data.user.hiringdate);
            var dateTimeE = moment(dateE).format(format2);

            setName(data.user.name);
            setDui(data.user.dui);
            setHiringDate(dateTimeE);
            setRole(data.user.role);

            initModal();
    }

    return (
        <>
            <Button variant="btn btn-warning" onClick={handleUpdateClick}>
                Modificar
            </Button>

            <Modal show={isShow}>
                <Modal.Header closeButton onClick={initModal}>
                    <Modal.Title>Modificar Informacion</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                    <Form>
                        <Form.Group className='mb-3'>
                            <Form.Label>DUI</Form.Label>
                            <Form.Control name="dui" value={dui} onChange={ handleDui } type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" value={name} onChange={ handleName } type='text' placeholder='Ingrese el Nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="hiringdate" value={hiringdate} onChange={ handleHiringDate } type='date' placeholder='Ingrese el Fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <td>
                                <DropdownButton 
                                    alignRight
                                    title="Rol"    
                                    onSelect={handleSelect} 
                                    value={role}                                                             
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

                    <Button variant="dark" onClick={handleClick}>
                        Modificar
                    </Button>

                    <Button variant="danger" onClick={initModal}>
                        Cerrar
                    </Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

export default EditUsers;