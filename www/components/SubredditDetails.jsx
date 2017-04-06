import React from 'react' //eslint-disable-line
import { getSubredditByID, getModerators, getSubredditPosts } from '../api.js'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const style = {
  margin: 50,
  display: 'block'
}

export default class SubredditDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit_id: props.match.params.subreddit_id,
      subreddit: {},
      posts: [],
      modUser: []
    }
    console.log(props.match.params.subreddit_id)
  }

  makePostListItem (v, index) {
    return (
      <div key={index}>
        <ListItem
          href={'/posts/detail/' + v.submission_id}
          primaryText={v.title}
          secondaryText={v.author}
        />
        <Divider inset />
      </div>
    )
  }

  makeModListItem (v, index) {
    return (
      <div key={index}>
        <ListItem
          href={'/users/detail/' + v.redditor_id}
          primaryText={v.name}
        />
        <Divider inset />
      </div>
    )
  }

  componentDidMount () {
    var self = this
    getSubredditByID(this.state.subreddit_id).then(function (res) {
      self.setState({
        subreddit_id: self.state.subreddit_id,
        subreddit: res.data,
        posts: self.state.posts,
        modUser: self.state.modUser
      })
      getSubredditPosts(self.state.subreddit_id).then(function (res) {
        self.setState({
          subreddit_id: self.state.subreddit_id,
          subreddit: self.state.subreddit,
          posts: res.data,
          modUser: self.state.modUser
        })
      })
      getModerators(self.state.subreddit_id).then(function (res) {
        self.setState({
          subreddit_id: self.state.subreddit_id,
          subreddit: self.state.subreddit,
          posts: self.state.posts,
          modUser: res.data
        })
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <h1>{'/r/' + this.state.subreddit.display_name}&nbsp;
              <small>{this.state.subreddit.created_utc}</small>
            </h1>
            <List>
              <Subheader>Details</Subheader>
              <ListItem
                primaryText='title'
                secondaryText={this.state.subreddit.title}
              />
              <Divider inset />
              <ListItem
                primaryText='accounts_active'
                secondaryText={this.state.subreddit.accounts_active}
              />
              <Divider inset />
              <ListItem
                primaryText='subscribers'
                secondaryText={this.state.subreddit.subscribers}
              />
              <Divider inset />
            </List>
            <List>
              <Subheader>Posts</Subheader>
              {this.state.posts.map(this.makePostListItem)}
            </List>
            <List>
              <Subheader>Mods</Subheader>
              {this.state.modUser.map(this.makeModListItem)}
            </List>
          </div>
        </Paper>
      </div>
    )
  }
}
