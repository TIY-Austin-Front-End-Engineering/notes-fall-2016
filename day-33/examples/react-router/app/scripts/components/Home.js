import React from 'react';

import Nav from './Nav';

export default React.createClass({
	render() {
		return (
			<div>
				<Nav />
				{this.props.children}
			</div>
		);
	}
});
