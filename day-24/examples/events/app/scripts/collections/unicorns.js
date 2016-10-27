import Backbone from 'backbone';
import Unicorn from '../models/unicorn';

export default Backbone.Collection.extend({
	model: Unicorn,
	url: 'http://tiny-za-server.herokuapp.com/collections/unicorns'
});
