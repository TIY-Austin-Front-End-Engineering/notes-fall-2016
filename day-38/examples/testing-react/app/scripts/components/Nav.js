import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			'user-token': undefined
		};
	},
	render() {
		let links;
		if (!this.state['user-token']) {
			links = [
				<Link key={0} to="/login">Login</Link>,
				<Link key={1} to="/register">Register</Link>
			];
		}
		return(
			<nav>
				<Link to="/">Home</Link>
				{links}
			</nav>
		);
	}
});
