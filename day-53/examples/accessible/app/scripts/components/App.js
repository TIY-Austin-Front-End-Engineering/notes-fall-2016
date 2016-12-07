import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
	render() {
		return (
			<div>
				<nav>
					<ul>
						<li><Link to="tabs">Tabs</Link></li>
						<li><Link to="form">Form</Link></li>
						<li><Link to="images">Images</Link></li>
					</ul>
				</nav>
				{this.props.children}
			</div>
		);
	}
});
