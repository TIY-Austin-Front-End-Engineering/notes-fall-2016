import React from 'react';
import Like from './LikeButton4';

export default React.createClass({
	render() {
		return(
			<li>
				{this.props.corn._id}
				<Like
					likes={this.props.corn.likes}
					callback={this.addLike}/>
			</li>
		);
	},
	addLike() {
		// make a function on the collection or model that likes the corn and call it here
		console.log('like', this.props.corn._id);
	}
});
