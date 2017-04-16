'use strict';

import React from 'react';
import { render } from 'react-dom';
import {Form, Col, FormControl, FormGroup, HelpBlock, Checkbox, Radio, ControlLabel, Button} from 'react-bootstrap';
// import Routes from './Routes';

// render(
//   // <Routes />,
//   <FormControl />,
//   document.getElementById('app')
// );

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

const formInstance = (
  <div className="container">
  <Form horizontal>

    <FormGroup>
      <Col smOffset={0} sm={4}>
        <Checkbox>Encoding</Checkbox>
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalEmail">
      <Col componentClass={ControlLabel} sm={2}>
        Input
      </Col>
      <Col sm={6}>
        <FormControl type="input" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup controlId="formHorizontalPassword">
      <Col componentClass={ControlLabel} sm={2}>
        Output
      </Col>
      <Col sm={6}>
        <FormControl type="output" placeholder="" />
      </Col>
    </FormGroup>

    <FormGroup>
      <Col smOffset={2} sm={10}>
        <Button type="submit">
          Enter
        </Button>
      </Col>
    </FormGroup>
  </Form>
</div>
);


// const formInstance = (
// <div className="container">
//   <form>
//     <FieldGroup
//       id="formControlsText"
//       type="text"
//       label="Text"
//       placeholder="Enter text"
//     />
//     <FieldGroup
//       id="formControlsEmail"
//       type="email"
//       label="Email address"
//       placeholder="Enter email"
//     />
//
//     <Checkbox checked readOnly>
//       Checkbox
//     </Checkbox>
//     <Radio checked readOnly>
//       Radio
//     </Radio>
//
//     <FormGroup>
//       <Checkbox inline>
//         1
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         2
//       </Checkbox>
//       {' '}
//       <Checkbox inline>
//         3
//       </Checkbox>
//     </FormGroup>
//     <FormGroup>
//       <Radio inline>
//         1
//       </Radio>
//       {' '}
//       <Radio inline>
//         2
//       </Radio>
//       {' '}
//       <Radio inline>
//         3
//       </Radio>
//     </FormGroup>
//
//     <FormGroup controlId="formControlsTextarea">
//       <ControlLabel>Textarea</ControlLabel>
//       <FormControl componentClass="textarea" placeholder="textarea" />
//     </FormGroup>
//
//     <Button type="submit">
//       Submit
//     </Button>
//   </form>
//   </div>
// );

render(formInstance, document.getElementById('app'));
