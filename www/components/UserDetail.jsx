import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
import { getUserByID, getModerators, getSubreddits } from '../api.js'

export default class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: props.match.params.user_id,
      user: {},
      modSub: {}
    }
  }

  componentDidMount () {
    var self = this
    getUserByID(function (user) {
      getModerators(function (mods) {
        var modSubId = mods.find(r => r.user_id === user.id).sr_id
        getSubreddits(function (subreddits) {
          var modSub = modSubId ? subreddits.find(s => s.id === modSubId) : {} || {}
          self.setState({
            user_id: self.state.user_id,
            user: user,
            modSub: modSub
          })
        })
      })
    }, self.state.user_id)
  }

  render () {
    return Detail({
      title: 'User - ' + this.state.user.name,
      details: {
        'Name': this.state.user.name,
        'Link Karma': this.state.user.link_karma,
        'Comment Karma': this.state.user.comment_karma,
        'Email': this.state.user.email,
        'Moderator of': {
          name: this.state.modSub.display_name,
          link: '/subreddits/detail/' + this.state.modSub.id
        },
        'Created': new Date(this.state.user.created * 1000).toDateString()
      }
    })
  }
}
