import React from 'react';

export default React.createClass({
	render() {
		var images = [{name: 'cool cat', src:"/assets/images/c33ffac80ec16553ec8694b6b4617667.jpg"}]
		return (
			<ul>
				<li>
					<img src="/assets/images/823jaglkshauhsdl.jpg"
						alt="batik style unicorn"/>
				</li>
				<li>
					<img src={images[0].src}
						alt={'image of ' + images[0].name}/>
				</li>
			</ul>
		);
	}
});
