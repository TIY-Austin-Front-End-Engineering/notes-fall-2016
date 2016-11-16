import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import {spyOnComponentMethod} from 'sinon-spy-react';
import Like from '../../app/scripts/components/Like';

describe('Like component', () => {
	let spy;
	let like;
	before(() => {
		spy = spyOnComponentMethod(Like, 'handleClick');
	})
	beforeEach(() => {
		like = shallow(<Like likes={2}/>)
	});
	afterEach(() => {
		spy.restore();
	});

	it('should be a button', () => {
		expect(like.is('input[type="button"]')).to.equal(true);
	});

	it('should have a value that matches its likes prop', () => {
		expect(like.is('[value=2]')).to.equal(true);
	});

	it('should have a value that matches its likes prop', () => {
		like.setProps({likes: 4});
		expect(like.is('[value=4]')).to.equal(true);
	});

	it('should call the click handler when clicked', () => {
		like.simulate('click');
		expect(spy.callCount).to.equal(1);
	});

});






//
