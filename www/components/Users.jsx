import React from 'react' //eslint-disable-line
import RfGrid from './RfGrid.jsx'
import Paper from 'material-ui/Paper'
import { getUsers } from '../api.js'

const style = {
  margin: 50,
  display: 'block'
}

export default class Users extends React.Component {
  constructor (props) {
    super(props)
    this.state = {ops: {}}
  }
  retainOptions (ops) {
    console.log('options')
    console.log(ops)
    this.setState({ops: ops})
    console.log(this.state.ops)
    return this.state.ops
  }
  loadDataFromServer (options, callback) {
    getUsers(options).then(function (res) {
      var users = res.data
      var myp = {
        title: 'Users',
        select_values: ['<default>', 'name', 'comment_karma', 'link_karma', 'created_utc'],
        cards: users.map(u => {
          return {
            title: u.name,
            subtitle: 'Joined: ' + u.created_utc,
            link: '/users/detail/' + u.redditor_id,
            preview: '/dist/images/ic_face_black_48dp_2x.png',
            icon: '/dist/images/ic_account_circle_black_48dp_2x.png',
            customClass: 'iconMedia'
          }
        })
      }

      callback(myp)
    })
  }

  render () {
    return (
      <div className='container'>
        <Paper style={style} zDepth={2}>
          <div className='container-no-width'>
            <RfGrid retainOptions={(o) => this.retainOptions(o)} filterOptions={[{name: 'is_gold', value: false}, {name: 'verified', value: false}]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
          </div>
        </Paper>
      </div>
    )
  }
}
