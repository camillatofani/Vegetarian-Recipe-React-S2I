/* ==== Containers & Component ==== */
import {
    Alert,
} from 'react-bootstrap';

/* ==== Props ==== */
import PropTypes from 'prop-types';

/* ==== Style ==== */
import css from './RightRecipe.module.css';

const RightRecipe = props => {
	const { single } = props;
  return (
	<>
	<Alert variant='warning' role='alert'>Ready in {single.readyInMinutes} minuts</Alert>
	<hr />
	<Alert variant='secondary' className={css.alertRecipe}>
	<div dangerouslySetInnerHTML={{ __html: single.summary }} />
	</Alert>
	<hr/>
	<h4>Instruction:</h4>
	<div dangerouslySetInnerHTML={{ __html: single.instructions }} />
	<hr/>
	<Alert variant='success' role='alert'>
		<h4>Spooncular Score: {single.spoonacularScore}%</h4>
		<em><p>The <b>spoonacular score compares your recipe with all the other recipes on the site</b>. Score 100% and you\'ve achieved total recipe domination. Score 0% and you\'ve managed to upload one of the worst recipes on the site (we still love you).</p>
		<p>Our <b>top-secret formula</b> takes into consideration price (the cheaper the better!), difficulty (the easier the better!), popularity (# of Facebook likes, Pinterest pins, spoonacular saves...), and the health score.</p>
		<p>If you want to <b>improve your score</b>, use affordable ingredients, avoid long and exotic ingredient lists, get your friends to like/share/save your recipes, and pump up the vitamins while cutting down on sodium. See? Easy as pie.</p></em>
	</Alert>
	</>
  );
}

RightRecipe.defaultProps = {
    single: null,
};

const { array } = PropTypes;

RightRecipe.propTypes = {
    single: array,
};

export default RightRecipe;
