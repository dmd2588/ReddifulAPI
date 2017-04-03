import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getUsers } from '../api.js'

export default class Users extends React.Component {
  loadDataFromServer (callback) {
    getUsers(function (users) {
      var myp = {
        title: 'Users',
        select_values: Object.keys(users[0]),
        cards: users.map(u => {
          return {
            title: u.name,
            subtitle: 'Joined: ' + moment(new Date(u.created * 1000)).format('LL'),
            link: '/users/detail/' + u.id
          }
        })
      }

      callback(myp)
    })
  }

  render () {
    return <RfGrid loadDataFromServer={ops => this.loadDataFromServer(ops)} />
  }
}
