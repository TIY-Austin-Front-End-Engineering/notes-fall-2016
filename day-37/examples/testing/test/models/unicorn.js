import Unicorn from '../../app/scripts/models/unicorn';
import Backbone from 'backbone';
import sinon from 'sinon';

import { expect } from 'chai';

describe('unicorn model', () => {
	// make a variable for an instance
	let unicorn;

	// make sure each time we run a test the instance is a fresh model
	beforeEach(() => {
		unicorn = new Unicorn();
	});

	it('should be a function (because it is a constructor)', () => {
		expect(Unicorn).to.be.a('function');
	});

	it('should create an backbone model', () => {
		expect(unicorn).to.be.an.instanceof(Backbone.Model);
	});

	it('should have an attribute id of objectId', () => {
		expect(unicorn).to.have.property('idAttribute');
		expect(unicorn.idAttribute).to.equal('objectId');
	});

	it('should have a default age of 0', () => {
		expect(unicorn.get('age')).to.be.a('number');
		expect(unicorn.get('age')).to.equal(0);
	});

	it('should have a getOlder method', () => {
		expect(unicorn).to.have.property('getOlder');
		expect(unicorn.getOlder).to.be.a('function');
	});

	it('should make the unicorn older by 50 when we run .getOlder()', () => {
		unicorn.getOlder();
		expect(unicorn.get('age')).to.equal(50);
		unicorn.getOlder();
		expect(unicorn.get('age')).to.equal(100);
	});

	it('should fire the change event when getOlder is called', () => {
		// declare a spy
		let spy = sinon.spy();

		// register a listener with the spy
		unicorn.on('change', spy);

		// run a function that should cause the spy to be run
		unicorn.getOlder();

		// ask the spy if it was run one time.
		expect(spy.callCount).to.equal(1);
	});

	it('should let arrays equal themselves', () => {
		expect([1,2,3]).to.deep.equal([1,2,3]);
	})
});







//
