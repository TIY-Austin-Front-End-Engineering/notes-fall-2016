// we need react if we are ever going to write anything react at all
import React from 'react';

// we need react-dom to put anything into the ACTUAL dom
// this ususally only happens in one spot
import ReactDom from 'react-dom';

import Listing from './components/Listing';

// all react components (jsx) are allowed to be self closing:
// var div = <div/>
// mulit lines of jsx (it's nice to put them in parans)
var div =(
	<div>
		<h1>cool story brah</h1>
	</div>
);
var container = document.getElementById('container');

const listingData = {
	title: 'cool house to rent',
	ownerAvatar: 'http://placekitten.com/300/300',
	price: 60,
	stars: 5
}

// react-dom's render function renders react into the actual DOM
// it takes 2 arguments - the react we want to render, and the location in the dom to render it
// the first arg is jsx OR a variable that represents jsx
// curly braces within jsx escape vanilla javascript
ReactDom.render(<Listing listing={listingData}/>, container);
