import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
// import { getSubredditByID, getModerators, getUserByID } from '../api.js'
import { getSubredditByID } from '../api.js'
import Paper from 'material-ui/Paper'

const style = {
  margin: 50,
  display: 'inline-block'
}

export default class SubredditDetails extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      subreddit_id: props.match.params.subreddit_id,
      subreddit: {},
      modUser: {}
    }
    console.log(props.match.params.subreddit_id)
  }

  componentDidMount () {
    var self = this
    getSubredditByID(this.state.subreddit_id).then(function (res) {
      var subreddit = res.data

      self.setState({
        subreddit_id: self.state.subreddit_id,
        subreddit: subreddit,
        modUser: 'undefined'
      })
     // getModerators({}, function (res) {
        // var modUserId = res.find(r => r.sr_id === subreddit.id).user_id
       // getUserByID(modUserId).then(function (res) {
        //  var user = res.data
        //  self.setState({
        //    subreddit_id: self.state.subreddit_id,
        //    subreddit: subreddit,
        //    modUser: user
        //  })
       // })
     // })
    })
  }

  render () {
    var details = Detail({
      title: 'Subreddit - ' + this.state.subreddit.display_name,
      details: {
        'Name': this.state.subreddit.display_name,
        'Title': this.state.subreddit.title,
        'Subscribers': this.state.subreddit.subscribers,
        'Moderator': {
          name: 'undefined',
          link: '/users/detail/' + undefined
        },
        // 'Moderator': {
        //  name: this.state.modUser.name,
        //  link: '/users/detail/' + this.state.modUser.id
        // },

        'Created': this.state.subreddit.created_utc
      }
    })
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container'>
            {details}
          </div>
        </Paper>
      </div>
    )
  }
}
