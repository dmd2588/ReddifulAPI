import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
import { getUserByID, getPostByID, getCommentByID } from '../api.js'

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
    getCommentByID(this.state.comment_id, function (comment) {
      getUserByID(comment.author, function (author) {
        getPostByID(comment.link_id, function (post) {
          self.setState({
            comment_id: self.state.comment_id,
            comment: comment,
            author: author,
            post: post
          })
        })
      })
    })
  }

  render () {
    return Detail({
      title: 'Comment',
      details: {
        'Author': {
          name: this.state.author.name,
          link: '/users/detail/' + this.state.author.id
        },
        'Post': {
          name: this.state.post.title,
          link: '/posts/detail/' + this.state.post.id
        },
        'Created': new Date(this.state.comment.created * 1000).toDateString(),
        'Edited': this.state.comment.edited ? 'Yes' : 'No',
        'Gilds': this.state.comment.gilded,
        'Score': this.state.comment.score,
        'Body': this.state.comment.body
      }
    })
  }
}
