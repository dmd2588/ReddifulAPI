import React from 'react' // eslint-disable-line
import Detail from './Details.jsx'
import { getPostByID, getUserByID, getSubredditByID } from '../api.js'

export default class PostDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      post_id: props.match.params.post_id,
      post: {},
      author: {},
      subreddit: {}
    }
  }

  componentDidMount () {
    var self = this
    getPostByID(this.state.post_id, function (post) {
      getUserByID(post.author, function (author) {
        getSubredditByID(post.subreddit_id, function (subreddit) {
          self.setState({
            post_id: self.state.post_id,
            post: post,
            author: author,
            subreddit: subreddit
          })
        })
      })
    })
  }

  render () {
    return Detail({
      title: 'Post - ' + this.state.post.title,
      details: {
        'Title': this.state.post.title,
        'Score': this.state.post.score,
        'Subreddit': {
          name: this.state.subreddit.display_name || 'NOT_FOUND - FIXME',
          link: '/subreddits/detail/' + this.state.subreddit.id
        },
        'Author': {
          name: this.state.author.name,
          link: '/users/detail/' + this.state.author.id
        },
        'Created': new Date(this.state.post.created * 1000).toDateString()
      }
    })
  }
}
