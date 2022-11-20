import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import moment from 'moment';
import Swal from 'sweetalert';
import Axios from 'axios';

function EditSales({ idSales }) {

    const [isShow, invokeModal] = useState(false);

    const [exempt_sales, setExemptSales] = useState(0);
    const [unitPrice, setUnitPrice] = useState(0);
    const [client, setClient] = useState('');
    const [address, setAddress] = useState('');
    const [date, setDate] = useState(1);
    const [account_name, setAccountName] = useState('');
    const [dui_nit, setDuiNit] = useState('');
    const [quantity, setQuantity] = useState(0);
    const [description, setDescription] = useState('');
    const [recorded_sale, setRecordedSale] = useState(0);
    const [total_cost, setTotalCost] = useState(0);
    const [reciever_name, setRecieverName] = useState('');
    const [foreign_passport_residency, setForeign_passport_residency] = useState('');
    const [foreign_name, setForeign_name] = useState('');
    const [reciever_dui, setRecieverDui] = useState('');

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = () => {
        
        if(dui_nit.length === 9){

            const url = `http://localhost:4000/api/billing/${idSales}`;

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg5MDU1MjIsImV4cCI6MTY2ODkxMjcyMn0.Fy8KIssxQyUpC3xeq0OVYF_MRhb7zBi-RHLeOqmOq14'
                }
            };

            const body = {
                "exempt_sales": exempt_sales,
                "unitPrice" : unitPrice,
                "client" : client,
                "address" : address,
                "date" : date,
                "account_name" : account_name,
                "dui_nit" : dui_nit,
                "quantity" : quantity,
                "description" : description,
                "recorded_sale" : recorded_sale,
                "total_cost" : total_cost,
                "reciever_name" : reciever_name,
                "foreign_passport_residency" : foreign_passport_residency,
                "foreign_name" : foreign_name,
                "reciever_dui" : reciever_dui                
            };

            Axios.put(url, body, config)
                .then(response => {
                    Swal("Success", "Sale Updated!","success");
                }).catch(function (error) {
                    console.log(error.toJSON());
                    Swal( "Oops" ,  "Something went wrong" ,  "error" );
                });

        } else {
            Swal( "Oops" ,  "Dui should be length 9!" ,  "error" )
        }        
    }

    const handleExemptSales = (e) => {
        setExemptSales(e.target.value);
    }

    const handleUnitPrice = (e) => {
        setUnitPrice(e.target.value);
    }

    const handleClient = (e) => {
        setClient(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleDate = (e) => {
        setDate(e.target.value);
    }

    const handleAccountName = (e) => {
        setAccountName(e.target.value);
    }

    const handleDUI = (e) => {
        setDuiNit(e.target.value);
    }

    const handleQuantity = (e) => {
        setQuantity(e.target.value);
    }

    const handleDescription = (e) => {
        setDescription(e.target.value);
    }

    const handleRecordedSales = (e) => {
        setRecordedSale(e.target.value);
    }

    const handleTotalCost = (e) => {
        setTotalCost(e.target.value);
    }

    const handleRecieverName = (e) => {
        setRecieverName(e.target.value);
    }

    const handleForeignPass = (e) => {
        setForeign_passport_residency(e.target.value);
    }

    const handleForeignName = (e) => {
        setForeign_name(e.target.value);
    }

    const handleRecieverDui = (e) => {
        setRecieverDui(e.target.value);
    }


    const handleUpdateClick = async() => {
        const url = `http://localhost:4000/api/billing/getBilling/${idSales}`;

            const config = {
                headers:{
                    'x-token': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiI2MzcyYTc3NTQwM2U4YzNmNzNlMjM2ZmMiLCJuYW1lIjoiTmF0YWxpYSBTb2xvcnphbm8iLCJpYXQiOjE2Njg5MDU1MjIsImV4cCI6MTY2ODkxMjcyMn0.Fy8KIssxQyUpC3xeq0OVYF_MRhb7zBi-RHLeOqmOq14'
                }
            };

            const {data} = await Axios.get(url, config);
            
            const format2 = "YYYY-MM-DD";
            var dateE = new Date(data.billing.date);
            var dateTimeE = moment(dateE).format(format2);

            setExemptSales(data.billing.exempt_sales);
            setUnitPrice(data.billing.unitPrice);
            setClient(data.billing.client);
            setAddress(data.billing.address);
            setDate(dateTimeE);
            setAccountName(data.billing.account_name);
            setDuiNit(data.billing.dui_nit);
            setQuantity(data.billing.quantity);
            setDescription(data.billing.description);
            setRecordedSale(data.billing.recorded_sale);
            setTotalCost(data.billing.total_cost);
            setRecieverName(data.billing.reciever_name);
            setForeign_passport_residency(data.billing.foreign_passport_residency);
            setForeign_name(data.billing.foreign_name);
            setRecieverDui(data.billing.reciever_dui);

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
                            <Form.Label>Cliente</Form.Label>
                            <Form.Control name="client" value={client} onChange={handleClient} type='text' placeholder='Ingrese el cliente'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control name="address" value={address} onChange={handleAddress} type='text' placeholder='Ingrese el dirección'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="date" value={date} onChange={handleDate} type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cuenta</Form.Label>
                            <Form.Control name="account_name" value={account_name} onChange={handleAccountName} type='text' placeholder='Ingrese el número de cuenta'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>DUI</Form.Label>
                            <Form.Control name="dui_nit" value={dui_nit} onChange={handleDUI} type='text' placeholder='Ingrese el DUI'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Cantidad</Form.Label>
                            <Form.Control name="quantity" value={quantity} onChange={handleQuantity} type='text' placeholder='Ingrese la cantidad de productos'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Descripción</Form.Label>
                            <Form.Control name="description" value={description} onChange={handleDescription} type='text' placeholder='Ingrese la descripción'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control name="total_cost" value={total_cost} onChange={handleTotalCost} type='text' placeholder='Ingrese el total'></Form.Control>
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

export default EditSales;