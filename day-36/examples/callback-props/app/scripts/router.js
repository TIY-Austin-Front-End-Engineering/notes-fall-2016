import React from 'react';
import { Route, Router, hashHistory } from 'react-router';

import Nav from './components/Nav';
import UnicornList from './components/UnicornList';
import BlogList from './components/BlogList';

const router = (
	<Router history={hashHistory}>
		<Route path="/" component={Nav} >
			<Route path="unicorns" component={UnicornList}/>
			<Route path="blog" component={BlogList}/>
		</Route>
	</Router>
);

export default router;
