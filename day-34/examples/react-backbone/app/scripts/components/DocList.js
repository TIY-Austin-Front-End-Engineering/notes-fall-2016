import React from 'react';
import DocPreview from './DocPreview';

export default React.createClass({
  render() {
  let allTheDocs = this.props.docs.map(function(doc, i, arr){
    // console.log(doc);
    return <DocPreview key={doc._id} data={doc}/>
  });
    return (
      <ul className="doc-list">
        {allTheDocs}
      </ul>
    );
  }
});
