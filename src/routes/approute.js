import Relay from 'react-relay';

export default class extends Relay.Route {
	static routeName = 'Home';
	static queries = {
		viewer: (Component) => Relay.QL`
			query Root {
				viewer {
					${Component.getFragment('viewer')}
				}
			}
		`
	};
}


