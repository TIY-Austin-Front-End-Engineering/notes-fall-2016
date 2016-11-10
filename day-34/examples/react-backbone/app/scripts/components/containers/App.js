import React from 'react';
import Nav from '../Nav';
import DocList from '../DocList';
import store from '../../store';
import $ from 'jquery';
export default React.createClass({
  getInitialState(){
    return{
      docs: store.docs.toJSON()
    }
  },
  //listeners will happen in will mount or did mount as well as fetching.
  componentWillMount(){
    store.docs.fetch();
    //both together wha!?
    store.docs.on('update change',()=>{
      this.setState({
        docs:store.docs.toJSON()
      });
    });

  },
  render () {
//checks to see if there is some data please
    let childrenWithProps;
    if(this.state.docs.length>0){
      childrenWithProps= React.Children.map(this.props.children, (child, i, arr)=>{
        return React.cloneElement(child, {
          doc: this.state.docs.find((doc, i, arr)=>{
            return doc._id === this.props.params.id;
          })
        })
      })
    }
    return (
      <div className="document-reader-app">
          <Nav/>
          <DocList docs = {this.state.docs}/>
          {childrenWithProps}
      </div>
    );
  }
});
