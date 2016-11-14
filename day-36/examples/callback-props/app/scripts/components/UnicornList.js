import React from 'react';

import store from '../store';

import Unicorn from './Unicorn';

export default React.createClass({
	getInitialState() {
		return {
			unicorns: store.unicorns.toJSON()
		};
	},
	componentDidMount() {
		store.unicorns.on('update change', () => {
			this.setState({
				unicorns: store.unicorns.toJSON()
			});
		});
		store.unicorns.fetch();
	},
	render() {
		const allUnicorns = this.state.unicorns.map((corn) => {
			return <Unicorn key={corn._id} corn={corn}/>;
		});
		return (
			<ul>{allUnicorns}</ul>
		);
	}
});
