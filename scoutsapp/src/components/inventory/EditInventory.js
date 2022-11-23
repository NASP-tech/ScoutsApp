import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import Swal from 'sweetalert';
import Axios from 'axios';

function EditInventory({ idInventory }) {

    const inventoryInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = inventoryInfo;

    const [isShow, invokeModal] = useState(false);

    const [name, setName] = useState('');
    const [unit, setUnit] = useState('');
    const [existence, setExistence] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [cost, setCost] = useState(0);
    const [sale_price, setSalePrice] = useState(0);
    const [family_id, setFamilyID] = useState('');

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = () => {

        const url = `https://scouts-app-64ig4.ondigitalocean.app/api/product/${idInventory}`;

        const config = {
            headers: {
                'x-token': token
            }
        };

        const body = {
            "name": name,
            "unit": unit,
            "existence": existence,
            "quantity": quantity,
            "cost": cost,
            "sale_price": sale_price,
            "family_id": family_id
        };

        Axios.put(url, body, config)
            .then(response => {
                Swal("Success", "Inventory Updated!", "success").then(() => {
                    window.location.reload();
                });
            }).catch(function (error) {
                console.log(error.toJSON());
                Swal("Oops", "Something went wrong", "error");
            });
    }

    const handleName = (e) => {
        setName(e.target.value);
    }

    const handleUnit = (e) => {
        setUnit(e.target.value);
    }

    const handleExistence = (e) => {
        setExistence(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleCost = (e) => {
        setCost(e.target.value);
    }

    const handlePrice = (e) => {
        setSalePrice(e.target.value);
    }

    const handleUpdateClick = async () => {
        const url = `https://scouts-app-64ig4.ondigitalocean.app/api/product/getProduct/${idInventory}`;

        const config = {
            headers: {
                'x-token': token
            }
        };

        const { data } = await Axios.get(url, config);

        setName(data.product.name);
        setUnit(data.product.unit);
        setExistence(data.product.existence);
        setQuantity(data.product.quantity);
        setCost(data.product.cost);
        setSalePrice(data.product.sale_price);
        setFamilyID(data.product.family_id);

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
                            <Form.Label>Nombre</Form.Label>
                            <Form.Control name="name" value={name} onChange={handleName} type='text' placeholder='Ingrese el nombre'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Unidad</Form.Label>
                            <Form.Control name="unit" value={unit} onChange={handleUnit} type='text' placeholder='Ingrese la unidad'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Existencia</Form.Label>
                            <Form.Control name="existence" value={existence} onChange={handleExistence} type='text' placeholder='Ingrese la existencia'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control name="quantity" value={quantity} onChange={handleQuantity} type='text' placeholder='Ingrese la cantidad'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Costo</Form.Label>
                            <Form.Control name="cost" value={cost} onChange={handleCost} type='text' placeholder='Ingrese el costo'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Precio</Form.Label>
                            <Form.Control name="sale_price" value={sale_price} onChange={handlePrice} type='text' placeholder='Ingrese el precio'></Form.Control>
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

export default EditInventory;