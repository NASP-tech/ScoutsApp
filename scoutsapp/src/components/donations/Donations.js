import {Container} from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import '../../App.css'

import DonationsPagination from './DonationsPagination';

import Axios from 'axios';

const Donations = () => {
    
    const [donationsData, setDonationsData] = useState([]);
    
    useEffect(() => {

        const getDonations = async () =>{
            const url = "http://localhost:4000/api/donation/";

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
    }, []);

    return (
        <Container>
            <DonationsPagination data={donationsData}/>
        </Container>
    );
};

export default Donations;