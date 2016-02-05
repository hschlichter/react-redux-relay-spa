import React, { Component } from 'react';

export default class App extends Component {
	render() {
		return (
			<div>
				<div>
					<h2>Feed</h2>
				</div>
				{this.props.children}
			</div>
		);
	}
}

