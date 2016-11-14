import React from 'react';

// this version is a button with declarative state

export default React.createClass({
	getInitialState() {
		return {
			likes: 0
		};
	},
	render() {
		return (
			<button onClick={this.handleClick}>{this.state.likes}</button>
		);
	},
	handleClick(e) {
		e.preventDefault();
		// add one to counter
		this.setState({likes: this.state.likes + 1});
	}
});
