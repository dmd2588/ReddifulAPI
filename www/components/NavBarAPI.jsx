import React from 'react' //eslint-disable-line

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import {grey50} from 'material-ui/styles/colors'

export default class NavBarAPI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false}

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    console.log(this)
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  render () {
    return (
      <div>
        <AppBar title={<div><span>Reddiful</span> <FontIcon className='fa fa-reddit-alien' color={grey50} /></div>} onLeftIconButtonTouchTap={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={(open) => this.setState({open})}
        >
          <MenuItem onTouchTap={this.handleClose} href='/home' leftIcon={<FontIcon className='material-icons'>home</FontIcon>}>Home</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/about' leftIcon={<FontIcon className='material-icons'>info</FontIcon>}>About</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/users' leftIcon={<FontIcon className='material-icons'>account_box</FontIcon>}>Redditors</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/subreddits' leftIcon={<FontIcon className='material-icons'>theaters</FontIcon>}>Subreddits</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/posts' leftIcon={<FontIcon className='material-icons'>list</FontIcon>}>Submissions</MenuItem>
          <MenuItem onTouchTap={this.handleClose} href='/comments' leftIcon={<FontIcon className='material-icons'>comment</FontIcon>}>Comments</MenuItem>
        </Drawer>
      </div>
    )
  }
}
