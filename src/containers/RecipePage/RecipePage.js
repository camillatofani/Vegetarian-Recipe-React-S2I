/* ==== Containers & Component ==== */
import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {
    Container,
    Row,
    Col,
} from 'react-bootstrap';
import {
    LeftRecipe,
    RightRecipe,
}  from '../../components';

/* ==== Style ==== */
import css from './RecipePage.module.css';

function RecipePage() {

    let location = useLocation();
    console.log(location.pathname);
    const recipeId = location.pathname;

    const [single, setSingle] = useState([]);

    useEffect(() => {
        axios
        .get(`https://api.spoonacular.com${recipeId}/information?includeNutrition=true&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            console.log(res)
            setSingle(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, []);

    return (
        <Container className={css.containerRecipe}>
            <Row className={css.titleRecipe}>
                <Col md={12}><h2>{single.title}</h2></Col>
            </Row>
            <Row>
                <Col md={4}>
                    <LeftRecipe single={single} />
                </Col>
                <Col>
                    <RightRecipe single={single} />
                </Col>
            </Row>
        </Container>
    )
}

export default RecipePage;
