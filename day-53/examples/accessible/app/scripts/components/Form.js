import React from 'react';

export default React.createClass({
	render() {
		return (
			<form>
				<label htmlFor="name">Unicorn Name</label>
					<input id="name" name="unicornName" type="text" placeholder="Unicorn Name"/>
				<label htmlFor="pink">Pink</label>
					<input name="unicornColor" id="pink" type="radio" value="pink"/>
				<label>Transparent</label>
					<input name="unicornColor" type="radio" value="transparent"/>
				<label>White</label>
					<input name="unicornColor" type="radio" value="white"/>
				<input type="submit"/>
			</form>
		);
	}
});
