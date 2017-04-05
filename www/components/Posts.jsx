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
          select_values: ['score', 'gilded', 'title', 'num_comments', 'author'],
          cards: posts.map(p => {
            return {
              title: p.title,
              subtitle: 'Author: ' + p.author,
              link: '/posts/detail/' + p.submission_id
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
        <RfGrid filterOptions={[{name: 'is_self', value: false}]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
      </div>
    )
  }
};
