import React from 'react';
import Nav from './nav';

export default React.createClass({
  render() {
    return (
      <div>
        <Nav />
        {this.props.children}
      </div>
    )
  }
});
