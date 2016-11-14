import React from 'react';

import BlogPost from './BlogPost';

import store from '../store';

export default React.createClass({
	getInitialState() {
		return {
			posts: store.posts.toJSON()
		};
	},
	componentDidMount() {
		store.posts.on('change update', () => {
			this.setState({posts: store.posts.toJSON()});
		});
		store.posts.fetch();
	},
	render() {
		let allPosts = this.state.posts.map((post, i, arr) => {
			return (
				<BlogPost key={post._id} post={post}/>
			);
		});
		return (
			<ul>{allPosts}</ul>
		);
	}
});
