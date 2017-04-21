'use strict';

import React from 'react';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

const ListOptions = ({ list, selectedOptions, options, clickOption }) => (
  <SelectField
    autoWidth={true}
    multiple={true}
    hintText={`${list}list options`}
    value={selectedOptions}
    onChange={clickOption}
  >
  {
    options.map(option => (
      <MenuItem
        key={option}
        insetChildren={true}
        checked={selectedOptions && selectedOptions.includes(option)}
        value={option}
        primaryText={option}
      />
    ))
  }
  </SelectField>
);

export default ListOptions;
