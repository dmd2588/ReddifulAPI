import React from 'react' //eslint-disable-line
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getUsers } from '../api.js'

export default function Users () {
  return RfGrid({
    title: 'Users',
    select_values: Object.keys(getUsers()[0]),
    cards: getUsers().map(u => {
      return {
        title: u.name,
        subtitle: 'Joined: ' + moment(new Date(u.created * 1000)).format('LL'),
        link: '/users/detail/' + u.id
      }
    })
  })
}
