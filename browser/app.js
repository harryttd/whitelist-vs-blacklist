'use strict';

import React from 'react';
import { render } from 'react-dom';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import Routes from './components/Routes';


render(
  <MuiThemeProvider>
    <Routes />
  </MuiThemeProvider>,
  document.getElementById('app')
);
