import React from 'react';
import Avatar from './Avatar';
import ListingPrice from './ListingPrice';

const Listing = React.createClass({
	render() {
		// when we return multiple lines of jsx, we need to wrap them in parantheses to keep them all together
		// when a single component is really long bc of props, multiline it like below
		return (
			<div className="listing">
				<ListingPrice
					price={this.props.listing.price}
					stars={this.props.listing.stars}/>
				<h3 className="listing-title">{this.props.listing.title}</h3>
				<Avatar avatar={this.props.listing.ownerAvatar}/>
			</div>
		)
	}
})

export default Listing;
