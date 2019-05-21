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
			state[action.payload.page][action.payload.section] = action.payload.view;
			return state;

		default:
			return state;
	}
};

export const isViewVisible = (state = initialState, props) => {
	const { page, section, name } = props;
	return state.views[page][section] === name;
};

export default views;