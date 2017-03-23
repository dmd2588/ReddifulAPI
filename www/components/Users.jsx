import React from 'react'
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getUsers } from '../api.js'

export default function Users () {
  return RfGrid({
    title: 'Users',
    cards: getUsers().map(u => {
      return {
        title: u.name,
        subtitle: 'Joined: ' + moment(new Date(u.created)).format('LL'),
        link: '/users/detail/' + u.id
      }
    })
  })
}
