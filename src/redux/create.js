import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleware from 'redux-thunk';

import reducer from './modules';
import DevTools from '../containers/devtools';

export default function create(initialState = {}) {
	const finalCreateStore = compose(
		applyMiddleware(
			thunkMiddleware
		),
		DevTools.instrument()
	)(createStore);

	const store = finalCreateStore(reducer, initialState);

	if (module.hot) {
		module.hot.accept('./modules', () => store.replaceReducers(require('./modules')));
	}

	return store;
}
