/*eslint jsx-quotes: ["error", "prefer-single"]*/
import React from 'react';
import {render} from 'react-dom';
import {Router,browserHistory} from 'react-router'
import routes from './routes'

//Style loading
require('../static/init.css');
require('../semantic/semantic.min.css');

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('content')
);