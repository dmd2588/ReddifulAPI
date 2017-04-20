import React from 'react' //eslint-disable-line

import AppBar from 'material-ui/AppBar'
import Drawer from 'material-ui/Drawer'
import MenuItem from 'material-ui/MenuItem'
import FontIcon from 'material-ui/FontIcon'
import {grey50} from 'material-ui/styles/colors'
import TextField from 'material-ui/TextField'
import IconButton from 'material-ui/IconButton'

export default class NavBarAPI extends React.Component {
  constructor (props) {
    super(props)
    this.state = {open: false, searchString: ''}

    this.handleToggle = this.handleToggle.bind(this)
    this.handleClose = this.handleClose.bind(this)
  }

  handleToggle () {
    this.setState({open: !this.state.open})
  }

  handleClose () {
    this.setState({open: false})
  }

  handleSearchChange (that, event, text) {
    that.setState({searchString: text})
  }

  render () {
    const searchField = (
      <form action={'/search/' + encodeURIComponent(this.state.searchString)} method='get'>
        <IconButton href={'/search/' + encodeURIComponent(this.state.searchString)} disabled={!(this.state.searchString)}>
          <FontIcon className='material-icons'>search</FontIcon>
        </IconButton>
        <TextField hintText='Search' onChange={(event, text) => this.handleSearchChange(this, event, text)} />
      </form>
    )

    return (
      <div>
        <AppBar title={<div><span>Reddiful</span> <FontIcon className='fa fa-reddit-alien' color={grey50} /></div>} onLeftIconButtonTouchTap={this.handleToggle} iconElementRight={searchField} />
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
          <MenuItem onTouchTap={this.handleClose} href='/visual' leftIcon={<FontIcon className='material-icons'>camera_enhance</FontIcon>}>Visualization</MenuItem>
        </Drawer>
      </div>
    )
  }
}
