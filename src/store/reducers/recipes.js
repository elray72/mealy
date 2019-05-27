//import { combineReducers } from 'redux';
import { REQUEST_RECIPES, RECEIVE_RECIPES, FETCH_RECIPES } from '../actionTypes';

const initialState = {
	isFetching: false,
	didInvalidate: false,
	recipes: [],
};

export const recipes = (state = initialState, action) => {
	switch (action.type) {

		case REQUEST_RECIPES:
			return Object.assign({}, state, {
				isFetching: true,
				didInvalidate: false
			});

		case RECEIVE_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false
			});

		case FETCH_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				didInvalidate: false,
				recipes: action.recipes,
				lastUpdated: action.receivedAt
			});

		default:
			return state;
	}
};

export default recipes;

//
// import { ADD_RECIPE, REMOVE_RECIPE } from '../actionTypes';
//
// const recipes = (state, action) => {
// 	switch (action.type) {
// 		case ADD_RECIPE:
// 			return {
// 				...state,
// 				added: true,
// 			};
// 		case REMOVE_RECIPE:
// 			return {
// 				...state,
// 				added: false,
// 			};
// 		default:
// 			return state;
// 	}
// };
//
// export const getRecipes = (state) => {
// 	console.log(state);
// 	return state;
// };