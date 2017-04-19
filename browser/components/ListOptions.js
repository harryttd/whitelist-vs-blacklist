'use strict';

import React, { Component } from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const names = [
  'Oliver Hansen',
  'Van Henry',
  'April Tucker',
  'Ralph Hubbard',
  'Omar Alexander',
  'Carlos Abbott',
  'Miriam Wagner',
  'Bradley Wilkerson',
  'Virginia Andrews',
  'Kelly Snyder',
];

/**
 * `SelectField` can handle multiple selections. It is enabled with the `multiple` property.
 */
export default class ListOptions extends Component {
  constructor(props) {
    super(props);

    this.state = {
      values: [],
    };

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event, index, values) {
    this.setState({ values });
  }

  menuItems(values) {
    return names.map((name) => (
      <MenuItem
        key={name}
        insetChildren={true}
        checked={values && values.includes(name)}
        value={name}
        primaryText={name}
      />
    ));
  }

  render() {
    const { values } = this.state;
    return (
      <SelectField
        multiple={true}
        hintText={`${this.props.list}list options`}
        value={values}
        onChange={this.handleChange}
      >
        {this.menuItems(values)}
      </SelectField>
    );
  }
}
