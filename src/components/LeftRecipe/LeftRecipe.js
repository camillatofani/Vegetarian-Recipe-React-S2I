/* ==== Containers & Component ==== */
import {
    Button,
} from 'react-bootstrap';

/* ==== Props ==== */
import PropTypes from 'prop-types';

/* ==== Style ==== */
import css from './LeftRecipe.module.css';

const LeftRecipe = props => {
	const { single } = props;
  return (
	  <>
		<img className={css.imgRecipe} src={single.image} alt={single.title} />
		<hr/>
		<h5>Important things to know:</h5>
		<p>{ single.glutenFree == true ? <div className={css.glutenRecipe}>GLUTEN FREE</div> : false }</p>
		<p>{ single.vegan == true ? 'VEGAN' : false }</p>
		<p>{ single.dairyFree == true ? 'DAIRY FREE' : false }</p>
		<p>{ single.veryHealthy == true ? 'VERY HEALTY' : false }</p>
		<p>{ single.cheap == true ? 'CHEAP' : false }</p>
		<p>{ single.veryPopular == true ? 'VERY POPULAR' : false }</p>
		<p>{ single.sustainable == true ? 'SUSTAINABLE' : false }</p>
		<p className={css.buttonRecipeSource}><a href={single.sourceUrl} target='_blank'><Button variant="outline-success">Source of recipe</Button></a></p>
	</>
  );
}

LeftRecipe.defaultProps = {
    single: null,
};

const { array } = PropTypes;

LeftRecipe.propTypes = {
    single: array,
};

export default LeftRecipe;
