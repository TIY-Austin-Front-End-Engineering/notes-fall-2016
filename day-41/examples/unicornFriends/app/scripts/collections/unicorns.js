import Backbone from 'backbone';
import Unicorn from '../models/unicorn';


export default Backbone.Collection.extend ({
  model: Unicorn,
  url: 'https://api.backendless.com/v1/data/unicorns',

});
