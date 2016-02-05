import React, { Component } from 'react';
import Relay from 'react-relay';

class RssFeedItem extends Component {
	render() {
		return (
			<div>
				<a href={this.props.rssfeeditem.link}>{this.props.rssfeeditem.title}</a>
			</div>
		);
	}
}

export default Relay.createContainer(RssFeedItem, {
	fragments: {
		rssfeeditem: () => Relay.QL`
			fragment on RssFeedItem {
				title,
				link
			}
		`
	}
});

