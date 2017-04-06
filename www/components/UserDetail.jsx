import React from 'react' //eslint-disable-line
import Paper from 'material-ui/Paper'
import { getUserByID, getModdedSubs } from '../api.js'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const style = {
  margin: 50,
  display: 'block'
}

export default class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: props.match.params.user_id,
      user: {},
      modSub: []
    }
    console.log(props.match.params.user_id)
  }

  makeListItem (v, index) {
    return (
      <div key={index}>
        <ListItem
          href={'/subreddits/detail/' + v.subreddit_id}
          primaryText={'/r/' + v.display_name}
        />
        <Divider inset />
      </div>
    )
  }

  componentDidMount () {
    var self = this
    getUserByID(self.state.user_id).then(function (res) {
      self.setState({
        user_id: self.state.user_id,
        user: res.data,
        modSub: self.state.modSub
      })
      getModdedSubs(self.state.user_id).then(function (res) {
        self.setState({
          user_id: self.state.user_id,
          user: self.state.user,
          modSub: res.data
        })
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <h1>{this.state.user.name}<small> {this.state.user.created_utc}</small></h1>
          </div>
          <List>
            <Subheader>Details</Subheader>
            <ListItem
              primaryText='comment_karma'
              secondaryText={this.state.user.comment_karma}
            />
            <Divider inset />
            <ListItem
              primaryText='link_karma'
              secondaryText={this.state.user.link_karma}
            />
            <Divider inset />
            <ListItem
              primaryText='is_gold'
              secondaryText={this.state.user.is_gold}
            />
            <Divider inset />
            <ListItem
              primaryText='verified'
              secondaryText={this.state.user.verified}
            />
            <Divider inset />
          </List>
          <List>
            <Subheader>Modded Subs</Subheader>
            {this.state.modSub.map(this.makeListItem)}
          </List>
        </Paper>
      </div>
    )
  }
}
