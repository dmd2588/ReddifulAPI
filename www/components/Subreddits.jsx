import React from 'react'
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getSubreddits } from '../api.js'

export default function Users () {
  return RfGrid({
    title: 'Subreddits',
    select_values: Object.keys(getSubreddits()[0]),
    cards: getSubreddits().map(s => {
      console.log('S', s.display_name, s)
      return {
        title: s.display_name,
        subtitle: 'Created: ' + moment(new Date(s.created * 1000)).format('LL'),
        link: '/subreddits'
      }
    })
  })
}
