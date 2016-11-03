import Backbone from 'backbone';

export default Backbone.View.extend({
	tagName: 'nav',
	template() {
		let data = `<a href="#blog">read blogs</a>`;
		if (this.model.get('user-token')) {
			data += `
				<a href="#blog/create">write a blog</a>
				<input type="button" id="logout" value="logout">
			`
		} else {
			data += `
				<a href="#login">login</a>
				<a href="#register">register</a>
			`
		}
		return data
	},
	render() {
		this.$el.append(this.template());
	},
	events: {
		'click #logout': 'handleLogout'
	},
	handleLogout(e) {
		this.model.logout();
	}
})
