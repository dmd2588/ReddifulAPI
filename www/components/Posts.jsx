import React from 'react' // eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getPosts, getUsers } from '../api.js'

export default class Posts extends React.Component {
  loadDataFromServer (callback, options) {
    getPosts(options, function (posts) {
      getUsers({}, function (users) {
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
        <RfGrid loadDataFromServer={ops => this.loadDataFromServer(ops)} />
      </div>
    )
  }
};
