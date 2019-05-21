import { TOGGLE_VIEW } from '../actionTypes';

export const toggleView = (page, section, view) => ({
	type: TOGGLE_VIEW,
	payload: {
		page,
		section,
		view,
	}
});
