import React from 'react' //eslint-disable-line
import Detail from './Details.jsx'
import { getUsers, getModerators, getSubreddits } from '../api.js'

export default function UserDetail (props) {
  const user = getUsers().find(u => u.id === props.match.params.user_id)
  const modSubId = getModerators().find(r => r.user_id === user.id).sr_id
  const modSub = modSubId ? getSubreddits().find(s => s.id === modSubId) : {} || {}

  return Detail({
    title: 'User - ' + user.name,
    details: {
      'Name': user.name,
      'Link Karma': user.link_karma,
      'Comment Karma': user.comment_karma,
      'Email': user.email,
      'Moderator of': {
        name: modSub.display_name,
        link: '/subreddits/detail/' + modSub.id
      },
      'Created': new Date(user.created * 1000).toDateString()
    }
  })
}
