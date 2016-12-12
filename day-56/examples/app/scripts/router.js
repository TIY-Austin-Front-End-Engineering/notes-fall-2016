import React from 'react';
import {Router, Route, Redirect, IndexRoute, browserHistory} from 'react-router';

import App from './components/App';
import Fish from './components/Fish';
import BlogList from './components/BlogList';
import Blog from './components/Blog';
import NotFound from './components/NotFound';

function enter() {
	window.console.log('enter');
}

function change() {
	window.console.log('change');
}

const router = (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Fish}/>
			<Route path="fish" component={Fish}/>
			<Route path="blog" onChange={change}>
				<IndexRoute component={BlogList}/>
				<Route path=":title" component={Blog} onEnter={enter}/>
			</Route>
		</Route>
		<Redirect path="home" to="/"/>
		<Route path="*" component={NotFound}/>
	</Router>
);

export default router;
