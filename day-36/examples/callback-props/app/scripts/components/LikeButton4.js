import React from 'react';

import store from '../store';

// this version is a "controlled" input
// instead of updating state ON THIS COMPONENT we updated the data in the store
// we needed access to the data to be passed in to this component in order for this to work
// we are getting the data we need for this component from a parent as props instead of using state

export default React.createClass({
	render() {
		return (
			<input
				onClick={this.handleClick}
				type="button"
				value={this.props.likes || 0}/>
		);
	},
	handleClick(e) {
		e.preventDefault();
		this.props.callback();
	}
});
