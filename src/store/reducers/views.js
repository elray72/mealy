import { TOGGLE_VIEW } from '../actionTypes';
import { VIEWS } from '../constants';

const initialState = {
	Dashboard: {
		Left: VIEWS.RecipePicker,
		Right: VIEWS.ShoppingList,
	},
};

const mapPlaceholderToView = (placeholder) => {
	const p = placeholder.split('.');
	return {
		page: p[0],
		section: p[1],
		view: p[2],
	}
};

export const views = (state = initialState, action) => {
	let newState = { ...state };

	switch (action.type) {
		case TOGGLE_VIEW:
			const { page, section, view } = mapPlaceholderToView(action.placeholder);
			newState[page][section] = view;
			return newState;

		default:
			return state;
	}
};

export const isViewVisible = (state = initialState, props) => {
	const { page, section, view } = mapPlaceholderToView(props.placeholder);

	if (state.views[page] !== undefined) {
		return state.views[page][section] === view;
	}
};

export default views;
