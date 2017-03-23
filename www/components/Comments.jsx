import React from 'react'
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'

export default function Comments () {
  return RfGrid({
    title: 'Comments',
    select_values: Object.keys(getComments()[0]),
    cards: getComments().map(c => {
      return {
        title: getUsers().find(u => u.id === c.author).name,
        subtitle: 'Commented: ' + moment(new Date(c.created * 1000)).format('LL'),
        link: '/comments/detail/' + c.id
      }
    })
  })
}
