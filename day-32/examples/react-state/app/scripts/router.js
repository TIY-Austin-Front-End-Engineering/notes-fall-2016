import Backbone from 'backbone';
import ReactDom from 'react-dom';
import React from 'react';

import NameList from './components/NameList';
import LikeButton from './components/LikeButton';
import UserInfoForm from './components/UserInfoForm';
// import names from './listofnames';

import store from './store';

let container = document.getElementById('container');

const console = window.console;

const Router = Backbone.Router.extend({
	routes: {
		''		 					: 'home',
		'names'					: 'names',
		'users/:id/:id' : 'profile',
		'form'					: 'form'
	},
	home() {
		ReactDom.render(<LikeButton/>, container);
	},
	names() {
		// backbone models and collections have a toJSON() method that returns plain object versions of themselves
		// we prefer using the toJSON version of data within react apps
		ReactDom.render(<NameList people={store.people.toJSON()}/>, container);
	},
	// for parameterized routes, whatever matches the : pattern in the route will be passed as an argument
	profile(id, secondId) {
		console.log(id, secondId);
	},
	form() {
		ReactDom.render(<UserInfoForm />, container);
	}
});

export default new Router();
