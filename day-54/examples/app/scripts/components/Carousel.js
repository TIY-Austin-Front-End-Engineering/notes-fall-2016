import React from 'react';
import TGroup from 'react-addons-css-transition-group';

export default React.createClass({
	getInitialState() {
		return {
			imgIndex: 0,
			interval: null
		};
	},
	componentDidMount() {
		this.startCarousel();
	},
	render() {
		return (
			<div
				onClick={this.toggleCarousel}
				className="carousel">
				<TGroup
					transitionName="carousel"
					transitionEnterTimeout={2000}
					transitionLeaveTimeout={1000}>
					<img
						key={this.state.imgIndex}
						className="carousel-img"
						src={this.props.images[this.state.imgIndex].src}/>
				</TGroup>
			</div>
			);
	},
	toggleCarousel() {
		if (this.state.interval === null) {
			this.startCarousel();
		} else {
			this.stopCarousel();
		}
	},
	stopCarousel() {
		clearInterval(this.state.interval);
		this.setState({interval: null});
	},
	startCarousel() {
		this.setState({interval: setInterval(() => {
			if (this.state.imgIndex >= this.props.images.length - 1) {
				this.setState({imgIndex: 0});
			} else {
				this.setState({imgIndex: this.state.imgIndex + 1});
			}
		}, 5000)});
	}
});
