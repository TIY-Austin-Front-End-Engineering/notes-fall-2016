import People from './collections/people';
import Session from './models/session';

export default {
	people: new People([
		{name: 'jess'},
		{name: 'max'},
		{name: 'jen'},
		{name: 'chris'},
		{name: 'brian'},
		{name: 'drake'},
		{name: 'jeff'}
	]),
	session: new Session()
};
