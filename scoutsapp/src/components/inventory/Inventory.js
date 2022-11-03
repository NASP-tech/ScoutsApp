import { Button, Col, Container, Row, Table } from 'react-bootstrap';
import cub2 from '../imagenes/menu/cubo2.jpg';
import React, { useState } from "react";
import recipesData from "../recipes/data/dataRecipes";
import ModelTiming from "../recipes/modalTiming";

const Recipes = () => {

    const [model, setModel] = useState(false);
    const [tempData, setTempData] = useState([]);


    const getData = (nombre, img, desc) => {
        let tempData = [nombre, img, desc];
        setTempData(item => [1, ...tempData]);
        return setModel(true);
    }

    return (
        <Container fluid='lg'>
            <Row className="justify-content-center">
                <Col md={3} className="text-center text-md">
                    <img src={cub2} width='250px' height='150px' alt="..." />
                    <Button
                        variant='outline-warning'
                        size='sm'
                        href='Ingredients'>
                        Alimentos Cotidianos
                    </Button>
                    <Button
                        variant='danger'
                        size='sm'
                        href='/searchRecipe'>
                        Ingredientes de Nuestras Recetas
                    </Button>
                </Col>
            </Row>
            <Container fluid='lg'>
                <Row>
                    <Table>
                        <thead className="thead-dark">
                            <tr>
                                <th scope="col">Nombre</th>
                                <th className="col-4">Imagen</th>
                                <th className="col-7">Descripción</th>
                            </tr>
                        </thead>
                        {recipesData.cardRecipes.map((item, index) => {
                            return (

                                <tbody>
                                    <tr key={index}>
                                        <td> {item.nombre} </td>
                                        <td>
                                            <img src={item.img} alt="vegetarianos" class="img-thumbnail"
                                                width="70%" />
                                        </td>
                                        <td> {item.desc} </td>
                                    </tr>
                                </tbody>

                            )
                        })}
                    </Table>
                </Row>
            </Container>

            {
                model === true ? <ModelTiming img={tempData[1]} nombre={tempData[2]} desc={tempData[3]} hide={() => setModel(false)} /> : ''
            }
        </Container>
    );
};

export default Recipes;