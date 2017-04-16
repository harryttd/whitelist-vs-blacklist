'use strict';

import React from 'react';
import {Router, Route, IndexRoute, IndexRedirect, browserHistory} from 'react-router';

import Main from './Main';

export default ({ onAppEnter }) => (
  <Router history={browserHistory}>
    <Route path="/" component={Main} onEnter={onAppEnter}>
      {/*
        <Route path="/" component={} />
        <IndexRoute component={Homepage} onEnter={onAppEnter} />
      */}
    </Route>
  </Router>
);
