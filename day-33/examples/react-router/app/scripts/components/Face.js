import React from 'react';
import { hashHistory } from 'react-router';

export default React.createClass({
	render() {
		let url = 'https://www.stevensegallery.com/200/200';
		if (this.props.params.person === 'nick') {
			url = 'http://placecage.com/200/200';
		} else if (this.props.params.person === 'bill') {
			url = 'http://fillmurray.com/200/200';
		}
		return (
			<div>
				<button onClick={this.handleBack}>back</button>
				<img src={url}/>
			</div>
		);
	},
	handleBack(e) {
		e.preventDefault();
		hashHistory.push('/');
	}
});
