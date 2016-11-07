import React from 'react';

const ListingPrice = React.createClass({
	render() {
		// any rendering that isn't just straightforward "put it in the dom", we do before the return statement
		// create some empty variable that can change
		let i;
		if (this.props.stars > 3) {
			i = <i>lightning</i>;
		}
		return (
			<div>
				${this.props.price} {i}
			</div>

		)
	}
});

export default ListingPrice;
