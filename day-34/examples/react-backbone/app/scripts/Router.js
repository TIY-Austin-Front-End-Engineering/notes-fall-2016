import React from 'react';
import {Router, Route, hashHistory} from 'react-router';

import App from './components/containers/App';
import DocPage from './components/containers/DocPage';

export default(

<Router history= {hashHistory}>
  <Route path='/' component={App}>
    <Route path='/documents/:id' component={DocPage} />
  </Route>
</Router>

);
