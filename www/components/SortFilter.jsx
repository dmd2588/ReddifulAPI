import React from 'react' //eslint-disable-line
import {FormGroup, ControlLabel, FormControl, Panel, Button, Checkbox} from 'react-bootstrap'

export default class SortFilter extends React.Component {
  constructor (props) {
    super(props)

    if (this.props.filterOptions.length !== 0) {
      this.state = Object.assign.apply(Object, this.props.filterOptions.map(function (c) {
        var temp = {}
        temp[c.name] = c.value
        return temp
      }))
    } else {
      this.state = {}
    }

    this.handleChange = this.handleChange.bind(this)
  }

  makeOption (x) {
    return <option key={x} value={x}>{x}</option>
  }

  handleChange (evt) {
    console.log(evt.target.checked)
    this.setState({ selfPost: evt.target.checked })
  }

  onApply () {
    // let sortSelect = ''
    // let filterText = ''
    console.log('clicked')
    for (var property in this.state) {
      if (this.state.hasOwnProperty(property)) {
        console.log(property)
      }
    }
    // props.updateGrid()
  }
  render () {
    return (
      <Panel header='Filtering and Sorting'>
        <FormGroup controlId='filterText'>
          <ControlLabel>Filter Text</ControlLabel>
          <FormControl componentClass='input' type='text' placeholder='Search' />
        </FormGroup>
        <ControlLabel>Filter by Attribute</ControlLabel>

        {this.props.filterOptions.map(c => (
          <Checkbox key={Math.random().toString(16).substr(2)} checked={this.state[c.name]} onChange={this.handleChange} >
            {c.name}
          </Checkbox>
              ))}

        <FormGroup controlId='sortSelect'>
          <ControlLabel>Sort by Attribute</ControlLabel>
          <FormControl componentClass='select'>
            {this.props.select_values.map(this.makeOption)}
          </FormControl>
        </FormGroup>
        <Button onClick={this.onApply.bind(this)}>Apply</Button>

      </Panel>
    )
  }
}
