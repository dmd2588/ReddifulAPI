import React from 'react' //eslint-disable-line
import { getUserByID, getPostByID, getCommentByID } from '../api.js'
import Paper from 'material-ui/Paper'
import {List, ListItem} from 'material-ui/List'
import Divider from 'material-ui/Divider'
import Subheader from 'material-ui/Subheader'

const style = {
  margin: 50,
  display: 'block'
}

export default class CommentDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      comment_id: props.match.params.comment_id,
      comment: {},
      author: {},
      post: {}
    }
  }

  componentDidMount () {
    var self = this
    getCommentByID(this.state.comment_id).then(function (res) {
      self.setState({
        comment_id: self.state.comment_id,
        comment: res.data,
        author: self.state.author,
        post: self.state.post
      })
      getUserByID(self.state.comment.author_id).then(function (res) {
        self.setState({
          comment_id: self.state.comment_id,
          comment: self.state.comment,
          author: res.data,
          post: self.state.post
        })
      })
      getPostByID(self.state.comment.link_id).then(function (res) {
        self.setState({
          comment_id: self.state.comment_id,
          comment: self.state.comment,
          author: self.state.author,
          post: res.data
        })
      })
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <h1>{this.state.comment.created_utc}</h1>
            <List>
              <Subheader>Details</Subheader>
              <ListItem
                primaryText={<div dangerouslySetInnerHTML={{__html: this.state.comment.body_html}} />}
              />
              <Divider inset />
              <ListItem
                primaryText='score'
                secondaryText={this.state.comment.score}
              />
              <Divider inset />
              <ListItem
                primaryText='gilded'
                secondaryText={this.state.comment.gilded}
              />
              <Divider inset />
              <ListItem
                primaryText='edited'
                secondaryText={this.state.comment.edited}
              />
              <Divider inset />
              <ListItem
                primaryText='author'
                href={'/users/detail/' + this.state.comment.author_id}
                secondaryText={this.state.comment.author}
              />
              <Divider inset />
              <ListItem
                primaryText='post'
                href={'/posts/detail/' + this.state.comment.link_id}
                secondaryText={this.state.post.title}
              />
              <Divider inset />
            </List>
          </div>
        </Paper>
      </div>
    )
  }
}
