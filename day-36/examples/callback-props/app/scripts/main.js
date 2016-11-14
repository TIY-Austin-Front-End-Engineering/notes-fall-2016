import ReactDOM from 'react-dom';
import React from 'react';

// import BlogList from './components/BlogList';
import router from './router';

import store from './store';

const container = document.getElementById('container');

// behind the scenes <LikeButton/> is this:
// React.createElement(LikeButton) (and that's wy we need to import React)

ReactDOM.render(router, container);
