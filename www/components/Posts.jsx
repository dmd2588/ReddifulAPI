import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'

export default class Posts extends React.Component {
  loadDataFromServer (options, callback) {
    getPosts(options).then(function (res) {
      var posts = res.data
      getUsers({}).then(function (res) {
        var users = res.data
        var myp = {
          title: 'Posts',
          select_values: Object.keys(posts[0]),
          cards: posts.map(p => {
            return {
              title: p.title,
              subtitle: 'Author: ' + (users.find(u => u.id === p.author) || {}).name,
              link: '/posts/detail/' + p.id
            }
          })
        }

        callback(myp)
      })
    })
  }

  render () {
    return (
      <div>
        <RfGrid loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
      </div>
    )
  }
};
