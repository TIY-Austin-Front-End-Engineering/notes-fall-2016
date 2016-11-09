import React from 'react';
import $ from 'jquery';

// import store

import {Link} from 'react-router';

export default React.createClass({
	getInitialState() {
		return {
			// posts: store.posts.toJSON()
			posts: []
		};
	},
	componentDidMount() {
		// store.posts.fetch({
			// success: (coll, response) => {
			// 	this.setState({
			// 		posts: coll.toJSON()
			// 	}
			// })
		$.ajax({
			type: 'GET',
			url: 'http://tiny-za-server.herokuapp.com/collections/blogPosts',
			success: (response) => {
				this.setState({posts:response});
			}
		});
	},
	render() {
		const postList = this.state.posts.map((post, i, arr) => {
			return <li key={post._id}><Link to={`posts/${post._id}`} >{post.title}</Link></li>;
		});
		return (
			<ul>
				{postList}
			</ul>
		);
	}
});
