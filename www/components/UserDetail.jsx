import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
import Paper from 'material-ui/Paper'
import { getUserByID, getModerators, getSubreddits } from '../api.js'

const style = {
  margin: 50,
  display: 'inline-block'
}

export default class UserDetail extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      user_id: props.match.params.user_id,
      user: {},
      modSub: {}
    }
    console.log(props.match.params.user_id)
  }

  componentDidMount () {
    var self = this
    getUserByID(self.state.user_id).then(function (res) {
      var user = res.data
      console.log(user)
      getModerators({}, function (res) {
        // var modSubId = res.find(r => r.user_id === user.id).sr_id
        getSubreddits({}).then(function (res) {
          // var modSub = modSubId ? res.data.find(s => s.id === modSubId) : {} || {}
          self.setState({
            user_id: self.state.user_id,
            user: user,
            modSub: undefined // modSub
          })
        })
      })
    })
  }

  render () {
    var details = Detail({
      title: 'User - ' + this.state.user.name,
      details: {
        'Name': this.state.user.name,
        'Link Karma': this.state.user.link_karma,
        'Comment Karma': this.state.user.comment_karma,
        'Email': this.state.user.email,
        'Moderator of': {
          name: 'undefined',
          link: '/subreddits/detail/' + undefined
        },
        // 'Moderator of': {
        //  name: this.state.modSub.display_name,
        //  link: '/subreddits/detail/' + this.state.modSub.id
        // }

        'Created': (this.state.user.created_utc)
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
