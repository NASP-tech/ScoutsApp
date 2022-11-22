import { Col, Container, Row, Table } from 'react-bootstrap';
import React, { useEffect, useState } from "react";
import '../../App.css'

import UserPagination from './UserPagination';

import Axios from 'axios';

const Users = () => {

    const [usersData, setUsersData] = useState([]);

    useEffect(() => {

        const getUsers = async () => {
            const url = "http://localhost:4000/api/auth/";

            const userInfo = JSON.parse(localStorage.getItem('userInfo'));
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
    }, []);

    return (
        <Container>
            <UserPagination data={usersData}/>
        </Container>
    );
};

export default Users;