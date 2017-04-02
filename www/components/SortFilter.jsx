import React from 'react' //eslint-disable-line
import {FormGroup, ControlLabel, FormControl, Panel, Button} from 'react-bootstrap'

export default function SortFilter (props) {
  var makeOption = function (x) {
    return <option key={x} value={x}>{x}</option>
  }

  var onApply = function () {
    let sortSelect = ''
    let filterSelect = ''
    let filterText = ''
    console.log('clicked')
    console.log(sortSelect.value)
    console.log(filterSelect.value)
    console.log(filterText.value)
    props.updateGrid()
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
      <Button type='submit' onClick={onApply}>Apply</Button>

    </Panel>
  )
}
