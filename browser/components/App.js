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
const { blacklist } = require('../../utils/blacklist');
const blacklistTitles = Object.values(blacklist).map(func => func.title);

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      input: '',
      output: '',
      list: 'black',
      selectedOptions: [],
      clientValidation: true,
      serverValidation: false,
      encode: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggleAndChecks = this.handleToggleAndChecks.bind(this);
    this.clickOption = this.clickOption.bind(this);
  }

  handleSubmit() {
    const { list, clientValidation, serverValidation, encode, selectedOptions } = this.state;
    let { input } = this.state;

    const validators = Object.values(blacklist).filter(func => selectedOptions.includes(func.title));

    if (clientValidation) {
      validators.forEach(func => input = func(input));
      if (encode) input = entityEncoder.htmlEncode(input);
    }

    if (serverValidation) {
      axios.post('/', { input, list, encode, selectedOptions })
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

  clickOption(event, key, selectedOptions) {
    this.setState({ selectedOptions });
  }

  render() {
    const state = this.state;

    return (
      <div>
        <Paper style={styles.paper} zDepth={3}>
          <div style={styles.div}>
            <div style={styles.buttonsLeft}>

              <ListOptions list={state.list} selectedOptions={state.selectedOptions} options={blacklistTitles} clickOption={this.clickOption} />

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
