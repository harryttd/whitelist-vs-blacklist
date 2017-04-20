'use strict';

import React, { Component } from 'react';
import axios from 'axios';

import styles from '../styles';
import ListOptions from './ListOptions';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import RaisedButton from 'material-ui/RaisedButton';
import Checkbox from 'material-ui/Checkbox';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

const entityEncoder = require('../../utils/encoder').entityEncoder;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      list: 'black',
      clientValidation: true,
      serverValidation: false,
      encode: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleAndChecks = this.handleToggleAndChecks.bind(this);
  }

  handleSubmit() {
    const { list, clientValidation, serverValidation, encode } = this.state;
    let { input } = this.state;

    if (clientValidation) {
      if (encode) input = entityEncoder.htmlEncode(input);
    }

    if (serverValidation) {
      axios.post('/', { input, list, encode })
      .then(res => res.data)
      .then(output => this.setState({ output }))
      .catch(err => console.error.bind(console)(err));
    } else {
      this.setState({ output: input });
    }
  }

  handleChange(event, state) {
    this.setState({ [state]: event.target.value });
  }

  handleToggleAndChecks(state) {
    this.setState((prevState) => ({ [state]: !prevState[state] }));
  }

  render() {
    const state = this.state;

    return (
      <div>
        <Paper style={styles.paper} zDepth={3}>
          <div style={styles.div}>
            <div style={styles.buttonsLeft}>

              <ListOptions list={state.list} />

              <RadioButtonGroup onChange={(event) => this.handleChange(event, 'list')} name="listType" defaultSelected="black">
                <RadioButton
                  value="black"
                  label="Blacklist"
                  style={styles.radioButton}
                  />
                <RadioButton
                  value="white"
                  label="Whitelist"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
              <Checkbox
                onCheck={() => this.handleToggleAndChecks('clientValidation')}
                checked={this.state.clientValidation}
                label="Client Validation"
                style={styles.checkbox}
              />
              <Checkbox
                onCheck={() => this.handleToggleAndChecks('serverValidation')}
                label="Server Validation"
                style={styles.checkbox}
              />
              <Toggle
                onToggle={() => this.handleToggleAndChecks('encode')}
                style={styles.toggle}
                label="Encode"
                labelPosition="right"
              />
            </div>
            <div style={styles.io}>
              <TextField
                onChange={(event) => this.handleChange(event, 'input')}
                hintText="Input"
                fullWidth={true}
                multiLine={true}
              />
              <TextField
                hintText="Output"
                value={state.output}
                fullWidth={true}
                multiLine={true}
                underlineFocusStyle={styles.output}
              />

              <RaisedButton
                onClick={this.handleSubmit}
                primary={true}
                label="Test"
                fullWidth={true}
              />

            </div>
          </div>
        </Paper>

      </div>
    );
  }
}
