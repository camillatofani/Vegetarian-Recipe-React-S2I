/* ==== Containers & Component ==== */
import { Cards } from "../../components";
import PropTypes from 'prop-types';

const Recipe = props => {
    const { recipes } = props;
    return(
        <Cards recipes={recipes} />
    )
}

Recipe.defaultProps = {
    recipes: null,
};

const { array } = PropTypes;

Recipe.propTypes = {
    recipes: array,
};

export default Recipe;