import React from 'react' // eslint-disable-line
import { getPostByID, getUserByID, getSubredditByID, getPostComments } from '../api.js'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const style = {
  margin: 50,
  display: 'block'
}

export default class PostDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post_id: props.match.params.post_id,
      post: {},
      author: {},
      subreddit: {'display_name': 'loading'},
      comments: []
    }
  }

  makeListItem (v, index) {
    return (
      <div key={index}>
        <ListItem
          href={'/comments/detail/' + v.comment_id}
          primaryText={<div><h3>{v.author}</h3><div dangerouslySetInnerHTML={{__html: v.body_html}} /></div>}
        />
        <Divider inset />
      </div>
    )
  }

  componentDidMount () {
    var self = this
    getPostByID(this.state.post_id).then(function (res) {
      self.setState({
        post_id: self.state.post_id,
        post: res.data,
        author: self.state.author,
        subreddit: self.state.subreddit,
        comments: self.state.comments
      })
      getUserByID(self.state.post.author_id).then(function (res) {
        self.setState({
          post_id: self.state.post_id,
          post: self.state.post,
          author: res.data,
          subreddit: self.state.subreddit,
          comments: self.state.comments
        })
      })
      getSubredditByID(self.state.post.subreddit_id).then(function (res) {
        self.setState({
          post_id: self.state.post_id,
          post: self.state.post,
          author: self.state.author,
          subreddit: res.data,
          comments: self.state.comments
        })
      })
      getPostComments(self.state.post_id).then(function (res) {
        self.setState({
          post_id: self.state.post_id,
          post: self.state.post,
          author: self.state.author,
          subreddit: self.state.subreddit,
          comments: res.data
        })
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <h1>
              <a href={'/subreddits/detail/' + this.state.subreddit.subreddit_id}>
                {'/r/' + this.state.subreddit.display_name}
              </a>
            </h1>
            <h2><a href={this.state.post.url}>{this.state.post.title}</a> <small>{this.state.post.created_utc}</small></h2>
            <List>
              <Subheader>Details</Subheader>
              <ListItem
                href={'/users/detail/' + this.state.author.redditor_id}
                primaryText='Author'
                secondaryText={this.state.author.name}
              />
              <Divider inset />
              <ListItem
                primaryText='Score'
                secondaryText={this.state.post.score}
              />
              <Divider inset />
              <ListItem
                primaryText='Upvote Ratio'
                secondaryText={this.state.post.upvote_ratio}
              />
              <Divider inset />
            </List>
            <List>
              <Subheader>Comments</Subheader>
              {this.state.comments.map(this.makeListItem)}
            </List>
          </div>
        </Paper>
      </div>
    )
  }
}
