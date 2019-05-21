import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import logger from 'redux-logger';
import rootReducer from './reducers/index';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	return createStore(
		rootReducer(history),
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history),
				logger,
			),
		),
	);
}