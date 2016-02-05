import React from 'react';
import { render } from 'react-dom';
import Relay from 'react-relay';

Relay.injectNetworkLayer(new Relay.DefaultNetworkLayer('http://localhost:3000/graphql'));

import AppViewer from './components/appviewer';
import AppRoute from './routes/approute';

render(
	<Relay.RootContainer
		Component={AppViewer}
		route={new AppRoute()}
	/>,
	document.getElementById('content')
);

