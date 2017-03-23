import React from 'react';
import Detail from './Details.jsx'
import { getSubreddits } from '../api.js'

export default function SubredditDetails (props) {
  const subreddit = getSubreddits().find(s => s.id === props.match.params.subreddit_id)
  return Detail({
    title: 'Subreddit - ' + subreddit.display_name,
    details: {
      'Name': subreddit.display_name,
      'Title': subreddit.title,
      'Subscribers': subreddit.subscribers,
      'Created': new Date(subreddit.created * 1000).toDateString()
    }
  })
}
