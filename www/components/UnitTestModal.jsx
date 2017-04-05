import React from 'react'
import Dialog from 'material-ui/Dialog'
import FlatButton from 'material-ui/FlatButton'
import RaisedButton from 'material-ui/RaisedButton'
import CircularProgress from 'material-ui/CircularProgress'
import { getTests } from '../api.js'

export default class UnitTestModal extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, unit_test_output: 'NULL'}

    this.handleOpen = this.handleOpen.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleOpen () {
    this.setState({open: true, unit_test_output: <CircularProgress size={80} thickness={5} />})
    getTests().then(function (res) {
      this.setState({open: true, unit_test_output: res.data})
    }.bind(this))
  }

  handleClose () {
    this.setState({open: false, unit_test_output: this.state.unit_test_output})
  }

  render () {
    const actions = [
      <FlatButton
        label='Close'
        primary
        keyboardFocused
        onTouchTap={this.handleClose}
      />
    ]

    return (
      <div>
        <RaisedButton label='Run Unit Tests' onTouchTap={this.handleOpen} />
        <Dialog
          title='Unit Test Results'
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
        >
          {this.state.unit_test_output}
        </Dialog>
      </div>
    )
  }
}
