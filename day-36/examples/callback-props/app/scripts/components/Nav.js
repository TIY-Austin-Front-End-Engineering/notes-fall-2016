import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<nav>
					<Link to="/unicorns">Unicorn list</Link>
					<Link to="/blog">Post list</Link>
				</nav>
				{this.props.children}
			</div>
		);
	},
});
