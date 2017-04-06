import axios from 'axios'

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

export function getUserComments (rID) {
  return axios.get('/api/users/' + rID + '/comments')
}

export function getUserPosts (rID) {
  return axios.get('/api/users/' + rID + '/posts')
}

export function getModdedSubs (rID) {
  return axios.get('/api/users/' + rID + '/subs')
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

export function getPostComments (pID) {
  return axios.get('/api/posts/' + pID + '/comments')
}

export function getSubreddits (options) {
  return axios.get('/api/subreddits')
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
