import Backbone from 'backbone';
import Document from '../models/Document';

export default Backbone.Collection.extend({
  model: Document,
  url: 'http://tiny-za-server.herokuapp.com/collections/documents'
});
