'use strict';

import React from 'react';
import axios from 'axios';

import styles from './styles';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';
import Toggle from 'material-ui/Toggle';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

export default class App extends React.Component {
  constructor() {
    super();

    this.state = {
      input: '',
      output: '',
      list: 'black',
      encode: 'off'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleSubmit() {
    const { input } = this.state;
    axios.post('/', { input })
    .then(res => res.data)
    .then(output => this.setState({ output }))
    .catch(err => console.error.bind(console)(err));
  }

  handleChange(event, state) {
    this.setState({ [state]: event.target.value });
  }

  handleToggle() {
    const { encode } = this.state;
    this.setState({ encode: encode === 'off' ? 'on' : 'off' });
  }

  render() {
    return (
      <div>
        <Paper style={styles.paper} zDepth={3}>
          <div style={styles.div}>
            <div style={styles.buttonsLeft}>
              <RadioButtonGroup onChange={(event) => this.handleChange(event, 'list')} name="listOption" defaultSelected="black">
                <RadioButton
                  value="white"
                  label="Whitelist"
                  style={styles.radioButton}
                />
                <RadioButton
                  value="black"
                  label="Blacklist"
                  style={styles.radioButton}
                />
              </RadioButtonGroup>
              <Toggle
                onToggle={this.handleToggle}
                style={styles.toggle}
                label="Encode"
                labelPosition="right"
              />
            </div>
            <div style={styles.io}>
              <form onSubmit={(event) => {
                  event.preventDefault();
                  this.handleSubmit(event.target);
                }
              }>
                <TextField
                  onChange={(event) => this.handleChange(event, 'input')}
                  hintText="Input"
                  fullWidth={true}
                  type="text"
                  />
              </form>
              <TextField
                hintText="Output"
                value={this.state.output}
                fullWidth={true}
                underlineFocusStyle={styles.output}
                type="text"
              />
            </div>
          </div>
        </Paper>
      </div>
    );
  }
}
