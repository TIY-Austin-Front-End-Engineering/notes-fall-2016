import ReactDom from 'react-dom';
import $ from 'jquery';
import router from './router';
import secret from './secret';
import store from './store';

const container = document.getElementById('container');

$(document).ajaxSend((evt, xhr, opts) => {
  xhr.setRequestHeader('application-id', secret.appId);
  xhr.setRequestHeader('secret-key', secret.secret);
  xhr.setRequestHeader('application-type', 'REST');
  xhr.setRequestHeader('user-token', store.session.get('user-token'));
});

ReactDom.render(router, container)
