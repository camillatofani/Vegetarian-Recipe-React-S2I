/* ==== Containers & Component ==== */
import React, { useState, useEffect } from 'react';
import {
    Recipe,
}  from '../../components';
import {
    Container,
    Row,
} from 'react-bootstrap';
import { getRecipe } from '../../services/RecipesApi'

/* ==== Style ==== */
import css from './HomePageAPI.module.css';

const HomePageAPI = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect (() => {
        getRecipe()
		.then(data => data.results && setRecipes(data.results))
    }, []);

    return(
        <Container>
            <Row className={css.row}>
				<Recipe recipes={recipes} />
				{/* <p>{JSON.stringify(recipes)}</p> */}
            </Row>
        </Container>
    )
}

export default HomePageAPI;
