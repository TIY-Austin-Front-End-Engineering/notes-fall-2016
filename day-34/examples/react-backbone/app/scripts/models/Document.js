import Backbone from 'backbone';

export default Backbone.Model.extend({
  idAttribute: '_id',
  defaults: {
    title: '',
    body: '',
    read: false
  },
  rootUrl: 'http://tiny-za-server.herokuapp.com/collections/documents'

})
