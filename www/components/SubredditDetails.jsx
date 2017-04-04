import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
import { getSubredditByID, getModerators, getUserByID } from '../api.js'

export default class SubredditDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit_id: props.match.params.subreddit_id,
      subreddit: {},
      modUser: {}
    }
  }

  componentDidMount () {
    var self = this
    getSubredditByID(this.state.subreddit_id, function (subreddit) {
      getModerators({}, function (mods) {
        var modUserId = mods.find(r => r.sr_id === subreddit.id).user_id
        getUserByID(modUserId, function (user) {
          self.setState({
            subreddit_id: self.state.subreddit_id,
            subreddit: subreddit,
            modUser: user
          })
        })
      })
    })
  }

  render () {
    return Detail({
      title: 'Subreddit - ' + this.state.subreddit.display_name,
      details: {
        'Name': this.state.subreddit.display_name,
        'Title': this.state.subreddit.title,
        'Subscribers': this.state.subreddit.subscribers,
        'Moderator': {
          name: this.state.modUser.name,
          link: '/users/detail/' + this.state.modUser.id
        },
        'Created': new Date(this.state.subreddit.created * 1000).toDateString()
      }
    })
  }
}
