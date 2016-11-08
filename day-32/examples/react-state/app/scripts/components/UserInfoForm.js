import React from 'react';

const UserInfoForm =  React.createClass({
	render() {
		return (
			<form onSubmit={this.handleSubmit} >
				<input ref="name" type="text" placeholder="name"/>
				<input type="submit" value="save the name"/>
			</form>
		);
	},
	handleSubmit(e) {
		e.preventDefault();
		console.log(this.refs.name.value);
		// get the value from the form
	}
});

export default UserInfoForm;
