import axios  from 'axios';

export const baseUrl = 'https://api.spoonacular.com/recipes/';
export const myApikey = `&apiKey=${process.env.REACT_APP_API_KEY}`;
export const allRecipes = `${baseUrl}complexSearch?diet=vegetarian&query=apple&addRecipeInformation=true&number=21&apiKey=${process.env.REACT_APP_API_KEY}`;

export const getRecipe = async () => {
    const getRecipe = await axios.get(allRecipes)
    .then(({ data }) => data);
    return getRecipe;
};
