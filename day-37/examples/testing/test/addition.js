import { expect } from 'chai';

import addition from '../app/scripts/addition';

// describe is defined by mocha, our test runner
describe('addition function', () => {
	// it also comes from mocha, and is the actual test!
	it('should be a function', () => {
		expect(addition).to.be.a('function');
	});

	it('should throw an error when an argument is not a number', () => {
		let fn = addition.bind(null, 'dog', 1);
		expect(fn).to.throw('dog is not a number, check the first argument of addition');

		fn = addition.bind(null, 1, 'dog');
		expect(fn).to.throw('dog is not a number, check the second argument of addition')
	});

	// it('should return a number', () => {
	// 	expect(addition(1, 'dog')).to.be.a('number');
	// 	expect(addition({}, 1)).to.be.a('number');
	// 	expect(addition([], 1)).to.be.a('number');
	// 	expect(addition(undefined, null)).to.be.a('number');
	// });

	// it('should return 0 when given no arguments', () => {
	// 	expect(addition()).to.equal(0);
	// });

	it('should add two numbers correctly', () => {
		expect(addition(1,2)).to.equal(3);
		expect(addition(2,2)).to.equal(4);
		expect(addition(50,2)).to.equal(52);
		expect(addition(0,4)).to.equal(4);
		expect(addition(1,0)).to.equal(1);
	});

});
