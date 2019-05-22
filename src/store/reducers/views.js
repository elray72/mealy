import { TOGGLE_VIEW } from '../actionTypes';
import { Views } from '../constants';

const initialState = {
	Dashboard: {
		Left: Views.PLAN_PICKER,
		Right: Views.SHOPPING_LIST,
	},
};

export const views = (state = initialState, action) => {
	switch (action.type) {

		case TOGGLE_VIEW:
			let newState = {
				...state
			};
			newState[action.page][action.section] = action.view;
			return newState;

		default:
			return state;
	}
};

export const isViewVisible = (state = initialState, props) => {
	const { page, section, name } = props;
	if (state.views[page] !== undefined) {
		return state.views[page][section] === name;
	}
};

export default views;