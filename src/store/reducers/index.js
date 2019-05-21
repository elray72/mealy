import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import views from './views';

export default (history) => combineReducers({
	router: connectRouter(history),
	views
});