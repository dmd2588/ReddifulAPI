import React from 'react';
import Detail from './Details.jsx'
import { getUsers, getPosts, getComments } from '../api.js'

export default function CommentDetails (props) {
  const comment = getComments().find(c => c.id === props.match.params.comment_id)
  const author = getUsers().find(u => u.id === comment.author) || {}
  const post = getPosts().find(p => p.id === comment.link_id) || {}

  return Detail({
    title: 'Comment',
    details: {
      'Author': {
        name: author.name,
        link: '/users/detail/' + author.id
      },
      'Post': {
        name: post.title,
        link: '/posts/detail/' + post.id
      },
      'Created': new Date(comment.created * 1000).toDateString(),
      'Edited': comment.edited ? 'Yes' : 'No',
      'Gilds': comment.gilded,
      'Score': comment.score,
      'Body': comment.body
    }
  })
}
