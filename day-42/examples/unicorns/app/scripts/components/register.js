import React from 'react';
import { Link } from 'react-router';

import store from '../store';

export default React.createClass({
  handleSubmit(e) {
    e.preventDefault();
    let email = this.refs.email.value;
    let password = this.refs.password.value;
    let confirmPassword = this.refs.confirmPassword.value;

    store.session.register(email, password);

  },
  render() {
    console.log(store);
    return (

      <form onSubmit={this.handleSubmit}>
        <input type ="email" ref="email" id="email" placeholder="email"/>
        <input type ="password" ref="password" id="password" placeholder="password"/>
        <input type ="password" ref="confirmPassword" id="confirm-password" placeholder="confirm-password"/>
        <input type ="submit" value="login"/>
        Already signed Up? <Link to ="login"> Click Here</Link>
      </form>



    )
  }
})
