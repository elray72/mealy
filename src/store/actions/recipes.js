import recipes from '../../api/recipesApi';
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actionTypes';

const requestRecipes = () => ({
	type: REQUEST_RECIPES,
});

const receiveRecipes = (json) => ({
	type: REQUEST_RECIPES,
	recipes: json,
	receivedAt: Date.now()
});

export const fetchRecipes = () => (dispatch) => {
	dispatch(requestRecipes());
	recipes.getRecipes((json) => {
		dispatch(receiveRecipes(json));
	});
};
