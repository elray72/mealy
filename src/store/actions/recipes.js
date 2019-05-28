import recipes from '../../api/recipesApi';
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actionTypes';

const requestRecipes = () => ({
	type: REQUEST_RECIPES,
});

const receiveRecipes = (json) => ({
	type: RECEIVE_RECIPES,
	recipes: json,
	receivedAt: Date.now()
});

export const fetchRecipes = () => (dispatch) => {
	console.log('fetchRecipes');
	dispatch(requestRecipes());
	recipes.getRecipes((json) => {
		console.log(json);
		dispatch(receiveRecipes(json));
	});
};
