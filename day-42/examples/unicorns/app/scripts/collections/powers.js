import Backbone from 'backbone';

export default Backbone.Collection.extend({
  url: 'https://api.backendless.com/v1/data/powers',
  parse: (response) => {
    return response.data;
  }
});
