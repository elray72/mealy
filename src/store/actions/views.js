import { TOGGLE_VIEW } from '../actionTypes';

export const toggleView = (target) => ({
	type: TOGGLE_VIEW,
	placeholder: target
});
