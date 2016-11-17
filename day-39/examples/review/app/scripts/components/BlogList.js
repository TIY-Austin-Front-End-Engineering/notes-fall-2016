import React from 'react';

import SinglePost from './SinglePost';
import store from '../store';

export default React.createClass({
	getInitialState() {
		return {
			posts: store.blogs.toJSON()
		};
	},
	render() {
		const allBlogs = this.state.posts.map((post, i) => {
			return (<SinglePost key={i}></SinglePost>);
		});
		return(
			<ul>
				{allBlogs}
			</ul>
		);
	}
});
