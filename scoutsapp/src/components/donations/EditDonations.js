import { useState } from 'react';
import { Modal, Button, Form } from 'react-bootstrap';

import moment from 'moment';
import Swal from 'sweetalert';
import Axios from 'axios';

function EditDonations({ idDonation }) {

    const donationInfo = JSON.parse(localStorage.getItem('userInfo'));
    const { token } = donationInfo;

    const [isShow, invokeModal] = useState(false);
    const [donationDate, setDonationDate] = useState(1);
    const [donor, setDonor] = useState('');
    const [nit, setNit] = useState('');
    const [address, setAddress] = useState('');
    const [donationType, setDonationType] = useState('');
    const [moneyQuantity, setMoneyQuantity] = useState(0);

    const initModal = () => {
        return invokeModal(!isShow);
    }

    const handleClick = () => {

        if (nit.length === 14) {
            const url = `http://localhost:4000/api/donation/${idDonation}`;

            const config = {
                headers: {
                    'x-token': token
                }
            };

            const body = {
                "donationDate": donationDate,
                "donor": donor,
                "nit": nit,
                "address": address,
                "donationType": donationType,
                "moneyQuantity": moneyQuantity
            };

            Axios.put(url, body, config)
                .then(response => {
                    Swal("Success", "Donations Updated!", "success").then(() => {
                        window.location.reload();
                    });
                }).catch(function (error) {
                    console.log(error.toJSON());
                    Swal("Oops", "Something went wrong", "error");
                });

        } else {
            Swal("Oops", "Dui should be length 14!", "error")
        }
    }

    const handleDate = (e) => {
        setDonationDate(e.target.value);
    }

    const handleDonor = (e) => {
        setDonor(e.target.value);
    }

    const handleNit = (e) => {
        setNit(e.target.value);
    }

    const handleAddress = (e) => {
        setAddress(e.target.value);
    }

    const handleType = (e) => {
        setDonationType(e.target.value);
    }

    const handleQuantity = (e) => {
        setMoneyQuantity(e.target.value);
    }

    const handleUpdateClick = async () => {
        const url = `http://localhost:4000/api/donation/getDonation/${idDonation}`;

        const config = {
            headers: {
                'x-token': token
            }
        };

        const { data } = await Axios.get(url, config);

        const format2 = "YYYY-MM-DD";
        var dateE = new Date(data.donation.donationDate);
        var dateTimeE = moment(dateE).format(format2);

        setDonationDate(dateTimeE);
        setDonor(data.donation.donor);
        setNit(data.donation.nit);
        setAddress(data.donation.address);
        setDonationType(data.donation.donationType);
        setMoneyQuantity(data.donation.moneyQuantity);

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
                            <Form.Label>Fecha</Form.Label>
                            <Form.Control name="donationDate" value={donationDate} onChange={handleDate} type='date' placeholder='Ingrese la fecha'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Donante</Form.Label>
                            <Form.Control name="donor" value={donor} onChange={handleDonor} type='text' placeholder='Ingrese el donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>NIT</Form.Label>
                            <Form.Control name="nit" value={nit} onChange={handleNit} type='text' placeholder='Ingrese el NIT'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Dirección</Form.Label>
                            <Form.Control name="address" value={address} onChange={handleAddress} type='text' placeholder='Ingrese la dirección del donante'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Tipo</Form.Label>
                            <Form.Control name="donationType" value={donationType} onChange={handleType} type='text' placeholder='Ingrese el tipo de donación'></Form.Control>
                        </Form.Group>
                        <Form.Group className='mb-3'>
                            <Form.Label>Total</Form.Label>
                            <Form.Control name="moneyQuantity" value={moneyQuantity} onChange={handleQuantity} type='text' placeholder='Ingrese el total'></Form.Control>
                        </Form.Group>
                    </Form>
                </Modal.Body>

                <Modal.Footer>

                    <Button variant="dark" onClick={handleClick}>
                        Modificar
                    </Button>

                    <Button variant="danger" onClick={handleClick}>
                        Cerrar
                    </Button>

                </Modal.Footer>

            </Modal>

        </>
    );
}

export default EditDonations;