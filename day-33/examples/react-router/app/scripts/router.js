import React from 'react';
// unlike backbone export which is default and then has properties living on it, react-router makes us import each piece individually
// this makes us use this exploded object syntax
import { Router, Route, hashHistory } from 'react-router';

import Home from './components/Home';
import Face from './components/Face';
import Posts from './components/Posts';

const router = (
		<Router history={hashHistory}>
			<Route path="/" component={Home}>
				<Route path="faces/:person" component={Face}/>
				<Route path="posts" component={Posts}/>
			</Route>
		</Router>
);

export default router;
