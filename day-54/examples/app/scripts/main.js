import React from 'react';
import {render} from 'react-dom';

import Carousel from './components/Carousel';
import images from './images';

render(<Carousel images={images}/>, document.getElementById('container'));
