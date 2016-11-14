import React from 'react';

// this version is a "controlled" input with declarative state

export default React.createClass({
	getInitialState() {
		return {
			likes: 0
		};
	},
	render() {
		return (
			<input
				onClick={this.handleClick}
				type="button"
				value={this.state.likes}/>
		);
	},
	handleClick(e) {
		e.preventDefault();
		// add one to counter
		this.setState({likes: this.state.likes + 1});
	}
});
