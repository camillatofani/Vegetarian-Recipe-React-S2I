/* ==== Containers & Component ==== */
import React, { useState, useEffect } from 'react';
import {
    Recipe,
}  from '../../components';
import {
    Container,
    Row,
    Col,
    Form,
    Button,
} from 'react-bootstrap';
import axios from 'axios';

/* ==== Style ==== */
import css from './HomePage.module.css';

function HomePage() {

    const [recipes, setRecipes] = useState([]);
    const [name, setName] = useState([]);
    const [nameFromButtonClick, setNameFromButtonClick] = useState([]);

    const handleClick = () => {
        setNameFromButtonClick(name)
    }

    useEffect(() => {
        axios
        .get(`https://api.spoonacular.com/recipes/complexSearch?diet=vegetarian&query=${nameFromButtonClick}&addRecipeInformation=true&number=21&apiKey=${process.env.REACT_APP_API_KEY}`)
        .then(res => {
            console.log(res)
            setRecipes(res.data.results)
        })
        .catch(err => {
            console.log(err)
        })
    }, [nameFromButtonClick]);

    return(
        <Container className={css.formSearch}>
            <Row className="justify-content-md-center">
                <Col md={12} className="text-center">
                    <h3>Dinner scheduled?</h3>
                    <p>Search in the form your preferit ingredient!</p>
                </Col>
                <Col md={4} xs={12}>
                    <Form.Control type="text" value={name} onChange={e => setName(e.target.value)} />
                </Col>
            </Row>
            <Row className={css.buttonSearch}>
                <Col md={4} xs={12}>
                    <div className="d-grid gap-2">
                        <Button variant="success" onClick={handleClick}>Cerca</Button>
                    </div>
                </Col>
            </Row>
            <Row>
                <Recipe className={css.formSearch} recipes={recipes} />
            </Row>
        </Container>
    )
}

export default HomePage;
