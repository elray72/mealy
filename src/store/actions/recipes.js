import recipes from '../../api/recipesApi';
import { GET_RECIPES } from '../actionTypes';



export const getRecipes = () => (dispatch) => {
	recipes.get((options) => {
		dispatch(getOption(options));
	});
};

export const getRecipes = (target) => ({
	type: GET_RECIPES,
	placeholder: target
});
