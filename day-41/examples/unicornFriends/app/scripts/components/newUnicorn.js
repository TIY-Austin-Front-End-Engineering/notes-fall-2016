import React from 'react';
import store from '../store';

export default React.createClass({
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="name" placeholder="Unicorn Name"/>
        <input type="text" ref="age" placeholder="Unicorn Age"/>
        <textarea ref="description" placeholder="Unicorn Description"/>
        <h2>Powers:</h2>
        <input id="p1" type="checkbox"/> <label htmlFor="p1">Flying</label>
        <input id="p2" type="checkbox"/> <label htmlFor="p2">Healing</label>
        <input id="p3" type="checkbox"/> <label htmlFor="p3">Invisibility</label>
        <input type="submit"  value="Create dat corn"/>
      </form>
    )
  },
  handleSubmit(e) {
    console.log('corn');
    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let description = this.refs.description.value;
    store.unicorns.create({name,age,description});
  }
});
