import React from 'react';
import Detail from './Details.jsx'
import { getUsers } from '../api.js'

export default function UserDetail (props) {
  const user = getUsers().find(u => u.id === props.match.params.user_id)
  return Detail({
    title: 'User - ' + user.name,
    details: {
      'Name': user.name,
      'Link Karma': user.link_karma,
      'Comment Karma': user.comment_karma,
      'Email': user.email,
      'Created': new Date(user.created * 1000).toDateString()
    }
  })
}
