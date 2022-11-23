import { Container } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';
import '../../App.css'

import UserPagination from './UserPagination';

import Axios from 'axios';

const Users = () => {

    const [usersData, setUsersData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        const userInfo = JSON.parse(localStorage.getItem('userInfo'));

        if(!userInfo)
            navigate('/login');

        const getUsers = async () => {
            const url = "https://scouts-app-64ig4.ondigitalocean.app/api/auth/";

            const { token } = userInfo;

            const config = {
                headers: {
                    'x-token': token
                }
            };

            const { data } = await Axios.get(url, config);

            setUsersData(data.users);
        }
        getUsers();
    }, [navigate]);

    return (
        <Container>
            <UserPagination data={usersData}/>
        </Container>
    );
};

export default Users;