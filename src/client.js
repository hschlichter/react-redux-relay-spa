import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';
import { Router, Route, IndexLink } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import routes from './routes.js';
import { Provider } from 'react-redux';
import create from './redux/create';
import DevTools from './containers/devtools';

const history = createBrowserHistory();

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('http://localhost:3000/graphql'));

function createElement(Component, props) {
	if (Relay.isContainer(Component)) {
		const { name } = props.route;

		let route = new class extends Relay.Route {
			static routeName = name;
			static queries = {
				viewer: (Component) => Relay.QL`
					query Root {
						viewer {
							${Component.getFragment('viewer')}
						}
					}
				`
			};
		}();

		return <Relay.RootContainer Component={Component} route={route} />;
	} else {
		return <Component {...props} />;
	}
}

let store = create({});

render(
	<Provider store={store}>
		<div>
			<Router history={history} createElement={createElement} routes={routes} />
			<DevTools />
		</div>
	</Provider>,
	document.getElementById('content')
);

