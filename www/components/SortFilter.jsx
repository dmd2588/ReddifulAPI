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
      }), {order_by: ''})
    } else {
      this.state = {}
    }
    console.log(this.state)
    // this.handleChange = this.handleChange.bind(this)
  }

  makeOption (x) {
    return <option key={x} value={x}>{x}</option>
  }

  handleChange (name, evt) {
    // console.log(uniqueName)
    console.log(name)
    console.log(evt.target.checked)
    var temp = {}
    temp[name] = evt.target.checked
    this.setState(temp)
  }

  onApply () {
    // let filterText = ''
    var temp = {}
    console.log('clicked')
    for (var property in this.state) {
      if (this.state.hasOwnProperty(property)) {
        if (property !== "order_by"){
            temp['filter_' + property] = this.state[property]

        }
      }
    }
    console.log(this.state)

    if (this.state.order_by === '<default>') {
      this.state.order_by = ''
    }
    temp['order_by'] = this.state.order_by
    this.props.updateGrid(temp)
  }

  handleSelect (e) {
    console.log(e.target.value)
    this.setState({order_by: e.target.value})
  }
  render () {
    return (
      <Panel header='Filtering and Sorting'>
        <FormGroup controlId='filterText'>
          <ControlLabel>Filter Text</ControlLabel>
          <FormControl componentClass='input' type='text' placeholder='Search' />
        </FormGroup>
        <ControlLabel>Filter by Attribute</ControlLabel>

        {this.props.filterOptions.map(c => {
          return (
            <Checkbox label={c.name} key={Math.random().toString(16).substr(2)} checked={this.state[c.name]} onChange={(e) => this.handleChange(c.name, e)} >
              {c.name}
            </Checkbox>)
        })}

        <FormGroup controlId='sortSelect'>
          <ControlLabel>Sort by Attribute</ControlLabel>
          <FormControl type='text' componentClass='select' onChange={this.handleSelect.bind(this)}>
            {this.props.select_values.map(this.makeOption)}
          </FormControl>
        </FormGroup>
        <Button onClick={this.onApply.bind(this)}>Apply</Button>

      </Panel>
    )
  }
}
