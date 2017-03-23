import React from 'react';
import Detail from './Details.jsx'
import { getPosts, getUsers, getSubreddits } from '../api.js'

export default function PostDetails (props) {
  const post = getPosts().find(p => p.id === props.match.params.post_id)
  const author = getUsers().find(u => u.id === post.author) || {}
  const subreddit = getSubreddits().find(s => s.id === post.subreddit_id) || {}

  return Detail({
    title: 'Post - ' + post.title,
    details: {
      'Title': post.title,
      'Score': post.score,
      'Subreddit': subreddit.display_name || 'NOT_FOUND - FIXME',
      'Author': author.name,
      'Created': new Date(post.created * 1000).toDateString()
    }
  })
}
