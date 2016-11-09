import React from 'react';
import ReactDom from 'react-dom';
import router from './router';

let container = document.getElementById('container');

ReactDom.render(router, container);
