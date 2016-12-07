import React from 'react';
import {Router, IndexRoute, Route, Redirect, browserHistory} from 'react-router';

import App from './components/App';
import Images from './components/Images';
import Tabs from './components/Tabs';
import Form from './components/Form';

export default (
	<Router history={browserHistory}>
		<Route path="/" component={App}>
			<IndexRoute component={Images}/>
			<Route path="images" component={Images}/>
			<Route path="tabs" component={Tabs}/>
			<Route path="form" component={Form}/>
		</Route>
	</Router>
);
