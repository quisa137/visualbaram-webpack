/*eslint jsx-quotes: ["error", "prefer-single"]*/
import React from 'react';
import {render} from 'react-dom';
import routes from '.routes'

render(
  <Router routes={routes} history={browserHistory}/>,
  document.getElementById('content')
);