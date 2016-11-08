import React from 'react';

export default React.createClass({
	// state is data this component is in charge of, that can change, based on things that happen within this component
	// to set up state i start with getInitialState
	getInitialState() {
		console.log('get initial state occurs when the compenent is first created before anything else');
		// getInitialState should do NOTHING but return the state object for this component
		// state is always an object
		return {
			likes: 0
		};
	},
	componentWillMount() {
		console.log('componentWillMount runs right after get initial state, before the first render');
	},
	render() {
		console.log('render runs after initial mount and also after any state or prop changes');
		let str = 'likes';
		if (this.state.likes === 1) {
			str = 'like';
		}
		return (
			<button onClick={this.handleClick} >{this.state.likes} {str}</button>
		);
	},
	componentDidMount() {
		console.log('componentDidMount runs after initial render one time only');
	},
	componentWillUnmount() {
		console.log('componentWillUnmount occurs right before we take the component out of the dom');
	},
	handleClick(e) {
		// state is not tecnically read only, BUT it does require that we use special methods to change it.
		// this.state.likes++;
		this.setState({
			likes: this.state.likes + 1
		});

		// this doesn't work because props are read only
		// props come down from a parent
		// they do not change WIHTIN this component.
		// this.props.likes++;
		// console.log(this.props.likes);
	}
});
