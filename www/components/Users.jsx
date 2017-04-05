import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getUsers } from '../api.js'

export default class Users extends React.Component {
  loadDataFromServer (options) {
        // Make request here using options
    var myp = {
      title: 'Users',
      select_values: ['name', 'comment_karma', 'link_karma', 'created_utc'],
      cards: getUsers().map(u => {
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
    return <RfGrid filterOptions={[{name: 'is_gold', value: false}, {name: 'verfied', value: false}]} loadDataFromServer={ops => this.loadDataFromServer(ops)} />
  }
}
