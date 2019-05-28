import { combineReducers } from 'redux';
import { REQUEST_RECIPES, RECEIVE_RECIPES, FETCH_RECIPES } from '../actionTypes';

const initialState = {
	isFetching: false,
	success: false,
	items: [],
};

export const recipes = (state = initialState, action) => {
	switch (action.type) {

		case REQUEST_RECIPES:
			return Object.assign({}, state, {
				isFetching: true,
				success: false
			});

		case RECEIVE_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				success: true
			});

		case FETCH_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.recipes,
				lastUpdated: action.receivedAt
			});

		default:
			return state;
	}
};

export const recipes2 = (state = initialState, action) => {
	switch (action.type) {

		case REQUEST_RECIPES:
			return Object.assign({}, state, {
				isFetching: true,
				success: false
			});

		case RECEIVE_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				success: true
			});

		case FETCH_RECIPES:
			return Object.assign({}, state, {
				isFetching: false,
				items: action.recipes,
				lastUpdated: action.receivedAt
			});

		default:
			return state;
	}
};

export default combineReducers({
	recipes,
	recipes2
});
