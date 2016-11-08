import React from 'react';

import NamePreview from './NamePreview';

export default React.createClass({
	render() {
		// create some variable to store jsx and put it in our return statement no matter what
		// this is safe because react doesn't render undefineds
		let stuffToPutInList = this.props.people.map((person,i) => {
			// in a map, return jsx! (when we are trying to render a list)
			// key is required for mapping for efficiency because of the virtual dom
			return <NamePreview key={i} name={person.name}/>;
		});
		return (
			<ul>
				{stuffToPutInList}
			</ul>
		);
	}
});
