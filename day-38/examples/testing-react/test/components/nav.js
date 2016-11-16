import React from 'react';
import {expect} from 'chai';
import {shallow} from 'enzyme';
import Nav from '../../app/scripts/components/Nav';
import {Link} from 'react-router';

describe('Nav component', () => {

	let nav;

	beforeEach(() => {
		nav = shallow(<Nav/>);
	});

	it('should be a nav element', () => {
		expect(nav.is('nav')).to.equal(true);
	});

	it('should have links as children', () => {
		expect(nav.children('Link')).to.have.length(3);
		expect(nav.find('Link')).to.have.length(3);
	});

	it('should have a login and register link', () => {
		expect(nav.childAt(1).children().text()).to.equal('Login');
		expect(nav.childAt(2).children().text()).to.equal('Register');
	})

	it('should not display login if the nav is logged in', () => {
		nav.setState({'user-token': 'someactualvalue'});
		expect(nav.children('Link')).to.have.length(1);
	})
});
