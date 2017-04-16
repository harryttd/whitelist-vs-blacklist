'use strict';

import React from 'react';

import { orange500 } from 'material-ui/styles/colors';
import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const styles = {
  radioButton: {
    marginBottom: 16
  },
  toggle: {
    marginBottom: 16
  },
  paper: {
    // height: 500
    height: '100%',
    width: '95%',
    margin: 20,
    textAlign: 'center',
    display: 'inline-block',
  },
  div: {
    display: 'flex',
    flexDirection: 'row wrap',
    padding: 10,
    width: '100%'
  },
  buttonsLeft: {
    maxWidth: 250,
    flex: 1,
    height: '15%',
    textAlign: 'center',
    padding: 25
  },
  io: {
    display: 'inline-block',
    width: '100%',
    padding: 10
  },
  output: {
    borderColor: orange500
  }
};


const App = () => (
  <div>
    <Paper style={styles.paper} zDepth={3}>
      <div style={styles.div}>
        <div style={styles.buttonsLeft}>
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            <RadioButton
              value="light"
              label="Whitelist"
              style={styles.radioButton}
            />
            <RadioButton
              value="not_light"
              label="Blacklist"
              style={styles.radioButton}
            />
          </RadioButtonGroup>
          <Toggle
            style={styles.toggle}
            label="Encode"
            labelPosition="right"
          />
        </div>
        <div style={styles.io}>
          <TextField
            hintText="Input"
            fullWidth={true}
            type="text"
          />
          <TextField
            hintText="Output"
            fullWidth={true}
            disabled={false}
            underlineFocusStyle={styles.output}
            type="text"
          />
        </div>
      </div>
    </Paper>
  </div>
);

export default App;
