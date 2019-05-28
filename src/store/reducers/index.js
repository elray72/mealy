import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import views from './views';
import { recipes } from './recipes';

export default (history) => combineReducers({
	router: connectRouter(history),
	views,
	recipes,
});