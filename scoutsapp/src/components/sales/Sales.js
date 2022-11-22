import { Container } from 'react-bootstrap';
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css'

import SalesPagination from './SalesPagination';

import Axios from 'axios';

const Sales = () => {

    const [salesData, setSalesData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if(!userInfo)
            navigate('/login');

        const getSales = async () => {
            const url = "http://localhost:4000/api/billing/";

            const salesInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = salesInfo;

            const config = {
                headers:{
                    'x-token': token
                }
            };

            const {data} = await Axios.get(url, config);

            console.log(data);

            setSalesData(data.billings);
        }
        getSales();
    }, [navigate]);   

    return (
        <Container>
            <SalesPagination data={salesData}/>
        </Container>
    );
};

export default Sales;