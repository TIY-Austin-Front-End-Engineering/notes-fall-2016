import React from 'react';
import { Link } from 'react-router';

import store from '../store';

export default React.createClass ({
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="email" ref="email" id="email" placeholder="email"/>
        <input type="password" ref="pw" id="password" placeholder="password"/>
        <input type="submit" value="login"/>
        Not Signed Up? <Link to ="register"> Click Here</Link>
      </form>
    );
  },
  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let pw = this.refs.pw.value;
    store.session.login(email, pw);
  }
})
