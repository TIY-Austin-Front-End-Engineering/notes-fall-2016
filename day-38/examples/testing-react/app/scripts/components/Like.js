import React from 'react';

export default React.createClass({
	render() {
		return(
			<input
				type="button"
				onClick={this.handleClick}
				value={this.props.likes}/>
		);
	},
	handleClick() {
		console.log('clicked on like');
	}
});
