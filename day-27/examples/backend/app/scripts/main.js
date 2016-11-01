import Backbone from 'backbone';
import $ from 'jquery';
import router from './router';

// // intercept all ajax requests and run this callback first
// $.ajaxSend((evt, xhr, opts) => {
// 	opts.headers = {
// 		'application-id': config.appId,
// 		'secret-key': config.secret,
// 		'application-type': 'REST'
// 	}
// })s

Backbone.history.start();
