import Backbone from 'backbone';

export default Backbone.View.extend({
	initialize(opts) {
		if (opts.session.get('user-token')) {
			opts.router.navigate('blog', {trigger: true});
		}
	}
})
