import React from 'react' //eslint-disable-line
import { FormGroup, ControlLabel, FormControl, Panel } from 'react-bootstrap'

export default function SortFilter (props) {
  var makeOption = function (x) {
    return <option key={x} value={x}>{x}</option>
  }
  return (
    <Panel header='Filtering and Sorting'>
      <FormGroup controlId='filterText'>
        <ControlLabel>Filter Text</ControlLabel>
        <FormControl componentClass='input' type='text' placeholder='Search' />
      </FormGroup>
      <FormGroup controlId='filterSelect'>
        <ControlLabel>Filter by Attribute</ControlLabel>
        <FormControl componentClass='select'>
          {props.select_values.map(makeOption)}
        </FormControl>
      </FormGroup>
      <FormGroup controlId='sortSelect'>
        <ControlLabel>Sort by Attribute</ControlLabel>
        <FormControl componentClass='select'>
          {props.select_values.map(makeOption)}
        </FormControl>
      </FormGroup>
    </Panel>
  )
}
