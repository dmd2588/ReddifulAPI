import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getUsers } from '../api.js'

export default class Users extends React.Component {
  constructor () {
    super()
    this.state = {
      users: [{}]
    }
  }

  updateUsers (newUsers) {
    this.setState({
      users: newUsers
    })
  }

  componentDidMount () {
    getUsers(this.updateUsers.bind(this))
  }

  loadDataFromServer (options) {
        // Make request here using options
    var myp = {
      title: 'Users',
      select_values: Object.keys(this.state.users[0]),
      cards: this.state.users.map(u => {
        return {
          title: u.name,
          subtitle: 'Joined: ' + moment(new Date(u.created * 1000)).format('LL'),
          link: '/users/detail/' + u.id
        }
      })
    }

    return myp
  }
  render () {
    return <RfGrid key={this.state.users} loadDataFromServer={ops => this.loadDataFromServer(ops)} />
  }
}
