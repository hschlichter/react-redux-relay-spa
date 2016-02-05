import React, { Component } from 'react';
import Relay from 'react-relay';
import RssFeedItem from './rssfeeditem';

class FeedViewer extends Component {
	constructor() {
		super();
		this.name = 'Feed';
	}

	render() {
		return (
			<div>
				{this.props.viewer.rssfeeditems.map(
					(item, index) => <RssFeedItem key={index} rssfeeditem={item} />
				)}
			</div>
		);
	}
}

export default Relay.createContainer(FeedViewer, {
	fragments: {
		viewer: () => Relay.QL`
			fragment on Viewer {
				rssfeeditems {
					${RssFeedItem.getFragment('rssfeeditem')}
				}
			}
		`
	}
});

