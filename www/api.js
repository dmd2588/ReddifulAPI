import axios from 'axios'

const moderators = [
  {'user_id': 'hh8mr', 'sr_id': '3imv0'},
  {'user_id': '74344', 'sr_id': '2tex6'},
  {'user_id': '4fer6', 'sr_id': '2qh55'}
]

export function getUsers (options, callback) {
  axios.get('/api/users')
  .then(res => callback(res.data))
}

export function getUserByID (ID, callback) {
  axios.get('/api/users/' + ID)
  .then(res => callback(res.data))
}

// export function getUserRelated (user_id) {
//   var dat = {'subreddits': [],
//     'posts': [],
//     'comments': []}
//   for (var i in moderators) {
//     if (moderators[i].user_id == user_id) {
//       for (var j in subreddits) {
//         if (subreddits[j].id == moderators[i].sr_id) {
//           dat.subreddits.push(subreddits[j])
//         }
//       }
//     }
//   }
//   for (var i in posts) {
//     if (posts[i].author == user_id) {
//       dat.posts.push(posts[i])
//     }
//   }
//   for (var i in comments) {
//     if (comments[i].author == user_id) {
//       dat.comments.push(comments[i])
//     }
//   }
//   return dat
// }

export function getComments (options, callback) {
  axios.get('/api/comments')
  .then(res => callback(res.data))
}

export function getCommentByID (ID, callback) {
  axios.get('/api/comments/' + ID)
  .then(res => callback(res.data))
}

// export function getCommentRelated (comment_id) {
//   var dat = {'subreddits': [],
//     'posts': [],
//     'users': []}
//   var user_id = ''
//   var post_id = ''
//   var subreddit_id = ''
//   for (var i in comments) {
//     if (comments[i].id == comment_id) {
//       user_id = comment[i].author
//       post_id = comment[i].link_id
//       subreddit_id = comment[i].subreddit_id
//       break
//     }
//   }
//   for (var i in users) {
//     if (users[i].id == user_id) {
//       dat.users.push(users[i])
//       break
//     }
//   }
//   for (var i in posts) {
//     if (posts[i].id == post_id) {
//       dat.posts.push(posts[i])
//       break
//     }
//   }
//   for (var i in subreddits) {
//     if (subreddits[i].id == subreddit_id) {
//       dat.subreddits.push(subreddits[i])
//       break
//     }
//   }
//   return dat
// }

export function getPosts (options, callback) {
  axios.get('/api/posts')
  .then(res => callback(res.data))
}

export function getPostByID (ID, callback) {
  axios.get('/api/posts/' + ID)
  .then(res => callback(res.data))
}

// export function getPostRelated (post_id) {
//   var dat = {'subreddits': [],
//     'comments': [],
//     'users': []}
//   var user_id = ''
//   var subreddit_id = ''
//   for (var i in posts) {
//     if (posts[i].id == post_id) {
//       user_id = posts[i].author
//       subreddit_id = posts[i].subreddit_id
//       break
//     }
//   }
//   for (var i in users) {
//     if (users[i].id == user_id) {
//       dat.users.push(users[i])
//       break
//     }
//   }
//   for (var i in comments) {
//     if (comments[i].link_id == post_id) {
//       dat.comments.push(comments[i])
//     }
//   }
//   for (var i in subreddits) {
//     if (subreddits[i].id == subreddit_id) {
//       dat.subreddits.push(subreddits[i])
//       break
//     }
//   }
//   return dat
// }

export function getSubreddits (options, callback) {
  axios.get('/api/subreddits')
  .then(res => callback(res.data))
}

export function getSubredditByID (ID, callback) {
  axios.get('/api/subreddits/' + ID)
  .then(res => callback(res.data))
}

// export function getSubredditRelated (subreddit_id) {
//   var dat = {'posts': [],
//     'comments': [],
//     'users': []}
//   var user_id = ''
//   var subreddit_id = ''
//   for (var i in moderators) {
//     if (moderators[i].sr_id == subreddit_id) {
//       for (var j in users) {
//         if (users[j].id == moderators[i].user_id) {
//           dat.users.push(users[j])
//         }
//       }
//     }
//   }
//   for (var i in comments) {
//     if (comments[i].subreddit_id == subreddit_id) {
//       dat.comments.push(comments[i])
//     }
//   }
//   for (var i in posts) {
//     if (posts[i].subreddit_id == subreddit_id) {
//       dat.posts.push(posts[i])
//     }
//   }
//   return dat
// }

export function getModerators (options, callback) {
  callback(moderators)
}
