import axios from 'axios'

const moderators = [
  {'user_id': 'hh8mr', 'sr_id': '3imv0'},
  {'user_id': '74344', 'sr_id': '2tex6'},
  {'user_id': '4fer6', 'sr_id': '2qh55'}
]

export function getImages () {
  return axios.get('/api/top_images')
}

export function getTests () {
  return axios.get('/api/tests')
}

export function getUsers (options) {
   // ?page=2&sortOrder=Desc&sortOn=link_karma'
  return axios.get('/api/users')
}

export function getUserByID (ID) {
  return axios.get('/api/users/' + ID)
}

export function getComments (options, callback) {
  return axios.get('/api/comments')
}

export function getCommentByID (ID) {
  return axios.get('/api/comments/' + ID)
}

export function getPosts (options) {
  return axios.get('/api/posts')
}

export function getPostByID (ID) {
  return axios.get('/api/posts/' + ID)
}

export function getSubreddits (options) {
  return axios.get('/api/subreddits')
}

export function getSubredditByID (ID) {
  return axios.get('/api/subreddits/' + ID)
}

export function getModerators (options, callback) {
  callback(moderators)
}
