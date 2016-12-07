import React from 'react';

export default React.createClass({
	componentDidMount() {
		if (this.props.index === 0) {
			this.refs.tabName.focus();
		}
	},
	render() {
		return (
			<div>
				<h3 role="tab" ref="tabName" tabIndex="0" onClick={this.setActive}>{this.props.name}</h3>
			</div>
		);
	},
	setActive() {
		this.props.setActive(this.props.index);
	}
});
