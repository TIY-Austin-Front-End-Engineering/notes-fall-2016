import Backbone from 'backbone';
import router from './router';

// const router = new Router();

Backbone.history.start();













/// code we did as examples for posts

// import Posts from './collections/posts';
// import Post from './models/post';

// passing in data to the constructor "set's" that data to the instance. those properties techncially live on the 'attributes' property of the instance
// var post = new Post({
// 	title: 'A cool post'});
// console.log(post);
//
// console.log(post.get('title'));
// post.set('title', 'a new post title');
// console.log(post.get('title'));
//
// post.save(null, {
// 	success: function(data) {
// 		console.log('you did it!', data);
// 	}
// });

// let posts = new Posts();
//
// posts.fetch({
// 	success: function(data) {
// 		console.log('fetch success', data);
// 		console.log(posts.get('5810d57b14432c03006b37c0'));
// 	}
// });

// posts.create({
// 	title: 'cool post dude',
// 	body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.'}, {
// 		success: function(data) {
// 			console.log('saved a new post', data);
// 		}
// 	})
