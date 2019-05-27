import { combineReducers } from 'redux';
import { REQUEST_RECIPES, RECEIVE_RECIPES } from '../actionTypes';






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