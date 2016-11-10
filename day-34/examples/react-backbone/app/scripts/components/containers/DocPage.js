import React from 'react';

export default React.createClass({
  render() {
    console.log(this.props);
    return (
      <div>
        <h3>{this.props.doc.title}</h3>
        <p>{this.props.doc.body}</p>
      </div>
    );
  }
});
