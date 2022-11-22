import {Container} from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import '../../App.css'

import InventoryPagination from './InventoryPagination';

import Axios from 'axios';

const Inventory = () => {

    const [inventoryData, setInventoryData] = useState([]);

    useEffect(() => {

        const getInventory = async () => {
            const url = "http://localhost:4000/api/product/";

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
    }, []);

    return (
        <Container>
            <InventoryPagination data={inventoryData}/>
        </Container>
    );
};

export default Inventory;