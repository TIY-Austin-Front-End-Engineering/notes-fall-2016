import {expect} from 'chai';
import {shallow} from 'enzyme';

import React from 'react';

import BlogList from '../../app/scripts/components/BlogList';
import SinglePost from '../../app/scripts/components/SinglePost';

describe('BlogList component', () => {
	let blogList;

	beforeEach(() => {
		blogList = shallow(<BlogList/>);
	});

	it('should be a ul', () => {
		expect(blogList).to.have.tagName('ul');
	});

	it('should have an array as it\'s posts state', () => {
		// expect(blogList.state().posts).to.be.an('array');
		expect(blogList).to.have.state('posts').be.an('array');
	});

	it('should render an SinglePost for each post in its state', () => {
		blogList.setState({posts: [
			{title: 'cool blog', body: 'words'},
			{title: 'another blog', body: 'more words'}
		]});
		expect(blogList).to.have.exactly(2).descendants(SinglePost);
	});
});
