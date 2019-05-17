import { createBrowserHistory } from 'history';
import { applyMiddleware, compose, createStore } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import reducers from './reducers/_reducer';

export const history = createBrowserHistory();

export default function configureStore(initialState) {
	return createStore(
		reducers(history),
		initialState,
		compose(
			applyMiddleware(
				routerMiddleware(history),
			),
		),
	);
}