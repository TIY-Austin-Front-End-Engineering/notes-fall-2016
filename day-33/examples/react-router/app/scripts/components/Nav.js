import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<nav>
				<Link to="faces/nick">Nick</Link>
				<Link to="faces/bill">Bill</Link>
				<Link to="faces/steve">Steve</Link>
				<Link to="posts">Blog</Link>
			</nav>
		);
	}
});
