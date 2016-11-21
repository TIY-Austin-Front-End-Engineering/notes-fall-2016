import React from 'react';
import { hashHistory, Route, Router } from 'react-router';

import App from './components/app';
import Login from './components/login';
import Register from './components/register';
// import Unicorns from './components/unicorns';
import NewUnicorn from './components/newUnicorn';



let router = (
  <Router history={hashHistory}>
    <Route path="/" component={App} >
      <Route path="login" component={Login} />
      <Route path="register" component={Register} />
      <Route path="unicorns/new" component={NewUnicorn} />
    </Route>
  </Router>


);

export default router;


// <Route path="unicorns" component={Unicorns} />
