import {Container} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css'

import DonationsPagination from './DonationsPagination';

import Axios from 'axios';

const Donations = () => {
    
    const [donationsData, setDonationsData] = useState([]);
    const navigate = useNavigate();
    
    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if(!userInfo)
            navigate('/login');

        const getDonations = async () =>{
            const url = "https://scouts-app-64ig4.ondigitalocean.app/api/donation/";

            const donationInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = donationInfo;

            const config = {
                headers:{
                    'x-token': token
                }
            };

            const {data} = await Axios.get(url, config);

            setDonationsData(data.donations); 
        }
        getDonations();
    }, [navigate]);

    return (
        <Container>
            <DonationsPagination data={donationsData}/>
        </Container>
    );
};

export default Donations;