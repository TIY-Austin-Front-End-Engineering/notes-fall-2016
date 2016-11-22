import Backbone from 'backbone';
import $ from 'jquery';
import secret from '../secret';
export default Backbone.Model.extend({
  // initialize() {
    // this.authenticated = window.localStoreage bla bla
  // }
  defaults: {
    authenticated: false
  },
  register(email, password){
    $.ajax({
        type:'POST',
        url: 'https://api.backendless.com/v1/users/register',
        contentType:'application/json',
        data:JSON.stringify({
          email,
          password
        }),
        success:(response)=>{
          this.login(email, password)
        }
    });
  },
  login(email, password) {
    $.ajax({
      type: 'POST',
      url: 'https://api.backendless.com/v1/users/login',
      contentType:'application/json',
      data:JSON.stringify({
        login: email,
        password
      }),
      success:(response)=>{
        this.set({authenticated: true, 'user-token': response['user-token']});
      }
    });
  }
});
