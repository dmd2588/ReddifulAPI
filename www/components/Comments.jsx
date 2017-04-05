import React from 'react' //eslint-disable-line
import RfGrid from './RfGrid.jsx'
import { getComments, getUsers } from '../api.js'

export default class Users extends React.Component {
  loadDataFromServer (options, callback) {
    getComments(options).then(function (res) {
      var comments = res.data
      getUsers({}).then(function (res) {
        var users = res.data
        var myp = {
          title: 'Comments',
          select_values: ['score', 'gilded', 'author', 'timestamp', 'create_utc'],
          cards: comments.map(c => {
              // var commentUserMatch = (typeof users.find(u => u.redditor_id === c.author_id) === 'undefined');
              // console.log(users.find(u => u.redditor_id === "10brol"))
            var commentUserMatch = users.find(u => u.redditor_id === c.author_id)
            console.log(commentUserMatch)
            return {
              title: '',
              subtitle: 'Commented: ' + c.created_utc,
              link: '/comments/detail/' + c.comment_id
            }
          })
        }

        callback(myp)
      })
    })
  }

  render () {
    return <RfGrid filterOptions={[]} loadDataFromServer={(ops, callback) => this.loadDataFromServer(ops, callback)} />
  }
}
