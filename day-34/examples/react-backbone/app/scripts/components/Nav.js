import React from 'react';
import { Link } from 'react-router';

export default React.createClass({
  render(){
    return(
      <nav className="nav">
        <div>
          <Link to="/">ReadIt</Link>
        </div>
        <div>
          <Link to="documents/new">New</Link>
          <Link to="documents">List</Link>
        </div>
      </nav>
    );
  }
});
