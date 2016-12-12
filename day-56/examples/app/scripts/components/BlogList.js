import {Link} from 'react-router';
import React from 'react';

export default React.createClass({
	render() {
		return (
			<ul>
				<li><Link to="/blog/coolBlog">The cool post</Link></li>
				<li/>
			</ul>
		);
	}
});
