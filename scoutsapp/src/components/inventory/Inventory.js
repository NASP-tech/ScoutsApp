import {Container} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css'

import InventoryPagination from './InventoryPagination';

import Axios from 'axios';

const Inventory = () => {

    const [inventoryData, setInventoryData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if(!userInfo)
            navigate('/login');

        const getInventory = async () => {
            const url = "https://scouts-app-64ig4.ondigitalocean.app/api/product/";

            const inventoryInfo = JSON.parse(localStorage.getItem('userInfo'));
            const { token } = inventoryInfo;

            const config = {
                headers: {
                    'x-token': token
                }
            };

            const { data } = await Axios.get(url, config);

            setInventoryData(data.products);
        }
        getInventory();
    }, [navigate]);

    return (
        <Container>
            <InventoryPagination data={inventoryData}/>
        </Container>
    );
};

export default Inventory;