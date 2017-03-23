import React from 'react'
import moment from 'moment'
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'

export default function Posts () {
  return RfGrid({
    title: 'Posts',
    select_values: Object.keys(getPosts()[0]),
    cards: getPosts().map(p => {
      return {
        title: p.title,
        subtitle: 'Author: ' + (getUsers().find(u => u.id === p.author) || {}).name,
        link: '/posts'
      }
    })
  })
}
