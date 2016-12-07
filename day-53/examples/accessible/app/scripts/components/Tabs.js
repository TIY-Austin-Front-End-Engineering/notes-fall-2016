import React from 'react';

import Tab from './Tab';

import tabData from '../tabData';

export default React.createClass({
	getInitialState() {
		return {
			activeTabIndex: 0
		};
	},
	render() {
		let tabs = tabData.map((tab, i) => {
			return (
				<Tab key={i}
					index={i}
					active={i === this.state.activeTabIndex}
					name={tab.name}
					content={tab.content}
					setActive={this.setActiveTab}/>
			);
		});
		let content = tabData[this.state.activeTabIndex].content;
		return (
			<div>
				{tabs}
				<div className="contentArea">{content}</div>
			</div>
		);
	},
	setActiveTab(index) {
		this.setState({activeTabIndex: index});
	}
});
