import React from 'react';

// react components must start with a capital letter or react will break
// the createClass method expects 1 argument, it should be an object
// the object we pass MUST have a render function at a minimum
const Avatar = React.createClass({
	// the render function should return the jsx we want to render
	render() {
		return (
			<a href="#">
				<img src={this.props.avatar}/>
			</a>
		)
	}
})

export default Avatar;
