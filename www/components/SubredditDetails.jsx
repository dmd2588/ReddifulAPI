import React from 'react';
import Detail from './Details.jsx'
import { getSubreddits, getModerators, getUsers } from '../api.js'

export default function SubredditDetails (props) {
  const subreddit = getSubreddits().find(s => s.id === props.match.params.subreddit_id)
  const modUserId = getModerators().find(r => r.sr_id === subreddit.id).user_id
  const modUser = getUsers().find(u => u.id === modUserId)

  return Detail({
    title: 'Subreddit - ' + subreddit.display_name,
    details: {
      'Name': subreddit.display_name,
      'Title': subreddit.title,
      'Subscribers': subreddit.subscribers,
      'Moderator': {
        name: modUser.name,
        link: '/users/detail/' + modUser.id
      },
      'Created': new Date(subreddit.created * 1000).toDateString()
    }
  })
}
