'use strict';

import React from 'react';
import { Router, Route, IndexRoute, IndexRedirect, browserHistory } from 'react-router';

import App from './App';
// import Root from './Root';

export default () => (
  <Router history={browserHistory}>
    <Route path="/" component={App} />
  </Router>
);
