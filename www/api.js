import axios from 'axios'

function constructQuery (base, options) {
  var first = true
  if (!options) {
    return base
  }
  Object.keys(options).forEach((key) => {
    if (options[key] !== '') {
      base += (first ? '?' : '&') + key + '=' + options[key]
      first = false
    }
  })
  console.log(options)
  console.log(base)
  return base
}

export function getImages () {
  return axios.get('/api/top_images')
}

export function getTests () {
  return axios.get('/api/tests')
}

export function getUsers (options) {
  var query = constructQuery('/api/users', options)
  return axios.get(query)
}

export function getUserByID (ID) {
  return axios.get('/api/users/' + ID)
}

export function getUserComments (rID) {
  return axios.get('/api/users/' + rID + '/comments')
}

export function getUserPosts (rID) {
  return axios.get('/api/users/' + rID + '/posts')
}

export function getModdedSubs (rID) {
  return axios.get('/api/users/' + rID + '/subs')
}

export function getComments (options) {
  var query = constructQuery('/api/comments', options)
  return axios.get(query)
}

export function getCommentByID (ID) {
  return axios.get('/api/comments/' + ID)
}

export function getPosts (options) {
  var query = constructQuery('/api/posts', options)
  return axios.get(query)
}

export function getPostByID (ID) {
  return axios.get('/api/posts/' + ID)
}

export function getPostComments (pID) {
  return axios.get('/api/posts/' + pID + '/comments')
}

export function getSubreddits (options) {
  var query = constructQuery('/api/subreddits', options)
  return axios.get(query)
}

export function getSubredditByID (ID) {
  return axios.get('/api/subreddits/' + ID)
}

export function getSubredditPosts (subID) {
  return axios.get('/api/subreddits/' + subID + '/posts')
}

export function getModerators (subID) {
  return axios.get('/api/subreddits/' + subID + '/mods')
}
