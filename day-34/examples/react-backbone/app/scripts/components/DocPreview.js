import React from 'react';
import {Link} from 'react-router';

export default React.createClass({
  render(){
    // console.log(this.props);
    let checkBox;
    if (this.props.data.read === true) {
      checkBox = <input type="checkbox" className="read" checked="true" disabled="true" />;
    }
    return (
      <li>
        <Link to={`documents/${this.props.data._id}`}>{this.props.data.title}</Link>
        {checkBox}
      </li>
    );
  }
});
