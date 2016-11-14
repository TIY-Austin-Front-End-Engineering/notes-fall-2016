import React from 'react';

import store from '../store';

import LikeButton from './LikeButton4';

export default React.createClass({
	render() {
		return (
			<li>
				{this.props.post.body}
				<LikeButton
					likes={this.props.post.likes}
					callback={this.addLike}/>
			</li>
		);
	},
	addLike() {
		store.posts.like(this.props.post._id);
	}
});
