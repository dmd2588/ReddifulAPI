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
    getPostByID(this.state.post_id).then(function (res) {
      var post = res.data
      getUserByID(post.author_id).then(function (res) {
        var author = res.data
        console.log(author.redditor_id)
        getSubredditByID(post.subreddit_id).then(function (res) {
          var subreddit = res.data
          self.setState({
            post_id: self.state.post_id,
            post: post,
            author: author,
            subreddit: subreddit
          })
        })
      })
    })
    console.log(self.state.author)
  }

  render () {
    return Detail({
      title: 'Post - ' + this.state.post.title,
      details: {
        'Title': this.state.post.title,
        'Score': this.state.post.score,
        'Subreddit': {
          name: this.state.subreddit.display_name || 'NOT_FOUND - FIXME',
          link: '/subreddits/detail/' + this.state.subreddit.subreddit_id
        },
        'Author': {
          name: this.state.author.name,
          link: '/users/detail/' + this.state.author.redditor_id
        },

        'Created': this.state.post.created_utc
      }
    })
  }
}
