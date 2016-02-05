import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import FeedViewer from './components/feedviewer';

export default (
	<Route path="/" component={App}>
		<IndexRoute name="Feed" component={FeedViewer} />
	</Route>
);

