import React from 'react';
import store from '../store';

export default React.createClass({
  getInitialState() {
    return {
      powers: store.powers.toJSON()
    };
  },
  componentDidMount() {
    store.powers.fetch();
    store.powers.on('change update', this.updatePowers);
  },
  updatePowers() {
    this.setState({
      powers: store.powers.toJSON()
    });
  },
  componentWillUnmount() {
    store.powers.off('change update', this.updatePowers);
  },
  render() {
    console.log(this.state.powers);
    let allPowers = this.state.powers.map((power,i ,arr) => {
      return (
        <li>
          <input
            ref= {power.power}
            value={power.objectId}
            id={power.power}
            type="checkbox"/>
          <label htmlFor={power.power}>{power.power}</label>
      </li>
      );
    })
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" ref="name" placeholder="Unicorn Name"/>
        <input type="text" ref="age" placeholder="Unicorn Age"/>
        <textarea ref="description" placeholder="Unicorn Description"/>
        <h2>Powers:</h2>
        <ul>
        {allPowers}
        </ul>
        <input ref="invisibility" value="1224CABD-3929-F652-FFC1-002203604C00" id="p3" type="checkbox"/> <label htmlFor="p3">Invisibility</label>
        <input type="submit"  value="Create dat corn"/>
      </form>
    )
  },

  handleSubmit(e) {
    console.log('corn');
    let powers=[];
    if(this.refs.invisibility.checked){
      powers=[{ ___class:'powers', description: 'gives you wings' , power: 'flight' , range: 50 }];
    }

    let name = this.refs.name.value;
    let age = this.refs.age.value;
    let description = this.refs.description.value;
    store.unicorns.create({name,age,description,powers});
  }
});
