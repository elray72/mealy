import { createBrowserHistory } from 'history';
import { createStore, compose, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import thunkMiddleware from 'redux-thunk';
import loggerMiddleware from 'redux-logger';
import rootReducer from './reducers/index';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	return createStore(
		rootReducer(history),
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history),
				thunkMiddleware,
				loggerMiddleware,
			),
		),
	);
}