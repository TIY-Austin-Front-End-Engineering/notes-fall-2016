import React from 'react';
import { Link } from 'react-router';

import store from '../store';

export default React.createClass({
  getInitialState() {
    return { authenticated: store.session.get('authenticated')}
  },
  componentWillMount() {
    store.session.on('change', () => {
      this.setState({authenticated: store.session.get('authenticated')});
    });
  },
  render() {
    let links = [
      <Link to="login" key={1}> Log In </Link>,
      <Link to="register" key={2}> Sign Up </Link>
    ];
    if (this.state.authenticated) {
      links = [
        <Link to="unicorns" key={3}> Unicorns </Link>,
        <Link to="unicorns/new" key={4}> Create New Unicorn </Link>
      ];
    }
    return (
      <nav>
        {links}
      </nav>
    );
  }
});
