import { combineReducers } from 'redux';
import { REQUEST_RECIPES, RECEIVE_RECIPES, TOGGLE_VIEW} from '../actionTypes';
import {VIEWS} from "../constants";

const initialState = {
	Dashboard: {
		Left: VIEWS.RecipePicker,
		Right: VIEWS.ShoppingList,
	},
};

export const recipes = (state = initialState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case TOGGLE_VIEW:
			return newState;

		default:
			return state;
	}
};


const recipes = (state, action) => {
	switch (action.type) {
		case ADD_RECIPE:
			return {
				...state,
				added: true,
			};
		case REMOVE_RECIPE:
			return {
				...state,
				added: false,
			};
		default:
			return state;
	}
};



//
// import { ADD_RECIPE, REMOVE_RECIPE } from '../actionTypes';
//

//
// export const getRecipes = (state) => {
// 	console.log(state);
// 	return state;
// };