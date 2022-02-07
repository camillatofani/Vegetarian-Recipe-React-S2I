/* ==== Containers & Component ==== */
import {
    Col,
    Card,
    Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';

/* ==== Style ==== */
import css from './Cards.module.css';

/* ==== Props ==== */
import PropTypes from 'prop-types';

const Cards = props => {
    const { recipes } = props;
    return(
        <div>
            { recipes.map((item) =>
                <Col md="4" className={ css.component } key={ item.id }>
                    <Card>
                        <Card.Img variant="top" src={ item.image } />
                        <Card.Body>
                            <Card.Title>{ item.title }</Card.Title>
                                { item.glutenFree == true ?
                                <div className={css.gluten}>GLUTEN FREE</div> :
                                <div className={css.noGluten}>NO GLUTEN FREE</div> }
                            <Link to={{
                                pathname: `/recipes/${ item.id }`
                            }}>
                                <Button variant="success">Go to the recipe</Button>
                            </Link>
                        </Card.Body>
                    </Card>
                </Col>
            ) }
        </div>
    );
}

Cards.defaultProps = {
    recipe: null,
};

const { array } = PropTypes;

Cards.propTypes = {
    recipe: array,
};

export default Cards;
